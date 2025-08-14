import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'chart.js/auto';
import { Table } from '@mui/material';
import { ProgressBar } from 'react-bootstrap';
import CountUp from 'react-countup';

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
                  <div className="d-flex ms-auto float-end avatar-md ">
                    <img alt="avatar" className="img-fluid img-thumbnail rounded-circle me-3 " 
                      src={ images[candidate.id - 1]} 
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
            <Card.Header className=" border-bottom-0"><label className="main-content-label my-auto">Resultat Election Côte d&apos;Ivoire 2023 </label></Card.Header>
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

