import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Alert, Spinner, Badge } from "react-bootstrap";
import authService from '../../services/authService';

const SuperAdminUtility = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const token = authService.getToken();
      
      if (!token) {
        setMessage('No authentication token found. Please login first.');
        setMessageType('danger');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:5000/api/Auth/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUsers(userData);
        setMessage(`Successfully loaded ${userData.length} users`);
        setMessageType('success');
      } else if (response.status === 401) {
        setMessage('Unauthorized: Your token may have expired or you don\'t have superadmin privileges');
        setMessageType('danger');
      } else if (response.status === 403) {
        setMessage('Forbidden: You don\'t have permission to access user data');
        setMessageType('danger');
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        setMessage(`Error: ${errorData.message || 'Failed to fetch users'}`);
        setMessageType('danger');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setMessage(`Network error: ${error.message}. Make sure the backend server is running.`);
      setMessageType('danger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-fetch users when component mounts
    fetchUsers();
  }, []);

  const getRoleBadgeVariant = (role) => {
    switch (role.toLowerCase()) {
      case 'superadmin': return 'danger';
      case 'admin': return 'warning';
      case 'user': return 'primary';
      default: return 'secondary';
    }
  };

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">👥 User Management</h5>
        <Button 
          variant="primary" 
          onClick={fetchUsers}
          disabled={loading}
          size="sm"
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Loading...
            </>
          ) : (
            '🔄 Refresh Users'
          )}
        </Button>
      </Card.Header>
      <Card.Body>
        {message && (
          <Alert variant={messageType} onClose={() => setMessage('')} dismissible>
            {message}
          </Alert>
        )}
        
        {loading && !users.length ? (
          <div className="text-center py-4">
            <Spinner animation="border" />
            <p className="mt-2">Loading users...</p>
          </div>
        ) : users.length > 0 ? (
          <>
            <div className="mb-3">
              <small className="text-muted">
                <strong>API Endpoint:</strong> http://localhost:5000/api/Auth/users
              </small>
            </div>
            
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Created</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id || index}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{user.username}</strong>
                      {user.username === 'superadmin1' && (
                        <Badge bg="info" className="ms-2">Current User</Badge>
                      )}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      {user.roles && user.roles.length > 0 ? (
                        user.roles.map((role, roleIndex) => (
                          <Badge 
                            key={roleIndex}
                            bg={getRoleBadgeVariant(role)}
                            className="me-1"
                          >
                            {role}
                          </Badge>
                        ))
                      ) : (
                        <Badge bg="secondary">No roles</Badge>
                      )}
                    </td>
                    <td>
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td>
                      <Badge bg={user.isActive ? 'success' : 'secondary'}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            <div className="mt-3 p-3 bg-light rounded">
              <small className="text-muted">
                <strong>📊 Summary:</strong> {users.length} total users | 
                {users.filter(u => u.roles?.includes('superadmin')).length} superadmins | 
                {users.filter(u => u.roles?.includes('admin')).length} admins | 
                {users.filter(u => u.isActive).length} active users
              </small>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <p className="text-muted">No users found or failed to load users.</p>
            <Button variant="outline-primary" onClick={fetchUsers}>
              Try Again
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default SuperAdminUtility;
