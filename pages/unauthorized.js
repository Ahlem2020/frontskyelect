import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Seo from '../shared/layout-components/seo/seo';

const Unauthorized = () => {
  return (
    <div>
      <Seo title="Unauthorized Access" />
      
      <div className="main-content app-content mt-0">
        <div className="side-app">
          <div className="main-container container-fluid">
            
            <Row className="justify-content-center align-items-center min-vh-100">
              <Col xl={6} lg={8} md={10}>
                <Card className="text-center">
                  <Card.Body className="p-5">
                    <div className="mb-4">
                      <span className="avatar avatar-xxl bg-danger-transparent rounded-circle">
                        <i className="fe fe-shield-off fs-2"></i>
                      </span>
                    </div>
                    
                    <h2 className="mb-3 text-danger">Access Denied</h2>
                    <h5 className="mb-3">Unauthorized Access</h5>
                    <p className="mb-4 text-muted">
                      Sorry, you don&apos;t have permission to access this page. 
                      This area is restricted to administrators only.
                    </p>
                    
                    <div className="d-flex gap-3 justify-content-center">
                      <Link href="/dashboard">
                        <Button variant="primary">
                          <i className="fe fe-home me-2"></i>
                          Go to Dashboard
                        </Button>
                      </Link>
                      <Button 
                        variant="outline-secondary"
                        onClick={() => window.history.back()}
                      >
                        <i className="fe fe-arrow-left me-2"></i>
                        Go Back
                      </Button>
                    </div>
                    
                    <div className="mt-4 pt-4 border-top">
                      <p className="text-muted mb-0">
                        If you believe this is an error, please contact your system administrator.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </div>
        </div>
      </div>
    </div>
  );
};

Unauthorized.layout = "Contentlayout";

export default Unauthorized;
