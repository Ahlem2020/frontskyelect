import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import Seo from '../../../shared/layout-components/seo/seo'
import { Row, Col, Card, Container, Form, Alert } from "react-bootstrap";
import { useRouter } from 'next/router';
import Link from "next/link"
import authService from '../../../shared/services/authService';

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"
import user from "../../../public/assets/img/svgs/user.svg"
import logo from "../../../public/assets/img/brand/logo.png"

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [twoFACode, setTwoFACode] = useState('');
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pendingLogin, setPendingLogin] = useState(null);
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

    const result = await authService.login(formData);

    if (result.success) {
      if (result.requiresTwoFA) {
        // User has 2FA enabled, save data and redirect to 2FA page
        console.log('2FA required, redirecting to 2FA page');
        
        // Store minimal data needed for 2FA verification
        const pendingData = {
          username: formData.username,
          email: result.data?.email || '',
          timestamp: new Date().toISOString()
        };
        
        console.log('Storing pendingLoginData:', pendingData);
        localStorage.setItem('pendingLoginData', JSON.stringify(pendingData));
        
        router.push('/2fa');
      } else {
        // Login successful without 2FA
        router.push('/dashboard');
      }
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleTwoFASubmit = async (e) => {
    e.preventDefault();
    
    if (!twoFACode) {
      setError('Please enter the 6-digit code from your authenticator app');
      return;
    }

    setLoading(true);
    setError('');

    const result = await authService.verifyTwoFA(twoFACode, pendingLogin);

    if (result.success) {
      // 2FA verification successful, complete login
      router.push('/dashboard');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleBackToLogin = () => {
    setShowTwoFA(false);
    setPendingLogin(null);
    setTwoFACode('');
    setError('');
  };

  return (
    <div>
      <Seo title="Sign In"/>
      
      <div className="page main-signin-wrapper">
         
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
                    
                    <h5 className="mt-4 text-white">Welcome Back</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                      Sign in to access your account
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
                        <h5 className="text-start mb-2">
                          {showTwoFA ? 'Two-Factor Authentication' : 'Sign In'}
                        </h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">
                          {showTwoFA 
                            ? 'Enter the 6-digit code from your authenticator app to complete sign in.'
                            : 'Enter your credentials to access your account.'
                          }
                        </p>
                        
                        {error && (
                          <Alert variant="danger">
                            <i className="fe fe-alert-triangle me-2"></i>
                            {error}
                          </Alert>
                        )}
                        
                        {!showTwoFA ? (
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
                              {loading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                  Signing In...
                                </>
                              ) : (
                                'Sign In'
                              )}
                            </button>
                          </Form>
                        ) : (
                          <Form onSubmit={handleTwoFASubmit}>
                            <div className="text-center mb-4">
                              <i className="fe fe-shield text-primary" style={{ fontSize: '3rem' }}></i>
                            </div>
                            
                            <Form.Group className="text-start form-group" controlId="twoFACode">
                              <Form.Label>Authentication Code</Form.Label>
                              <Form.Control
                                placeholder="000000"
                                type="text"
                                value={twoFACode}
                                onChange={(e) => setTwoFACode(e.target.value)}
                                maxLength="6"
                                className="text-center font-monospace"
                                style={{ fontSize: '1.2rem', letterSpacing: '0.5rem' }}
                                required
                              />
                              <Form.Text className="text-muted">
                                Open your authenticator app and enter the 6-digit code
                              </Form.Text>
                            </Form.Group>

                            <div className="d-grid gap-2">
                              <button 
                                className="btn ripple btn-main-primary"
                                type="submit"
                                disabled={loading || !twoFACode}
                              >
                                {loading ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                    Verifying...
                                  </>
                                ) : (
                                  <>
                                    <i className="fe fe-check me-2"></i>
                                    Verify & Sign In
                                  </>
                                )}
                              </button>
                              
                              <button 
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handleBackToLogin}
                                disabled={loading}
                              >
                                <i className="fe fe-arrow-left me-2"></i>
                                Back to Login
                              </button>
                            </div>
                          </Form>
                        )}
                        <div className="text-start mt-5 ms-0">
                          {!showTwoFA && (
                            <p className="mb-0">
                              {`Don't have an account?`}
                              <Link className='ms-2'
                                href={`/components/authentication/signup/`}> 
                                Sign Up
                              </Link>
                            </p>
                          )}
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
Signin.layout = "Authenticationlayout"

export default Signin