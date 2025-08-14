import React, { useState, useEffect } from 'react';
import authService from '../../services/authService';

const TwoFactorModal = ({ isOpen, onClose, onUserUpdate }) => {
  const [twoFAForm, setTwoFAForm] = useState({
    isEnabled: false,
    secret: '',
    qrCode: '',
    verificationCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isOpen) {
      loadTwoFAStatus();
    }
  }, [isOpen]);

  const loadTwoFAStatus = async () => {
    try {
      setLoading(true);
      setError('');
      
      const result = await authService.get2FAStatus();

      if (result.success) {
        setTwoFAForm({
          isEnabled: result.data.isEnabled,
          secret: result.data.secret || '',
          qrCode: result.data.qrCode || '',
          verificationCode: ''
        });
      } else {
        setError(result.error || 'Failed to load 2FA settings');
      }
    } catch (err) {
      setError(`Failed to load 2FA settings: ${err.message}`);
      console.error('Error loading 2FA:', err);
    } finally {
      setLoading(false);
    }
  };

  const generateSecret = async () => {
    try {
      setLoading(true);
      setError('');
      
      const result = await authService.generate2FASecret();

      if (result.success) {
        console.log('2FA Secret generated successfully:', result.data);
        // Check if qrCode is present in the response
        if (!result.data.qrCode) {
          console.warn('QR Code is missing from 2FA secret response');
        }
        
        setTwoFAForm({
          ...twoFAForm,
          secret: result.data.secret,
          qrCode: result.data.qrCode
        });
      } else {
        setError(result.error || 'Failed to generate 2FA secret');
      }
    } catch (err) {
      setError(`Failed to generate 2FA secret: ${err.message}`);
      console.error('Error generating 2FA:', err);
    } finally {
      setLoading(false);
    }
  };

  const enableTwoFA = async () => {
    if (!twoFAForm.verificationCode) {
      setError('Please enter the verification code from your authenticator app');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');
      
      const result = await authService.enable2FA(twoFAForm.verificationCode);

      if (result.success) {
        setTwoFAForm({...twoFAForm, isEnabled: true});
        setSuccess('2FA enabled successfully!');
        
        // Update user data in parent component
        if (onUserUpdate) {
          const updatedUser = authService.getUser();
          onUserUpdate(updatedUser);
        }
      } else {
        setError(result.error || 'Failed to enable 2FA');
      }
    } catch (err) {
      setError(`Failed to enable 2FA: ${err.message}`);
      console.error('Error enabling 2FA:', err);
    } finally {
      setLoading(false);
    }
  };

  const disableTwoFA = async () => {
    if (!twoFAForm.verificationCode) {
      setError('Please enter the verification code from your authenticator app');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');
      
      const result = await authService.disable2FA(twoFAForm.verificationCode);

      if (result.success) {
        setTwoFAForm({
          isEnabled: false,
          secret: '',
          qrCode: '',
          verificationCode: ''
        });
        setSuccess('2FA disabled successfully!');
        
        // Update user data in parent component
        if (onUserUpdate) {
          const updatedUser = authService.getUser();
          onUserUpdate(updatedUser);
        }
      } else {
        setError(result.error || 'Failed to disable 2FA');
      }
    } catch (err) {
      setError(`Failed to disable 2FA: ${err.message}`);
      console.error('Error disabling 2FA:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setError('');
    setSuccess('');
    setTwoFAForm({
      isEnabled: false,
      secret: '',
      qrCode: '',
      verificationCode: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fe fe-shield me-2"></i>
              Two-Factor Authentication
            </h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger">
                <i className="fe fe-alert-triangle me-2"></i>
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success">
                <i className="fe fe-check-circle me-2"></i>
                {success}
              </div>
            )}

            {loading && !twoFAForm.isEnabled && !twoFAForm.secret ? (
              <div className="text-center p-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading 2FA settings...</p>
              </div>
            ) : !twoFAForm.isEnabled ? (
              // Enable 2FA
              <div>
                <div className="alert alert-info">
                  <i className="fe fe-info me-2"></i>
                  Two-factor authentication adds an extra layer of security to your account.
                </div>
                
                {!twoFAForm.secret ? (
                  <div className="text-center">
                    <button 
                      className="btn btn-primary"
                      onClick={generateSecret}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Generating...
                        </>
                      ) : (
                        <>
                          <i className="fe fe-key me-2"></i>Generate 2FA Secret
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>1. Scan QR Code</h6>
                        <p className="text-muted small">
                          Use Google Authenticator, Authy, or another authenticator app to scan this QR code:
                        </p>
                        {twoFAForm.qrCode ? (
                          <div className="text-center mb-3">
                            <img 
                              src={twoFAForm.qrCode} 
                              alt="2FA QR Code" 
                              className="img-fluid border rounded p-2" 
                              style={{ maxWidth: '200px' }}
                            />
                          </div>
                        ) : (
                          <div className="alert alert-warning mb-3">
                            <i className="fe fe-alert-triangle me-2"></i>
                            <strong>QR Code unavailable.</strong> Please use the secret key below instead.
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <h6>2. Enter Secret Key (Alternative)</h6>
                        <p className="text-muted small">
                          If you can&apos;t scan the QR code, enter this secret key manually:
                        </p>
                        <div className="mb-3">
                          <input 
                            type="text" 
                            className="form-control font-monospace" 
                            value={twoFAForm.secret} 
                            readOnly 
                          />
                          <div className="d-grid mt-2">
                            <button 
                              className="btn btn-sm btn-outline-secondary" 
                              onClick={() => {
                                navigator.clipboard.writeText(twoFAForm.secret);
                                setSuccess("Secret copied to clipboard!");
                                setTimeout(() => setSuccess(""), 2000);
                              }}
                            >
                              <i className="fe fe-copy me-1"></i> Copy to Clipboard
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h6>3. Verify Setup</h6>
                    <p className="text-muted small">
                      Enter the 6-digit code from your authenticator app to verify the setup:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control text-center font-monospace"
                          placeholder="000000"
                          value={twoFAForm.verificationCode}
                          onChange={(e) => setTwoFAForm({...twoFAForm, verificationCode: e.target.value})}
                          maxLength="6"
                        />
                      </div>
                      <div className="col-md-6">
                        <button 
                          className="btn btn-success"
                          onClick={enableTwoFA}
                          disabled={!twoFAForm.verificationCode || loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Enabling...
                            </>
                          ) : (
                            <>
                              <i className="fe fe-check me-2"></i>Enable 2FA
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Disable 2FA
              <div>
                <div className="alert alert-success">
                  <i className="fe fe-check-circle me-2"></i>
                  Two-factor authentication is currently <strong>enabled</strong> on your account.
                </div>
                
                <div className="alert alert-warning">
                  <i className="fe fe-alert-triangle me-2"></i>
                  Disabling 2FA will make your account less secure. Are you sure you want to continue?
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">Verification Code</label>
                    <input
                      type="text"
                      className="form-control text-center font-monospace"
                      placeholder="000000"
                      value={twoFAForm.verificationCode}
                      onChange={(e) => setTwoFAForm({...twoFAForm, verificationCode: e.target.value})}
                      maxLength="6"
                    />
                    <small className="form-text text-muted">
                      Enter the code from your authenticator app
                    </small>
                  </div>
                  <div className="col-md-6 d-flex align-items-end">
                    <button 
                      className="btn btn-danger"
                      onClick={disableTwoFA}
                      disabled={!twoFAForm.verificationCode || loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Disabling...
                        </>
                      ) : (
                        <>
                          <i className="fe fe-x me-2"></i>Disable 2FA
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light" onClick={handleClose}>
              <i className="fe fe-x me-2"></i>Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorModal;
