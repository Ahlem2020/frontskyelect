import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

const LogoutButton = ({ className = '', variant = 'outline-danger' }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Button 
      variant={variant}
      className={className}
      onClick={handleLogout}
    >
      <i className="fe fe-log-out me-2"></i>
      Logout
    </Button>
  );
};

export default LogoutButton;
