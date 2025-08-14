import React, { useState } from 'react'
import Seo from '../../../shared/layout-components/seo/seo'
import { Row, Col, Card, Container, Form, Alert } from "react-bootstrap";
import { useRouter } from 'next/router';
import Link from "next/link"
import authService from '../../../shared/services/authService';

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"
import user from "../../../public/assets/img/svgs/user.svg"
import logo from "../../../public/assets/img/brand/logo.png"

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    roles: ['user']
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
 }

 function remove() {
  document.querySelector(".demo_changer").style.right = "-270px";
  document.querySelector(".demo_changer").classList.remove("active");
}

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const result = await authService.register(formData);

    if (result.success) {
      setSuccess('Account created successfully! You can now sign in.');
      // Optionally redirect to signin page after 2 seconds
      setTimeout(() => {
        router.push('/components/authentication/signin');
      }, 2000);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div>
        <Seo title="Signup"/>

		<div className="page main-signin-wrapper" >
     
     
      <Row className="signpages text-center" 
      onClick={() => remove()} 
      >
        <Col md={12} className="col-md-12">
          <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-5 p-2 pos-absolute">
                  <img
                    src={logolight.src}
                    className="header-brand-img mb-4"
                    alt="logo"
                  />
             
                  <h5 className="mt-4 text-white">Create Your Account</h5>
                  <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                    Signup to create, discover and connect with the global
                    community
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                <Container fluid>
                  <Row className=" row-sm">
                    <Card.Body className="mt-2 mb-2">
                      <img
                        src={logo.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={logolight.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <h5 className="text-start mb-2">Signup for Free</h5>
                      <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        {`It's`} free to signup and only takes a minute.
                      </p>
                      
                      {error && (
                        <Alert variant="danger">
                          {error}
                        </Alert>
                      )}
                      
                      {success && (
                        <Alert variant="success">
                          {success}
                        </Alert>
                      )}
                      
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="text-start form-group" controlId="username">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            placeholder="Enter your username"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="text-start form-group" controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className="text-start form-group"
                          controlId="password"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>

                        <button 
                          className="btn ripple btn-main-primary btn-block mt-2"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                      </Form>
                      <div className="text-start mt-5 ms-0">
                        <p className="mb-0">
                          Already have an account?
                          <Link className='ms-2'
                            href={`/components/authentication/signin/`}> 
							              SignIn
                          </Link>
                        </p>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
			</div>
  )
}
Signup.layout = "Authenticationlayout"

export default Signup