import React, { useState, useEffect, useId, useRef, useMemo, useCallback } from "react";
import PageHeader from "../shared/layout-components/page-header/page-header";
import { Card, Col, Row, Form, Button, Alert, Spinner, Badge } from "react-bootstrap";
import Seo from "../shared/layout-components/seo/seo";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Select from "react-select";
import Swal from "sweetalert2";
import withAuth from './withAuth';

// Candidate images - consider moving to a separate config file or database
const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/President_Bongo_Ondimba_%2852054341321%29_%28cropped%29.jpg/220px-President_Bongo_Ondimba_%2852054341321%29_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/AbcProfile.jpg/220px-AbcProfile.jpg',
  'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1256,height=628/https://prod.cdn-medias.jeuneafrique.com/medias/2023/06/20/jad20230620-conf-gabon-albertondaosso-1256x628-1687275001.jpg',
  'https://i0.wp.com/www.gabonmediatime.com/wp-content/uploads/2023/07/Gabon-Gabonmediatime_Gerard-Ella-Nguema.jpg?fit=960%2C540&ssl=1',
  'https://gabonactu.com/wp-content/uploads/2021/05/Terence-Gnembou-1.jpg',
  'https://pyramidmediasgabon.com/wp-content/uploads/2023/07/JR2-1-248x300.jpg',
  'https://gabonactu.com/wp-content/uploads/2023/07/Mbatchi-elie2.jpg',
  'https://www.union.sonapresse.com/sites/default/files/capture_decran_2023-02-10_a_19.24.57.png',
  'https://www.union.sonapresse.com/sites/default/files/images/stories/Chroniqueur_images/2016/12/journal_30/12/16/Gabon-politique/134566.HR.jpg',
  'https://media.licdn.com/dms/image/C5603AQGTXxde3fT7Yg/profile-displayphoto-shrink_800_800/0/1659553169460?e=2147483647&v=beta&t=qsoIxV2KLJXgI1lkqi4wkPmhbo18XMAih9ozt5S--D8',
  'https://www.lenouveaugabon.com/media/k2/items/cache/6a84fd5692a27662f4891463aa636cd1_L.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mike_Jocktane.png',
  'https://i0.wp.com/www.gabonmediatime.com/wp-content/uploads/2023/06/Gabon-Gabonmediatime-Victoire-Lasseni-Duboze.jpeg?fit=960%2C540&ssl=1',
  'https://www.gabonreview.com/wp-content/uploads/2020/03/raymond-Ndong-Sima.jpg',
  'https://vatricof.com/wp-content/uploads/2022/07/CAPP.jpg',
  'https://gabontelegraph.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-01-at-10.27.22.jpeg',
  'https://www.gabonclic.info/sites/default/files/whatsapp_image_2022-08-30_at_11.46.06_0.jpeg',
  'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1024,height=690/https://prod.cdn-medias.jeuneafrique.com/medias/2023/08/07/jad20230807-gabon-itw-pierre-claver-maganga-moussavou-1024x690.jpg',
  'https://media.licdn.com/dms/image/D4E03AQHDMN3gO-b9cw/profile-displayphoto-shrink_800_800/0/1684421576156?e=2147483647&v=beta&t=2nEJykXpx7bnrex_5kscFKgHUEWw1D3Q8iSDOM9A4PY'
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
              const errorData = await response.json().catch(() => ({}));
              throw new Error(errorData.message || `Erreur HTTP: ${response.status}`);
            }

            return await response.json();
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

  // Enhanced bureau selection component
  const selectId = useId();
  
  const BureauSelector = useCallback(() => {
    const bureauOptions = bureau.map((item) => ({
      value: item.originalId,
      label: `${item.originalId} - ${item.province}`,
      item: item
    }));

    return (
      <div className="mb-4">
        <Form.Label className="fw-bold mb-2">
          Bureau de vote <span className="text-danger">*</span>
        </Form.Label>
        <Select
          isClearable={true}
          isSearchable={true}
          isDisabled={loading || submitting}
          instanceId={selectId}
          options={bureauOptions}
          value={selectedBureau}
          placeholder="Sélectionner un bureau de vote..."
          noOptionsMessage={() => "Aucun bureau trouvé"}
          loadingMessage={() => "Chargement..."}
          onChange={(data) => {
            setSelectedBureau(data);
            setError(null);
            setSuccess(null);
            // Reset candidate votes when changing bureau
            const resetCandidates = candidat.map((item) => ({ ...item, vote: 0 }));
            setCandidat(resetCandidates);
            inputRefs.current.forEach((input) => {
              if (input) input.value = "";
            });
          }}
          styles={{
            control: (base, state) => ({
              ...base,
              borderColor: state.isFocused ? '#0d6efd' : base.borderColor,
              boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(13, 110, 253, 0.25)' : base.boxShadow,
            }),
          }}
        />
      </div>
    );
  }, [bureau, selectedBureau, candidat, loading, submitting, selectId]);

  // Enhanced vote input handler with validation
  const handleNumberChange = useCallback((index, value) => {
    const numericValue = parseInt(value) || 0;
    
    // Validate input
    if (numericValue < 0) {
      setError("Le nombre de votes ne peut pas être négatif.");
      return;
    }
    
    if (numericValue > 10000) {
      setError("Le nombre de votes semble trop élevé. Veuillez vérifier.");
      return;
    }

    setError(null);
    const updatedCandidates = [...candidat];
    updatedCandidates[index].vote = numericValue;
    setCandidat(updatedCandidates);
  }, [candidat]);

  // Loading component
  const LoadingSpinner = () => (
    <div className="text-center p-4">
      <Spinner animation="border" variant="primary" />
      <p className="mt-2">Chargement en cours...</p>
    </div>
  );

  return (
    <div>
      <Seo title={"Saisie des résultats de vote - Élection Gabon"} />
      <PageHeader
        title="Saisie des résultats de vote"
        item="Accueil"
        active_item="Saisie des résultats de vote"
      />
      
      {/* Status Messages */}
      {error && (
        <Alert variant="danger" className="mb-4" dismissible onClose={() => setError(null)}>
          <Alert.Heading>Erreur</Alert.Heading>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert variant="success" className="mb-4" dismissible onClose={() => setSuccess(null)}>
          <Alert.Heading>Succès</Alert.Heading>
          {success}
        </Alert>
      )}

      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card crypto-custom-card shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="fas fa-vote-yea me-2"></i>
                Formulaire de saisie des votes
              </h5>
            </Card.Header>
            <Card.Body className="p-4">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {/* Bureau Selection */}
                  <BureauSelector />
                  
                  {/* Summary Information */}
                  {selectedBureau && (
                    <div className="mb-4 p-3 bg-light rounded">
                      <Row>
                        <Col md={6}>
                          <strong>Bureau sélectionné:</strong> {selectedBureau.label}
                        </Col>
                        <Col md={6} className="text-end">
                          <Badge bg="info" className="fs-6">
                            Total des votes: {totalVotes}
                          </Badge>
                        </Col>
                      </Row>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="mb-0">Liste des candidats</h6>
                    <div>
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        className="me-2"
                        onClick={resetForm}
                        disabled={submitting || !selectedBureau}
                      >
                        <i className="fas fa-undo me-1"></i>
                        Réinitialiser
                      </Button>
                      <Button 
                        variant="success" 
                        onClick={handleSubmit}
                        disabled={submitting || !isFormValid}
                      >
                        {submitting ? (
                          <>
                            <Spinner animation="border" size="sm" className="me-2" />
                            Soumission...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-check me-1"></i>
                            Soumettre les résultats
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Candidates Table */}
                  {candidat.length > 0 ? (
                    <TableContainer component={Paper} className="shadow-sm">
                      <Table>
                        <TableHead>
                          <TableRow className="bg-light">
                            <TableCell><strong>N°</strong></TableCell>
                            <TableCell><strong>Photo</strong></TableCell>
                            <TableCell><strong>Candidat</strong></TableCell>
                            <TableCell><strong>Nombre de votes</strong></TableCell>
                            <TableCell><strong>Pourcentage</strong></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {candidat.map((candidate, index) => {
                            const percentage = totalVotes > 0 ? ((candidate.vote || 0) / totalVotes * 100).toFixed(1) : 0;
                            return (
                              <TableRow key={candidate.id} hover>
                                <TableCell>{candidate.id}</TableCell>
                                <TableCell>
                                  <div className="d-flex align-items-center">
                                    <img
                                      alt={`${candidate.firstName} ${candidate.lastName}`}
                                      className="rounded-circle me-2"
                                      src={images[candidate.id - 1] || '/default-avatar.png'}
                                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                      onError={(e) => {
                                        e.target.src = '/default-avatar.png';
                                      }}
                                    />
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div>
                                    <strong>{candidate.lastName} {candidate.firstName}</strong>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Form.Control
                                    ref={el => (inputRefs.current[index] = el)}
                                    placeholder="0"
                                    type="number"
                                    min="0"
                                    max="10000"
                                    size="sm"
                                    disabled={!selectedBureau || submitting}
                                    style={{ maxWidth: '120px' }}
                                    onChange={(e) => handleNumberChange(index, e.target.value)}
                                    className={candidate.vote > 0 ? 'border-success' : ''}
                                  />
                                </TableCell>
                                <TableCell>
                                  <Badge 
                                    bg={candidate.vote > 0 ? 'success' : 'secondary'} 
                                    className="fs-6"
                                  >
                                    {percentage}%
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ) : (
                    <div className="text-center p-4">
                      <p className="text-muted">Aucun candidat disponible</p>
                    </div>
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

VoteResultsEntry.layout = "Contentlayout";

export default withAuth(VoteResultsEntry);
