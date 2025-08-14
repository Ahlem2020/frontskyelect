import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import * as marketcap from "../shared/data/crypto-currencies/marketcap"
// Need to Import {Importent}
import { Table } from '@mui/material';
import { ProgressBar } from 'react-bootstrap';
import CountUp from 'react-countup';



const Marketcapcom = () => {
  const [candidat, setCandidat] = useState([]);

  const fetchCandidat = async () => {
    const response = await fetch('http://localhost:5000/candidates');
    const data = await response.json();
    setCandidat(data);

  };
  useEffect(() => {
    fetchCandidat();

    const intervalId = setInterval(fetchCandidat, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const top4Candidates = candidat
    ? [...candidat].sort((a, b) => b.totalVote - a.totalVote).slice(0, 4)
    : [];
  
  return (
    <div>
      {/* <!-- row --> */}
      <Row className="row-sm">
        {top4Candidates.map((candidate, index) => (
          <Col lg={6} xl={6} xxl={3} md={6} key={index}>
            <Card className="custom-card">
              <Card.Body className="">
                <h5 className="tx-14">{candidate.lastName} {candidate.firstName}</h5>
                <div className="d-flex">
                  <div className="volume">
                    <h4 className="mb-2">
                      <CountUp start={0} end={candidate.totalVote} duration={1.5} separator=" " />
                      <span className="text-muted tx-12"> Electeurs</span>
                    </h4>
                  </div>
                  <div className="d-flex ms-auto float-end avatar-xl ">
                    <img alt="avatar" className="img-fluid img-thumbnail rounded-circle me-3 " 
                      src={[candidate.image]} 
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}


      </Row>
      {/* <!-- End row -->

						<!-- row opened --> */}
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card crypto-custom-card">
            <Card.Header className=" border-bottom-0"><label className="main-content-label my-auto">Resultat Election Côte d&apos;Ivoire 2025 </label></Card.Header>
            <Card.Body>

              <Table hover="true" responsive="true" className="table text-nowrap border">
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">No</th>
                    <th className="bg-transparent">Nom</th>
                    <th className="bg-transparent">Prenom</th>
                    <th className="bg-transparent">Vote</th>
                    <th className="bg-transparent">Progrès</th>
                  </tr>
                </thead>
                <tbody>
                  {candidat.map((items, index) => (
                    <tr key={index} data-index={index} >
                      <td>{items.id}</td>
                      <td>{items.lastName}</td>
                      <td>{items.firstName}</td>
                      {((items.totalVote / 846822) * 100).toFixed(2)}%

                      <td> <ProgressBar animated now={((items.totalVote / 846822) * 100).toFixed(2)} className=" mg-b-10" variant="info" /></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- Row End --> */}
    </div>
  )
}

export default Marketcapcom
