import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import authService from '../../services/authService';

const HeadDropDown = ({ onOpenProfile, onOpen2FA }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    () => !!localStorage.getItem('Spruhadark')
  );

  useEffect(() => {
    setCurrentUser(authService.getUser());
  }, []);

  const toggleFullscreen = useCallback(() => {
    const doc = document;
    if (!doc.fullscreenElement) {
      doc.documentElement.requestFullscreen?.();
    } else {
      doc.exitFullscreen?.();
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    document.body.classList.toggle('dark-theme', newMode);
    if (newMode) {
      localStorage.setItem('Spruhadark', 'true');
    } else {
      localStorage.removeItem('Spruhadark');
    }
  }, [isDarkMode]);

  const MenuItem = ({ icon, label, ...props }) => (
    <Dropdown.Item className="d-flex align-items-center" {...props}>
      <i className={`${icon} me-2`} />
      {label}
    </Dropdown.Item>
  );

  return (
    <div className="d-flex order-lg-2 align-items-center ms-auto">

      {/* Dark Mode Toggle */}
      <Nav.Link className="nav-link icon layout-setting" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <i className="fe fe-sun header-icons" />
        ) : (
          <i className="fe fe-moon header-icons" />
        )}
      </Nav.Link>

      {/* Fullscreen Toggle */}
      <div className="nav-link icon full-screen-link" onClick={toggleFullscreen}>
        <i className="fe fe-maximize fullscreen-button header-icons" />
      </div>

      {/* User Profile Dropdown */}
      <Dropdown className="dropdown d-flex main-profile-menu">
        <Dropdown.Toggle as="a" className="nav-link icon border-0 bg-transparent cursor-pointer">
          <i className="fe fe-user"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end shadow">
          <div className="dropdown-header my-1">
            <h6 className="mb-0">{currentUser?.username || 'User'}</h6>
            <small className="text-muted">{currentUser?.email || 'user@example.com'}</small>
          </div>
          <Dropdown.Divider />
          <MenuItem icon="fe fe-user" label="Profile" href="/profile" />
          <MenuItem icon="fe fe-shield" label="Security & 2FA" onClick={onOpen2FA} />
          <Dropdown.Divider />
          <MenuItem
            icon="fe fe-log-out"
            label="Sign Out"
            as={Link}
            href="/components/authentication/signin"
            className="text-danger"
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeadDropDown;
