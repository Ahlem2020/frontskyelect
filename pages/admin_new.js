import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container, Table, Button, Badge, Alert, Nav } from "react-bootstrap";
import Link from "next/link";
import { withSuperAdminAuth } from '../shared/components/auth/withRoleAuth';
import Seo from '../shared/layout-components/seo/seo';
import authService from '../shared/services/authService';
import SuperAdminUtility from '../shared/components/admin/SuperAdminUtility';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    const user = authService.getUser();
    setCurrentUser(user);
    
    fetchUsers();
    fetchCandidates();
    fetchCountries();
  }, []);

  // API Functions
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/Auth/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Failed to fetch users: ${err.message}`);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCandidates = async () => {
    try {
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/candidates', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCandidates(data);
      } else {
        console.warn(`Failed to fetch candidates: HTTP ${response.status}`);
      }
    } catch (err) {
      console.warn('Error fetching candidates:', err);
    }
  };

  const fetchCountries = async () => {
    try {
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/countries', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCountries(data);
      } else {
        console.warn(`Failed to fetch countries: HTTP ${response.status}`);
      }
    } catch (err) {
      console.warn('Error fetching countries:', err);
    }
  };

  // Candidate CRUD
  const createCandidate = async (candidateData) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/candidates', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(candidateData),
      });

      if (response.ok) {
        const newCandidate = await response.json();
        setCandidates([...candidates, newCandidate]);
        return { success: true, data: newCandidate };
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (err) {
      setError(`Failed to create candidate: ${err.message}`);
      return { success: false, error: err.message };
    }
  };

  const deleteCandidate = async (id) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/candidates/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCandidates(candidates.filter(c => c.id !== id));
        return { success: true };
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (err) {
      setError(`Failed to delete candidate: ${err.message}`);
      return { success: false, error: err.message };
    }
  };

  // Country CRUD
  const createCountry = async (countryData) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/countries', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(countryData),
      });

      if (response.ok) {
        const newCountry = await response.json();
        setCountries([...countries, newCountry]);
        return { success: true, data: newCountry };
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (err) {
      setError(`Failed to create country: ${err.message}`);
      return { success: false, error: err.message };
    }
  };

  const deleteCountry = async (id) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/countries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCountries(countries.filter(c => c.id !== id));
        return { success: true };
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (err) {
      setError(`Failed to delete country: ${err.message}`);
      return { success: false, error: err.message };
    }
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/Auth/users/${userId}/toggle-status`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setUsers(users.map(user => 
          user.id === userId 
            ? { ...user, isActive: !currentStatus }
            : user
        ));
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Failed to update user status: ${err.message}`);
    }
  };

  return (
    <div>
      <Seo title="Admin Dashboard" />
      
      <div className="main-content app-content mt-0">
        <div className="side-app">
          <div className="main-container container-fluid">
            
            {/* Page Header */}
            <div className="page-header">
              <h1 className="page-title">Admin Dashboard</h1>
              <div>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Admin</li>
                </ol>
              </div>
            </div>

            {/* Welcome Section */}
            <Row>
              <Col xl={12}>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <span className="avatar avatar-lg bg-primary-transparent rounded-circle">
                          <i className="fe fe-shield"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-1">Welcome, {currentUser?.username}!</h4>
                        <p className="mb-0 text-muted">
                          You have superadmin privileges. Manage users, candidates, and countries here.
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Statistics Cards */}
            <Row>
              <Col xl={3} lg={6} md={6} sm={12}>
                <Card className="card-bg-primary overflow-hidden">
                  <Card.Body className="card-body pb-0">
                    <h6 className="mb-3 tx-12 text-white">Total Users</h6>
                    <div className="d-flex">
                      <div className="text-white">
                        <h2 className="mb-0 number-font">{users.length}</h2>
                        <p className="text-white mb-0 tx-12">Registered users</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12}>
                <Card className="card-bg-success overflow-hidden">
                  <Card.Body className="card-body pb-0">
                    <h6 className="mb-3 tx-12 text-white">Candidates</h6>
                    <div className="d-flex">
                      <div className="text-white">
                        <h2 className="mb-0 number-font">{candidates.length}</h2>
                        <p className="text-white mb-0 tx-12">Total candidates</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12}>
                <Card className="card-bg-warning overflow-hidden">
                  <Card.Body className="card-body pb-0">
                    <h6 className="mb-3 tx-12 text-white">Countries</h6>
                    <div className="d-flex">
                      <div className="text-white">
                        <h2 className="mb-0 number-font">{countries.length}</h2>
                        <p className="text-white mb-0 tx-12">Available countries</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12}>
                <Card className="card-bg-info overflow-hidden">
                  <Card.Body className="card-body pb-0">
                    <h6 className="mb-3 tx-12 text-white">Active Users</h6>
                    <div className="d-flex">
                      <div className="text-white">
                        <h2 className="mb-0 number-font">
                          {users.filter(user => user.isActive).length}
                        </h2>
                        <p className="text-white mb-0 tx-12">Currently active</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Tabbed Management Interface */}
            <Row>
              <Col xl={12}>
                <Card>
                  <Card.Header>
                    <Nav variant="tabs" className="nav-tabs-header">
                      <Nav.Item>
                        <Nav.Link 
                          active={activeTab === 'users'}
                          onClick={() => setActiveTab('users')}
                          style={{cursor: 'pointer'}}
                        >
                          👥 Users ({users.length})
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link 
                          active={activeTab === 'candidates'}
                          onClick={() => setActiveTab('candidates')}
                          style={{cursor: 'pointer'}}
                        >
                          🗳️ Candidates ({candidates.length})
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link 
                          active={activeTab === 'countries'}
                          onClick={() => setActiveTab('countries')}
                          style={{cursor: 'pointer'}}
                        >
                          🌍 Countries ({countries.length})
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    {error && (
                      <Alert variant="danger" onClose={() => setError('')} dismissible>
                        {error}
                      </Alert>
                    )}
                    
                    {/* Users Tab */}
                    {activeTab === 'users' && (
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4>User Management</h4>
                          <Button variant="primary" onClick={fetchUsers}>
                            🔄 Refresh Users
                          </Button>
                        </div>
                        
                        {loading ? (
                          <div className="text-center p-4">
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        ) : (
                          <div className="table-responsive">
                            <Table className="table text-nowrap text-md-nowrap">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Username</th>
                                  <th>Email</th>
                                  <th>Roles</th>
                                  <th>Created</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {users.map((user) => (
                                  <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                      {user.roles && user.roles.map((role, index) => (
                                        <Badge 
                                          key={index} 
                                          bg={role === 'superadmin' ? 'danger' : role === 'admin' ? 'warning' : 'secondary'}
                                          className="me-1"
                                        >
                                          {role}
                                        </Badge>
                                      ))}
                                    </td>
                                    <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</td>
                                    <td>
                                      <Badge bg={user.isActive ? 'success' : 'secondary'}>
                                        {user.isActive ? 'Active' : 'Inactive'}
                                      </Badge>
                                    </td>
                                    <td>
                                      <Button
                                        size="sm"
                                        variant={user.isActive ? 'warning' : 'success'}
                                        onClick={() => toggleUserStatus(user.id, user.isActive)}
                                      >
                                        {user.isActive ? 'Disable' : 'Enable'}
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Candidates Tab */}
                    {activeTab === 'candidates' && (
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4>Candidate Management</h4>
                          <div>
                            <Button variant="success" className="me-2">
                              ➕ Add Candidate
                            </Button>
                            <Button variant="primary" onClick={fetchCandidates}>
                              🔄 Refresh Candidates
                            </Button>
                          </div>
                        </div>
                        
                        <div className="table-responsive">
                          <Table className="table text-nowrap text-md-nowrap">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Original ID</th>
                                <th>Name</th>
                                <th>Party</th>
                                <th>Country</th>
                                <th>Image</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {candidates.map((candidate) => (
                                <tr key={candidate.id}>
                                  <td>{candidate.id}</td>
                                  <td>{candidate.originalId}</td>
                                  <td>{candidate.firstName} {candidate.lastName}</td>
                                  <td>{candidate.part || candidate.parti}</td>
                                  <td>{candidate.country}</td>
                                  <td>
                                    {candidate.image && (
                                      <img 
                                        src={candidate.image} 
                                        alt={`${candidate.firstName} ${candidate.lastName}`}
                                        style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}}
                                      />
                                    )}
                                  </td>
                                  <td>
                                    <Button size="sm" variant="info" className="me-1">
                                      ✏️ Edit
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      variant="danger"
                                      onClick={() => deleteCandidate(candidate.id)}
                                    >
                                      🗑️ Delete
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    )}

                    {/* Countries Tab */}
                    {activeTab === 'countries' && (
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4>Country Management</h4>
                          <div>
                            <Button variant="success" className="me-2">
                              ➕ Add Country
                            </Button>
                            <Button variant="primary" onClick={fetchCountries}>
                              🔄 Refresh Countries
                            </Button>
                          </div>
                        </div>
                        
                        <div className="table-responsive">
                          <Table className="table text-nowrap text-md-nowrap">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Flag</th>
                                <th>Offices</th>
                                <th>Candidates Count</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {countries.map((country) => (
                                <tr key={country.id}>
                                  <td>{country.id}</td>
                                  <td>{country.name}</td>
                                  <td>
                                    {country.flag && (
                                      <img 
                                        src={country.flag} 
                                        alt={`${country.name} flag`}
                                        style={{width: '30px', height: '20px', objectFit: 'cover'}}
                                      />
                                    )}
                                  </td>
                                  <td>{country.offices ? country.offices.length : 0}</td>
                                  <td>{country.candidates ? country.candidates.length : 0}</td>
                                  <td>
                                    <Button size="sm" variant="info" className="me-1">
                                      ✏️ Edit
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      variant="danger"
                                      onClick={() => deleteCountry(country.id)}
                                    >
                                      🗑️ Delete
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Backend Users List from SuperAdminUtility */}
            <Row>
              <Col xl={12}>
                <SuperAdminUtility />
              </Col>
            </Row>

          </div>
        </div>
      </div>
    </div>
  );
};

AdminDashboard.layout = "Contentlayout";

export default withSuperAdminAuth(AdminDashboard);
