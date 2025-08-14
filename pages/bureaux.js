import React, { useState, useEffect } from 'react';
import PageHeader from '../shared/layout-components/page-header/page-header';
import { Card, Row, Col, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import Seo from '../shared/layout-components/seo/seo';
import * as forms from '../shared/data/forms/advanceforms';

const Transcations = () => {
    const [bureau, setBureau] = useState([]);
    const [filteredBureau, setFilteredBureau] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const fetchBureau = async () => {
        try {
            const response = await fetch('http://localhost:5000/offices');
            if (response.ok) {
                const data = await response.json();
                setBureau(data);
                setFilteredBureau(data);
            } else {
                throw new Error('Failed to fetch bureau data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBureau();
        const intervalId = setInterval(fetchBureau, 30000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchKeyword(keyword);

        const filteredData = bureau.filter((item) =>
            Object.values(item).some((value) =>
                typeof value === 'string' && value.toLowerCase().includes(keyword)
            )
        );

        setFilteredBureau(filteredData);
    };


    const columns = [
        { name: 'No', selector: row => row.originalId, sortable: true },
        { name: 'Province', selector: row => row.province, sortable: true },
        { name: 'Num° Inscrit', selector: row => row.registered, sortable: true },
        { name: 'Bureaux°', selector: row => row.offices, sortable: true },
    ];

    return (
        <div>
            <Seo title={'Bureaux de vote'} />
            <PageHeader title="Bureaux de vote" item="Accueil" active_item="Bureaux de vote" />
            <Row className="row-sm">
                <Col md={12} lg={12} xl={12}>
                    <Card className="custom-card transcation-crypto">
                        <Card.Header className="border-bottom-0">
                            <h6 className="main-content-label mb-1">LISTE DES BUREAUX DE VOTE</h6>
                        </Card.Header>
                        <Card.Body className="card-body pt-0">
                            <Form.Control
                                placeholder="Recherche..."
                                value={searchKeyword}
                                onChange={handleSearch}
                                className="mb-3"
                                type="text"
                            />
                            <DataTable
                                columns={columns}
                                data={filteredBureau}
                                pagination
                                defaultSortField="id"
                                defaultSortAsc={false}
                                paginationPerPage={10}
                                paginationRowsPerPageOptions={[10, 20, 30]}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

Transcations.layout = 'Contentlayout';

export default Transcations;