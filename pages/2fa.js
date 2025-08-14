import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Card, Form, Alert, Button } from 'react-bootstrap';
import Seo from '../shared/layout-components/seo/seo';
import authService from '../shared/services/authService';
import logolight from '../public/assets/img/brand/logo-light.png';
import logo from '../public/assets/img/brand/logo.png';

export default function TwoFAPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if there's pending login data
    try {
      const pendingData = JSON.parse(localStorage.getItem('pendingLoginData'));
      if (pendingData) {
        setUserData(pendingData);
      } else {
        // No pending data, redirect to login
        router.replace('/components/authentication/signin');
      }
    } catch (err) {
      console.error('Error parsing pendingLoginData:', err);
      router.replace('/components/authentication/signin');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate code format
    if (!code || code.length !== 6 || !/^\d+$/.test(code)) {
      setError('Please enter a valid 6-digit code');
      setLoading(false);
      return;
    }
    
    // Retrieve pendingLoginData from localStorage
    const pendingLoginData = JSON.parse(localStorage.getItem('pendingLoginData'));
    if (!pendingLoginData) {
      setError('No pending login data found. Please login again.');
      setLoading(false);
      return;
    }
    
    console.log('Submitting 2FA code with data:', { 
      code, 
      username: pendingLoginData.username 
    });
    
    try {
      const result = await authService.verifyTwoFA(code, pendingLoginData);
      console.log('2FA verification result:', result);
      
      if (result.success) {
        // Save user/session info, redirect to dashboard
        localStorage.removeItem('pendingLoginData');
        router.push('/dashboard');
      } else {
        setError(result.error || 'Invalid authentication code.');
      }
    } catch (err) {
      console.error('Error during 2FA verification:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    localStorage.removeItem('pendingLoginData');
    router.push('/components/authentication/signin');
  };

  return (
    <div>
      <Seo title="Two-Factor Authentication" />
      <div className="page main-signin-wrapper">
        <Row className="signpages text-center">
          <Col md={12} className="col-md-12">
            <Card>
              <Row className="row-sm">
                <Col lg={6} xl={5} className="d-none d-lg-block text-center bg-primary details">
                  <div className="mt-5 pt-5 p-2 pos-absolute">
                    <img src={logolight.src} className="header-brand-img mb-4" alt="logo" />
                    <h5 className="mt-4 text-white">Two-Factor Authentication</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                      Secure your account with two-factor authentication
                    </span>
                  </div>
                </Col>
                <Col lg={6} xl={7} xs={12} sm={12} className="login_form">
                  <div className="p-4 pt-5">
                    <Card.Body>
                      <div className="text-center mb-4">
                        <i className="fe fe-shield text-primary" style={{ fontSize: '3rem' }}></i>
                        <h5 className="mt-3">Two-Factor Authentication</h5>
                        <p className="text-muted mb-4">
                          {userData?.username ? `Hello ${userData.username}, ` : ''}
                          Please enter the 6-digit code from your authenticator app.
                        </p>
                      </div>
                      
                      {error && (
                        <Alert variant="danger">
                          <i className="fe fe-alert-triangle me-2"></i>
                          {error}
                        </Alert>
                      )}
                      
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="text-start form-group" controlId="twoFACode">
                          <Form.Control
                            placeholder="000000"
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            maxLength="6"
                            className="text-center font-monospace"
                            style={{ fontSize: '1.5rem', letterSpacing: '0.5rem' }}
                            required
                            autoFocus
                          />
                          <Form.Text className="text-muted text-center d-block mt-2">
                            Open your authenticator app to view your verification code
                          </Form.Text>
                        </Form.Group>
                        
                        <div className="d-grid gap-2 mt-4">
                          <Button 
                            variant="primary" 
                            type="submit" 
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Verifying...
                              </>
                            ) : (
                              'Verify & Sign In'
                            )}
                          </Button>
                          
                          <Button 
                            variant="outline-secondary" 
                            onClick={handleBackToLogin}
                            disabled={loading}
                          >
                            Back to Login
                          </Button>
                        </div>
                      </Form>
                    </Card.Body>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
