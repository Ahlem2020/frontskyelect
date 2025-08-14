import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import authService from '../../services/authService';

const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authService.logout();
    router.push('/components/authentication/signin');
  };

  const user = authService.getUser();

  return (
    <Dropdown className="header-user">
      <Dropdown.Toggle 
        as="a" 
        className="nav-link icon user-avatar"
        id="user-dropdown"
      >
        <i className="fe fe-user header-icons"></i>
        {user && <span className="ms-2 d-none d-md-inline">{user.username}</span>}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end">
        {user && (
          <>
            <Dropdown.Header>
              <strong>{user.username}</strong>
              <br />
              <small className="text-muted">{user.email}</small>
            </Dropdown.Header>
            <Dropdown.Divider />
          </>
        )}
        
        <Dropdown.Item onClick={handleLogout}>
          <i className="fe fe-log-out me-2"></i>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
