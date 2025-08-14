import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { Table } from '@mui/material';
import * as forms from '../../../shared/data/forms/advanceforms';
import PageHeader from '../../../shared/layout-components/page-header/page-header'
const Buyselldashbord = dynamic(() => import('../../../shared/data/crypto-currencies/buyselldashbord'), { ssr: false });
import Seo from '../../../shared/layout-components/seo/seo';

const URL = "http://localhost:5000/candidates";

async function GET() {
  const res = await fetch(URL);

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  } else {
    throw new Error("Failed to fetch data");
  }
}
const Buysell = () => {
  const [CryptMarketingValues, setCryptMarketingValues] = useState([]);

  useEffect(() => {
    initializeValues();
  }, []);

  async function initializeValues() {
    try {
      const cryptMarketingValues = await GET();
      setCryptMarketingValues(cryptMarketingValues);
      console.log(cryptMarketingValues);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <div>
      <Seo title={"Votes"} />
      <PageHeader title="Votes" item="Accueil" active_item="Insertion Vote" />
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card crypto-custom-card">
            <Card.Header className=" border-bottom-0">
              <label className="main-content-label my-auto">Quartier général</label>
              <Button variant="dark" style={{ borderRadius: '50px', float: 'right' }} >Save</Button>
            </Card.Header>
            <Card.Body>
              <Table hover responsive className="table text-nowrap border">
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">ID</th>
                    <th className="bg-transparent">Nom & Prenom</th>
                    <th className="bg-transparent">Partie</th>
                    <th className="bg-transparent">Bureau</th>
                    <th className="bg-transparent">Vote</th>
                  </tr>
                </thead>
                <tbody>
                  {CryptMarketingValues.map((items, index) => (
                    <tr key={index} data-index={index}>
                      <td>{items.id}</td>
                      <td>{items.lastName} {items.firstName}</td>
                      <td>{items.part}</td>
                      <td>
                        <Col lg={12} className="my-auto">
                          <forms.Bureau />
                        </Col>
                      </td>
                      <td>
                        <div sm={3} className="col-sm">
                          <Form.Control placeholder="Nombre de Vote" type="text" />
                        </div>
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
}
Buysell.layout = "Contentlayout"


export default Buysell