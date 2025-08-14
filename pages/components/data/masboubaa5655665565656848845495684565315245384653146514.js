import React, { useState } from 'react';
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Card, Row, Col, Form, Button, Pagination } from "react-bootstrap";
import dynamic from 'next/dynamic';
import * as basicdatatable from "../../../shared/data/crypto-currencies/qg"
import Seo from '../../../shared/layout-components/seo/seo';
import * as forms from "../../../shared/data/forms/advanceforms"
import { Table } from '@mui/material';

const DataTableExtensions = dynamic(() => import('react-data-table-component-extensions'), { ssr: false });

const Wallet = () => {
  const totalData = 4829;
  const itemsPerPage = 10;

  // Use useState to manage currentPage
  const [currentPage, setCurrentPage] = useState(0);

  // Your data
  const basicdatatableData = [...basicdatatable.data];

  const pageCount = Math.ceil(totalData / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the range of data to display for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = basicdatatableData.slice(startIndex, endIndex);

  return (
    <div>
      <Seo title={"Quartier général"} />

      <PageHeader title=" Quartier général" item="Accueil" active_item="Quartier général" />
      {/* <!-- row --> */}
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card crypto-custom-card">
            <Card.Header className=" border-bottom-0">
              <label className="main-content-label my-auto">Quartier général</label>
              <Button variant="dark" style={{ borderRadius: '50px', float: 'right' }} >Save</Button>

            </Card.Header>

            <Card.Body>

              <Table hover="true" responsive="true" className="table text-nowrap border">
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">ID</th>
                    <th className="bg-transparent">Bureau</th>
                    <th className="bg-transparent">Nombre D&apos;inscrit</th>

                    <th className="bg-transparent">Candidat</th>
                    <th className="bg-transparent">Vote </th>

                  </tr>
                </thead>
                <tbody>
                  {currentPageData.map((items, index) => (
                    <tr key={index} data-index={index} >
                      <td>{items.id}</td>
                      <td>{items.province} </td>
                      <td>{items.inscrit} </td>

                      <td>
                        <Col lg={12} className="my-auto">
                          <forms.Candidat />
                        </Col>
                      </td>
                      <td>  <div sm={3} className="col-sm">
                        <Form.Control placeholder="Nombre de Vote " type="text" />
                      </div>  </td>


                    </tr>
                  ))}

                </tbody>
              </Table>
              <Pagination className="pagination-circled mb-0" style={{ float: 'right' }}>
                <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} disabled={currentPage === 0}> <i className="fas fa-angle-double-left"></i> </Pagination.Prev>

                {currentPage > 0 && <Pagination.Ellipsis disabled />}

                {[...Array(Math.min(5, pageCount))].map((_, idx) => {
                  const pageIdx = currentPage + idx - 2;
                  if (pageIdx < 0 || pageIdx >= pageCount) return null;
                  return (
                    <Pagination.Item className="page-item"
                      key={pageIdx} active={pageIdx === currentPage} onClick={() => setCurrentPage(pageIdx)}>
                      {pageIdx + 1}
                    </Pagination.Item>
                  );
                })}

                {currentPage < pageCount - 1 && <Pagination.Ellipsis disabled />}

                <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount - 1))} disabled={currentPage === pageCount - 1} > <i className="fas fa-angle-double-right"></i> </Pagination.Next>
              </Pagination>



            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Wallet.layout = "Contentlayout"

export default Wallet;
