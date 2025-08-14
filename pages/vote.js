import React, { useState, useEffect, useId, useRef, useMemo, useCallback } from "react";
import PageHeader from "../shared/layout-components/page-header/page-header";
import { Card, Col, Row, Form, Button, Alert, Spinner, Badge } from "react-bootstrap";
import Seo from "../shared/layout-components/seo/seo";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Select from "react-select";
import Swal from "sweetalert2";
import withAuth from './withAuth';


const images = [
'https://s7d1.scene7.com/is/image/wbcollab/alassane-ouattara_1-2:220x220?qlt=90&fmt=webp&resMode=sharp2',
'https://www.koaci.com/assets/news/thumbnails/1500/2025/07/photo_1753995717.jpg',
'https://afriksoir.net/wp-content/uploads/2025/01/Jean-Louis-BILLON.jpg',
'https://www.financialafrik.com/wp-content/uploads/2021/07/Simone-Gbagbo.jpg',   
'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2017/12/04/gnagbokacou.jpg',
'https://static.wixstatic.com/media/3d739b_de79a4f3b3854ce3975abdc198c61cef~mv2.jpg/v1/fill/w_760,h_856,fp_0.57_0.24,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc7d5309aa94aa0d0b6c12a9b8c6f0e5_XL.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Vincent_Toh_Bi_2.jpg/960px-Vincent_Toh_Bi_2.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiitDaOAQBEJTbPi9dMCsdTdVO71CPifjdTw&s',
'https://upload.wikimedia.org/wikipedia/commons/0/08/Henriette_Lagou_Adjoua.jpg',
'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mike_Jocktane.png',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyjSKDgj-mY9EndZCC2R2AvrhQNQ-cVZ9eYDnZTqlmx6slzhX0_uJadWNE4uF9MrDYHE&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKTbwQVHFoM1YJN6HRaVrKwvStn3dC8iiYQ&s',

];

const VoteResultsEntry = () => {
  // State management
  const [bureau, setBureau] = useState([]);
  const [candidat, setCandidat] = useState([]);
  const [selectedBureau, setSelectedBureau] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const inputRefs = useRef([]);

  // Computed values
  const totalVotes = useMemo(() => {
    return candidat.reduce((sum, candidate) => sum + (candidate.vote || 0), 0);
  }, [candidat]);

  const isFormValid = useMemo(() => {
    return selectedBureau && candidat.length > 0 && candidat.some(c => c.vote > 0);
  }, [selectedBureau, candidat]);

  // Data fetching functions with improved error handling
  const fetchCandidat = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/candidates");

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setCandidat(data.map(candidate => ({ ...candidate, vote: 0 })));
    } catch (error) {
      console.error("Erreur lors du chargement des candidats:", error);
      setError(`Impossible de charger les candidats: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBureau = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/offices");
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      setBureau(data);
    } catch (error) {
      console.error("Erreur lors du chargement des bureaux:", error);
      setError(`Impossible de charger les bureaux: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchCandidat();
    fetchBureau();
  }, [fetchCandidat, fetchBureau]);

  // Reset form function
  const resetForm = useCallback(() => {
    setSelectedBureau(null);
    const resetCandidates = candidat.map(candidate => ({ ...candidate, vote: 0 }));
    setCandidat(resetCandidates);
    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
  }, [candidat]);

  // Enhanced submit function with better validation and feedback
  const handleSubmit = useCallback(async () => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(null);

      // Comprehensive validation
      if (!selectedBureau) {
        setError("Veuillez sélectionner un bureau de vote avant de soumettre.");
        return;
      }

      if (totalVotes === 0) {
        setError("Veuillez saisir au moins un vote avant de soumettre.");
        return;
      }

      const data = {
        office: selectedBureau.value,
        candidates: candidat.map((item) => ({
          id: item.id,
          vote: item.vote || 0,
        })),
        totalVotes: totalVotes,
        timestamp: new Date().toISOString()
      };

      const result = await Swal.fire({
        title: "Confirmation de soumission",
        html: `
          <div class="text-start">
            <p><strong>Bureau:</strong> ${selectedBureau.label}</p>
            <p><strong>Total des votes:</strong> ${totalVotes}</p>
            <p>Voulez-vous confirmer la soumission de ces résultats ?</p>
          </div>
        `,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Confirmer",
        cancelButtonText: "Annuler",
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545"
      });

      if (!result.isConfirmed) return;

      const passwordResult = await Swal.fire({
        title: "Saisissez votre mot de passe",
        input: "password",
        inputPlaceholder: "Mot de passe requis",
        inputAttributes: {
          autocapitalize: "off",
          autocomplete: "current-password"
        },
        showCancelButton: true,
        confirmButtonText: "Soumettre",
        cancelButtonText: "Annuler",
        showLoaderOnConfirm: true,
        inputValidator: (value) => {
          if (!value || value.length < 3) {
            return "Le mot de passe doit contenir au moins 3 caractères";
          }
        },
        preConfirm: async (password) => {
          try {
            const finalData = { ...data, password };
            
            const response = await fetch("http://localhost:5000/votes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(finalData),
            });

            if (!response.ok) {
              let errorMessage = `Erreur HTTP: ${response.status}`;
              try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
              } catch (jsonError) {
                // If JSON parsing fails, try to get text response
                try {
                  const errorText = await response.text();
                  errorMessage = errorText || errorMessage;
                } catch (textError) {
                  // Keep the default HTTP error message
                }
              }
              throw new Error(errorMessage);
            }

            try {
              return await response.json();
            } catch (jsonError) {
              // If successful response doesn't contain JSON, return empty object
              return {};
            }
          } catch (error) {
            Swal.showValidationMessage(`Erreur lors de la soumission: ${error.message}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      });

      if (passwordResult.isConfirmed) {
        setSuccess("Les résultats ont été soumis avec succès !");
        
        // Reset form
        resetForm();
        
        Swal.fire({
          icon: "success",
          title: "Succès !",
          text: "Les résultats de vote ont été enregistrés avec succès.",
          confirmButtonColor: "#28a745"
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setError(`Erreur lors de la soumission: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  }, [selectedBureau, candidat, totalVotes, resetForm]);

  const Singleselect = () => {
    const objectArray = bureau.map((items, index) => {
      return {
        value: items.originalId,
        label: items.originalId + " " + items.province,
      };
    });
    return (
      <Select
        isClearable={true}
        isSearchable={true}
        instanceId={useId()}
        options={objectArray}
        value={selectedBureau}
        placeholder={"Sélectionner un bureau"}
        onChange={(data) => {
          setSelectedBureau(data);
          const newcandidat = candidat.map((item) => {
            return { ...item, vote: 0 };
          });
          setCandidat(newcandidat);
          inputRefs.current.forEach((input) => {
            input.value = null;
          });
        }}
      />
    );
  };

  const handleNumberChange = (index, value) => {
    const newcandidat = [...candidat];
    newcandidat[index].vote = value * 1;
    setCandidat(newcandidat);
  };

  return (
    <div>
      <Seo title={"Insertion des résultats de vote"} />
      <PageHeader
        title="Insertion des résultats de vote"
        item="Accueil"
        active_item="Insertion des résultats de vote"
      />
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card crypto-custom-card">
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "20px",
                }}
              >
                <Button variant="dark" onClick={handleSubmit}>
                  Submit Data
                </Button>
              </div>
              <Singleselect />
              <br />

              <Table
                hover="true"
                responsive="true"
                className="table text-nowrap border"
              >
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">No</th>
                    <th className="bg-transparent">Image</th>
                    <th className="bg-transparent">Candidat</th>
                    <th className="bg-transparent">Vote</th>
                  </tr>
                </thead>
                <tbody>
                  {candidat.map((items, index) => (
                    <tr key={index} data-index={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="main-img-user avatar-xl">
                          <img
                            alt="avatar"
                            className="rounded-circle "
                            src={items.image || images[index % images.length]}
                          />
                        </div>
                      </td>
                      <td>
                        {items.lastName} {items.firstName}
                      </td>
                      <td>
                        <Form.Control
                          ref={el => (inputRefs.current[index] = el)}
                          placeholder="Nombre de Vote "
                          type="number"
                          onChange={(e) =>
                            handleNumberChange(index, e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

VoteResultsEntry.layout = "Contentlayout";

export default withAuth(VoteResultsEntry);
