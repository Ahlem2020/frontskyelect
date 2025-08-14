import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { withSuperAdminAuth } from '../shared/components/auth/withRoleAuth';
import Seo from '../shared/layout-components/seo/seo';
import authService from '../shared/services/authService';
import SuperAdminUtility from '../shared/components/admin/SuperAdminUtility';
import ProfileModal from '../shared/components/profile/ProfileModal';
import TwoFactorModal from '../shared/components/profile/TwoFactorModal';
import dynamic from 'next/dynamic';
import CountUp from 'react-countup';
// Dynamically import charts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dashboardStats, setDashboardStats] = useState({
    totalVotes: 0,
    todayVotes: 0,
    completionRate: 0,
    activePollingStations: 0
  });

  // Modal states for CRUD operations
  const [showUserModal, setShowUserModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalMode, setModalMode] = useState('add'); // 'view', 'edit'
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
    roles: [],
    isActive: true,
    notes: ''
  });

  // Candidate Modal states for CRUD operations
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [showCandidateDeleteModal, setShowCandidateDeleteModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidateModalMode, setCandidateModalMode] = useState('add'); // 'view', 'edit'
  const [candidateForm, setCandidateForm] = useState({
    firstName: '',
    lastName: '',
    part: '',
    parti: '',
    country: '',
    image: '',
    bio: ''
  });

  // Country Modal states for CRUD operations
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showCountryDeleteModal, setShowCountryDeleteModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryModalMode, setCountryModalMode] = useState('add'); // 'view', 'edit'
  const [countryForm, setCountryForm] = useState({
    name: '',
    flag: '',
    offices: [],
    candidates: []
  });

  // Office Modal states for CRUD operations
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [showOfficeDeleteModal, setShowOfficeDeleteModal] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [officeModalMode, setOfficeModalMode] = useState('add'); // 'view', 'edit', 'bulk'
  const [officeForm, setOfficeForm] = useState({
    originalId: '',
    registered: 0,
    province: '',
    countries: []
  });
  const [offices, setOffices] = useState([]);
  
  // Profile and 2FA states
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  
  // Office pagination and selection states
  const [selectedOffices, setSelectedOffices] = useState([]);
  const [currentOfficePage, setCurrentOfficePage] = useState(1);
  const [officeItemsPerPage, setOfficeItemsPerPage] = useState(50);
  const [officeSearchTerm, setOfficeSearchTerm] = useState('');
  const [jumpToPage, setJumpToPage] = useState('');
  
  const [jsonFile, setJsonFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [jsonPreview, setJsonPreview] = useState(null);
  const [showJsonPreview, setShowJsonPreview] = useState(false);
  
  // Refs
  const fileInputRef = useRef(null);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchFilters, setSearchFilters] = useState({
    role: '',
    status: '',
    sortBy: 'username',
    sortOrder: 'asc'
  });
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const user = authService.getUser();
    setCurrentUser(user);
    
    fetchUsers();
    fetchCandidates();
    fetchCountries();
    fetchOffices();
    fetchDashboardStats();
  }, []);

  // Enhanced dashboard statistics
  const fetchDashboardStats = async () => {
    try {
      const token = authService.getToken();
      
      // Mock data - replace with actual API calls
      setDashboardStats({
        totalVotes: Math.floor(Math.random() * 10000) + 5000,
        todayVotes: Math.floor(Math.random() * 500) + 100,
        completionRate: Math.floor(Math.random() * 40) + 60,
        activePollingStations: Math.floor(Math.random() * 50) + 25
      });
    } catch (err) {
      console.warn('Error fetching dashboard stats:', err);
    }
  };

  // API Functions
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/superadmin/users', {
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
      
      const response = await fetch('http://localhost:5000/api/SuperAdmin/candidates', {
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
      
      const response = await fetch('http://localhost:5000/api/SuperAdmin/countries', {
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

  const fetchOffices = async () => {
    try {
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/superadmin/offices', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOffices(data);
      } else {
        console.warn(`Failed to fetch offices: HTTP ${response.status}`);
      }
    } catch (err) {
      console.warn('Error fetching offices:', err);
    }
  };

  // Office pagination and selection functions
  const handleSelectAllOffices = (checked) => {
    if (checked) {
      const currentPageOfficeIds = getPaginatedOffices().map(office => office.id);
      setSelectedOffices([...new Set([...selectedOffices, ...currentPageOfficeIds])]);
    } else {
      const currentPageOfficeIds = getPaginatedOffices().map(office => office.id);
      setSelectedOffices(selectedOffices.filter(id => !currentPageOfficeIds.includes(id)));
    }
  };

  const handleSelectOffice = (officeId, checked) => {
    if (checked) {
      setSelectedOffices([...selectedOffices, officeId]);
    } else {
      setSelectedOffices(selectedOffices.filter(id => id !== officeId));
    }
  };

  const getPaginatedOffices = () => {
    let filteredOffices = offices;
    
    // Apply search filter if search term exists
    if (officeSearchTerm.trim()) {
      filteredOffices = offices.filter(office => 
        office.province?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.originalId?.toString().toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.id?.toString().toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.code?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.countryName?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.countries?.some(country => country.toLowerCase().includes(officeSearchTerm.toLowerCase()))
      );
    }
    
    const startIndex = (currentOfficePage - 1) * officeItemsPerPage;
    const endIndex = startIndex + officeItemsPerPage;
    return filteredOffices.slice(startIndex, endIndex);
  };

  const getFilteredOffices = () => {
    if (officeSearchTerm.trim()) {
      return offices.filter(office => 
        office.province?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.originalId?.toString().toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.id?.toString().toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.code?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.countryName?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
        office.countries?.some(country => country.toLowerCase().includes(officeSearchTerm.toLowerCase()))
      );
    }
    return offices;
  };

  const getTotalOfficePages = () => {
    const filteredOffices = getFilteredOffices();
    return Math.ceil(filteredOffices.length / officeItemsPerPage);
  };

  const getPageNumbers = () => {
    const totalPages = getTotalOfficePages();
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentOfficePage - delta); 
         i <= Math.min(totalPages - 1, currentOfficePage + delta); 
         i++) {
      range.push(i);
    }

    if (currentOfficePage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentOfficePage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      if (totalPages > 1) rangeWithDots.push(totalPages);
    }

    return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index);
  };

  const isAllCurrentPageOfficesSelected = () => {
    const currentPageOfficeIds = getPaginatedOffices().map(office => office.id);
    return currentPageOfficeIds.length > 0 && currentPageOfficeIds.every(id => selectedOffices.includes(id));
  };

  const isSomeCurrentPageOfficesSelected = () => {
    const currentPageOfficeIds = getPaginatedOffices().map(office => office.id);
    return currentPageOfficeIds.some(id => selectedOffices.includes(id));
  };

  // Handle search functionality
  const handleOfficeSearch = (searchTerm) => {
    setOfficeSearchTerm(searchTerm);
    setCurrentOfficePage(1); // Reset to first page when searching
  };

  // Handle jump to page
  const handleJumpToPage = (pageNumber) => {
    const totalPages = getTotalOfficePages();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentOfficePage(pageNumber);
      setJumpToPage('');
    }
  };

  // Candidate CRUD
  const createCandidate = async (candidateData) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch('http://localhost:5000/api/SuperAdmin/candidates', {
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

  // Chart configurations
  const getUserRoleChartOptions = () => {
    const roleData = users.reduce((acc, user) => {
      user.roles?.forEach(role => {
        acc[role] = (acc[role] || 0) + 1;
      });
      return acc;
    }, {});

    return {
      series: Object.values(roleData),
      options: {
        chart: {
          type: 'donut',
          height: 300
        },
        labels: Object.keys(roleData),
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
        legend: {
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  };

  const getCandidatesByCountryChart = () => {
    const countryData = candidates.reduce((acc, candidate) => {
      const country = candidate.country || 'Unknown';
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {});

    return {
      series: [{
        data: Object.values(countryData)
      }],
      options: {
        chart: {
          type: 'bar',
          height: 300
        },
        xaxis: {
          categories: Object.keys(countryData)
        },
        colors: ['#4ecdc4'],
        title: {
          text: 'Candidates by Country'
        }
      }
    };
  };

  const getUserActivityChart = () => {
    const activeUsers = users.filter(u => u.isActive).length;
    const inactiveUsers = users.length - activeUsers;

    return {
      series: [activeUsers, inactiveUsers],
      options: {
        chart: {
          type: 'pie',
          height: 300
        },
        labels: ['Active Users', 'Inactive Users'],
        colors: ['#28a745', '#dc3545'],
        legend: {
          position: 'bottom'
        }
      }
    };
  };

  const getVotingTrendChart = () => {
    // Mock voting trend data - replace with actual data
    const trendData = [
      { month: 'Jan', votes: 1200 },
      { month: 'Feb', votes: 1900 },
      { month: 'Mar', votes: 3000 },
      { month: 'Apr', votes: 5000 },
      { month: 'May', votes: 4200 },
      { month: 'Jun', votes: 6800 }
    ];

    return {
      series: [{
        name: 'Votes',
        data: trendData.map(d => d.votes)
      }],
      options: {
        chart: {
          type: 'area',
          height: 300,
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          categories: trendData.map(d => d.month)
        },
        colors: ['#45b7d1'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
          }
        },
        title: {
          text: 'Voting Trend (Last 6 Months)'
        }
      }
    };
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    if (currentStatus) {
      await deactivateUser(userId);
    } else {
      await activateUser(userId);
    }
  };

  // User Profile and Management Operations
  const viewUserProfile = async (userId) => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/users/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        
        setSelectedUser(userData);
        setModalMode('view');
        setShowUserModal(true);
        setError(''); // Clear any previous errors
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Failed to fetch user profile: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const openEditUserModal = async (userId) => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/users/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        
        setSelectedUser(userData);
        setUserForm({
          username: userData.username || '',
          email: userData.email || '',
          password: '',
          roles: userData.roles || [],
          isActive: userData.isActive !== undefined ? userData.isActive : true,
          notes: userData.notes || ''
        });
        setModalMode('edit');
        setShowUserModal(true);
        setError(''); // Clear any previous errors
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Failed to fetch user data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const closeUserModal = () => {
    setShowUserModal(false);
    setSelectedUser(null);
    setModalMode('add');
    setUserForm({
      username: '',
      email: '',
      password: '',
      roles: [],
      isActive: true,
      notes: ''
    });
    setError(''); // Clear any modal-specific errors
  };

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = authService.getToken();
      
      // Prepare the update data, excluding password if it's empty
      const updateData = {
        username: userForm.username,
        email: userForm.email,
        roles: userForm.roles,
        isActive: userForm.isActive,
        notes: userForm.notes
      };
      
      // Only include password if it's provided
      if (userForm.password && userForm.password.trim() !== '') {
        updateData.password = userForm.password;
      }
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        // Handle NoContent response (HTTP 204) from backend
        let userData = null;
        
        // Check if response has content before trying to parse JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          userData = await response.json();
        } else {
          // If no JSON response, create updated user object manually
          userData = {
            ...selectedUser,
            ...updateData,
            id: selectedUser.id
          };
        }
        
        // Update the user in the local state
        setUsers(users.map(user => 
          user.id === selectedUser.id ? userData : user
        ));
        
        // Close the modal
        closeUserModal();
        setError('');
        
        // Refresh the users list to ensure data consistency
        await fetchUsers();
        
      } else {
        // Handle error responses
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData || errorMessage;
          } else {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          }
        } catch (parseError) {
          // If we can't parse the error response, use the default message
        }
        
        throw new Error(errorMessage);
      }
    } catch (err) {
      setError(`Failed to update user: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const activateUser = async (userId) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/users/${userId}/activate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update user status regardless of response content
        setUsers(users.map(user => 
          user.id === userId ? { ...user, isActive: true } : user
        ));
        setError('');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Failed to activate user: ${err.message}`);
    }
  };

  const deactivateUser = async (userId) => {
    try {
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/users/${userId}/deactivate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update user status regardless of response content
        setUsers(users.map(user => 
          user.id === userId ? { ...user, isActive: false } : user
        ));
        setError('');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Failed to deactivate user: ${err.message}`);
    }
  };

  const handleRoleToggle = (role) => {
    const currentRoles = userForm.roles || [];
    const updatedRoles = currentRoles.includes(role)
      ? currentRoles.filter(r => r !== role)
      : [...currentRoles, role];
    
    setUserForm({ ...userForm, roles: updatedRoles });
  };

  // Search and filter functions
  const filterAndSearchUsers = React.useCallback(() => {
    let filtered = [...users];

    // Apply search term filter
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(user => 
        user.username?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower) ||
        user.roles?.some(role => role.toLowerCase().includes(searchLower))
      );
    }

    // Apply role filter
    if (searchFilters.role) {
      filtered = filtered.filter(user => 
        user.roles?.includes(searchFilters.role)
      );
    }

    // Apply status filter
    if (searchFilters.status) {
      const isActive = searchFilters.status === 'active';
      filtered = filtered.filter(user => user.isActive === isActive);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[searchFilters.sortBy] || '';
      let bValue = b[searchFilters.sortBy] || '';

      // Handle special cases
      if (searchFilters.sortBy === 'roles') {
        aValue = a.roles?.join(',') || '';
        bValue = b.roles?.join(',') || '';
      } else if (searchFilters.sortBy === 'createdAt') {
        aValue = new Date(a.createdAt || 0);
        bValue = new Date(b.createdAt || 0);
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (searchFilters.sortOrder === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });

    setFilteredUsers(filtered);
  }, [users, debouncedSearchTerm, searchFilters]);

  const clearFilters = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSearchFilters({
      role: '',
      status: '',
      sortBy: 'username',
      sortOrder: 'asc'
    });
  };

  // Candidate CRUD Functions
  const openCandidateModal = (mode = 'add', candidate = null) => {
    setCandidateModalMode(mode);
    setSelectedCandidate(candidate);
    
    if (mode === 'add') {
      setCandidateForm({
        firstName: '',
        lastName: '',
        part: '',
        parti: '',
        country: '',
        image: '',
        bio: ''
      });
    } else if (candidate) {
      setCandidateForm({
        firstName: candidate.firstName || '',
        lastName: candidate.lastName || '',
        part: candidate.part || candidate.parti || '',
        parti: candidate.parti || candidate.part || '',
        country: candidate.country || '',
        image: candidate.image || '',
        bio: candidate.bio || ''
      });
    }
    
    setShowCandidateModal(true);
    setError(''); // Clear any modal-specific errors
  };

  const closeCandidateModal = () => {
    setShowCandidateModal(false);
    setSelectedCandidate(null);
    setCandidateForm({
      firstName: '',
      lastName: '',
      part: '',
      parti: '',
      country: '',
      image: '',
      bio: ''
    });
    setError(''); // Clear any modal-specific errors
  };

  const handleCandidateUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = authService.getToken();
      
      // Prepare the update data
      const updateData = {
        firstName: candidateForm.firstName,
        lastName: candidateForm.lastName,
        part: candidateForm.part,
        parti: candidateForm.parti,
        country: candidateForm.country,
        image: candidateForm.image,
        bio: candidateForm.bio
      };
      
      let response;
      
      if (candidateModalMode === 'add') {
        // Create new candidate
        response = await fetch('http://localhost:5000/api/SuperAdmin/candidates', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        });
      } else {
        // Update existing candidate
        response = await fetch(`http://localhost:5000/api/SuperAdmin/candidates/${selectedCandidate.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        });
      }

      if (response.ok) {
        // Handle NoContent response (HTTP 204) from backend
        let candidateData = null;
        
        // Check if response has content before trying to parse JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          candidateData = await response.json();
        } else {
          // If no JSON response, create updated candidate object manually
          if (candidateModalMode === 'add') {
            candidateData = {
              ...updateData,
              id: Date.now() // Temporary ID until refresh
            };
          } else {
            candidateData = {
              ...selectedCandidate,
              ...updateData,
              id: selectedCandidate.id
            };
          }
        }
        
        // Update the candidates in the local state
        if (candidateModalMode === 'add') {
          setCandidates([...candidates, candidateData]);
        } else {
          setCandidates(candidates.map(candidate => 
            candidate.id === selectedCandidate.id ? candidateData : candidate
          ));
        }
        
        // Close the modal
        closeCandidateModal();
        setError('');
        
        // Refresh the candidates list to ensure data consistency
        await fetchCandidates();
        
      } else {
        // Handle error responses
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData || errorMessage;
          }
        } catch (parseError) {
          console.warn('Could not parse error response as JSON:', parseError);
        }
        
        setError(`Failed to ${candidateModalMode === 'add' ? 'create' : 'update'} candidate: ${errorMessage}`);
      }
    } catch (err) {
      setError(`Failed to ${candidateModalMode === 'add' ? 'create' : 'update'} candidate: ${err.message}`);
      console.error(`Error ${candidateModalMode === 'add' ? 'creating' : 'updating'} candidate:`, err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCandidateConfirm = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/candidates/${selectedCandidate.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCandidates(candidates.filter(c => c.id !== selectedCandidate.id));
        setShowCandidateDeleteModal(false);
        setSelectedCandidate(null);
        setError('');
      } else {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData || errorMessage;
          }
        } catch (parseError) {
          console.warn('Could not parse error response as JSON:', parseError);
        }
        
        setError(`Failed to delete candidate: ${errorMessage}`);
      }
    } catch (err) {
      setError(`Failed to delete candidate: ${err.message}`);
      console.error('Error deleting candidate:', err);
    } finally {
      setLoading(false);
    }
  };

  // Country CRUD Functions
  const openCountryModal = (mode = 'add', country = null) => {
    setCountryModalMode(mode);
    setSelectedCountry(country);
    
    if (mode === 'add') {
      setCountryForm({
        name: '',
        flag: '',
        offices: [],
        candidates: []
      });
    } else if (country) {
      setCountryForm({
        name: country.name || '',
        flag: country.flag || '',
        offices: country.offices || [],
        candidates: country.candidates || []
      });
    }
    
    setShowCountryModal(true);
    setError(''); // Clear any modal-specific errors
  };

  const closeCountryModal = () => {
    setShowCountryModal(false);
    setSelectedCountry(null);
    setCountryForm({
      name: '',
      flag: '',
      offices: [],
      candidates: []
    });
    setOfficeSearchTerm(''); // Clear office search term
    setError(''); // Clear any modal-specific errors
  };

  const handleCountryUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = authService.getToken();
      
      // Prepare the update data to match backend API structure
      const updateData = {
        name: countryForm.name,
        flag: countryForm.flag,
        candidates: countryForm.candidates
        // Note: Offices are now handled separately via linking API
      };
      
      let response;
      let createdCountryId;
      
      if (countryModalMode === 'add') {
        // Create new country first
        response = await fetch('http://localhost:5000/api/SuperAdmin/countries', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        });
        
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const createdCountry = await response.json();
            createdCountryId = createdCountry.id;
          } else {
            // If no JSON response, we'll need to refresh to get the ID
            await fetchCountries();
            const newCountry = countries.find(c => c.name === countryForm.name);
            createdCountryId = newCountry?.id;
          }
          
          // Link offices to the newly created country (convert office names/objects to IDs)
          if (countryForm.offices && countryForm.offices.length > 0 && createdCountryId) {
            const officeIdsToLink = countryForm.offices
              .map(officeName => {
                // If it's already an ID (string/number), use it
                if (typeof officeName === 'string' || typeof officeName === 'number') {
                  // Try to find the office by name first, then by ID
                  const office = offices.find(o => o.name === officeName || o.id === officeName || o.originalId === officeName);
                  return office?.id || office?.originalId;
                }
                // If it's an object, extract the ID
                return officeName?.id || officeName?.originalId;
              })
              .filter(id => id !== undefined);
              
            if (officeIdsToLink.length > 0) {
              await linkCountryWithOffices(createdCountryId, officeIdsToLink);
            }
          }
        }
      } else {
        // Update existing country
        response = await fetch(`http://localhost:5000/api/SuperAdmin/countries/${selectedCountry.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        });
        
        if (response.ok) {
          // For updates, we need to handle office linking separately
          const currentOffices = selectedCountry?.offices || [];
          const newOffices = countryForm.offices || [];
          
          // Find offices to unlink (in current but not in new)
          const officesToUnlink = currentOffices.filter(office => {
            return !newOffices.some(newOffice => {
              // Compare by ID, originalId, or name
              const currentId = office?.id || office?.originalId || office;
              const newId = newOffice?.id || newOffice?.originalId || newOffice;
              return currentId === newId || office === newOffice;
            });
          });
          
          // Find offices to link (in new but not in current)
          const officesToLink = newOffices.filter(newOffice => {
            return !currentOffices.some(currentOffice => {
              // Compare by ID, originalId, or name
              const currentId = currentOffice?.id || currentOffice?.originalId || currentOffice;
              const newId = newOffice?.id || newOffice?.originalId || newOffice;
              return currentId === newId || currentOffice === newOffice;
            });
          });
          
          // Convert office names/objects to IDs for unlinking
          if (officesToUnlink.length > 0) {
            const officeIdsToUnlink = officesToUnlink
              .map(office => {
                // If it's already an ID (string/number), use it
                if (typeof office === 'string' || typeof office === 'number') {
                  // Try to find the office by name first, then by ID
                  const foundOffice = offices.find(o => o.name === office || o.id === office || o.originalId === office);
                  return foundOffice?.id || foundOffice?.originalId;
                }
                // If it's an object, extract the ID
                return office?.id || office?.originalId;
              })
              .filter(id => id !== undefined);
              
            if (officeIdsToUnlink.length > 0) {
              await unlinkAllOfficesFromCountry(selectedCountry.id, officeIdsToUnlink);
            }
          }
          
          // Convert office names/objects to IDs for linking
          if (officesToLink.length > 0) {
            const officeIdsToLink = officesToLink
              .map(office => {
                // If it's already an ID (string/number), use it
                if (typeof office === 'string' || typeof office === 'number') {
                  // Try to find the office by name first, then by ID
                  const foundOffice = offices.find(o => o.name === office || o.id === office || o.originalId === office);
                  return foundOffice?.id || foundOffice?.originalId;
                }
                // If it's an object, extract the ID
                return office?.id || office?.originalId;
              })
              .filter(id => id !== undefined);
              
            if (officeIdsToLink.length > 0) {
              await linkCountryWithOffices(selectedCountry.id, officeIdsToLink);
            }
          }
        }
      }

      if (response.ok) {
        // Handle NoContent response (HTTP 204) from backend
        let countryData = null;
        
        // Check if response has content before trying to parse JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          countryData = await response.json();
        } else {
          // If no JSON response, create updated country object manually
          if (countryModalMode === 'add') {
            countryData = {
              ...updateData,
              id: Date.now() // Temporary ID until refresh
            };
          } else {
            countryData = {
              ...selectedCountry,
              ...updateData,
              id: selectedCountry.id
            };
          }
        }
        
        // Update the countries in the local state
        if (countryModalMode === 'add') {
          setCountries([...countries, countryData]);
        } else {
          setCountries(countries.map(country => 
            country.id === selectedCountry.id ? countryData : country
          ));
        }
        
        // Close the modal
        closeCountryModal();
        setError('');
        
        // Refresh the countries list to ensure data consistency
        await fetchCountries();
        
      } else {
        // Handle error responses
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData || errorMessage;
          }
        } catch (parseError) {
          console.warn('Could not parse error response as JSON:', parseError);
        }
        
        setError(`Failed to ${countryModalMode === 'add' ? 'create' : 'update'} country: ${errorMessage}`);
      }
    } catch (err) {
      setError(`Failed to ${countryModalMode === 'add' ? 'create' : 'update'} country: ${err.message}`);
      console.error(`Error ${countryModalMode === 'add' ? 'creating' : 'updating'} country:`, err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCountryConfirm = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/SuperAdmin/countries/${selectedCountry.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCountries(countries.filter(c => c.id !== selectedCountry.id));
        setShowCountryDeleteModal(false);
        setSelectedCountry(null);
        setError('');
      } else {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData || errorMessage;
          }
        } catch (parseError) {
          console.warn('Could not parse error response as JSON:', parseError);
        }
        
        setError(`Failed to delete country: ${errorMessage}`);
      }
    } catch (err) {
      setError(`Failed to delete country: ${err.message}`);
      console.error('Error deleting country:', err);
    } finally {
      setLoading(false);
    }
  };

  // Office CRUD Functions
  const openOfficeModal = (mode = 'add', office = null) => {
    setOfficeModalMode(mode);
    setSelectedOffice(office);
    
    if (mode === 'add') {
      setOfficeForm({
        originalId: '',
        registered: 0,
        province: '',
        countries: []
      });
    } else if (mode === 'bulk') {
      setOfficeForm({
        originalId: '',
        registered: 0,
        province: '',
        countries: []
      });
      setJsonFile(null);
      setJsonData([]);
      setShowJsonPreview(false);
    } else if (office) {
      setOfficeForm({
        originalId: office.originalId || '',
        registered: office.registered || 0,
        province: office.province || '',
        countries: office.countries || []
      });
    }
    
    setShowOfficeModal(true);
    setError(''); // Clear any modal-specific errors
  };

  const closeOfficeModal = () => {
    setShowOfficeModal(false);
    setSelectedOffice(null);
    setOfficeForm({
      originalId: '',
      registered: 0,
      province: '',
      countries: []
    });
    setJsonFile(null);
    setJsonData([]);
    setShowJsonPreview(false);
    setCountrySearchTerm(''); // Clear country search term
    setError(''); // Clear any modal-specific errors
  };

  const handleJsonFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      setJsonFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (Array.isArray(data)) {
            setJsonData(data);
            setShowJsonPreview(true);
          } else {
            setError('JSON file must contain an array of office objects');
          }
        } catch (error) {
          setError('Invalid JSON file format');
        }
      };
      reader.readAsText(file);
    } else {
      setError('Please select a valid JSON file');
    }
  };

  // Function to link country with offices using office IDs
  const linkCountryWithOffices = async (countryId, officeIds) => {
    const token = authService.getToken();
    let successCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log('Linking country', countryId, 'with offices:', officeIds);

    // Loop through each office ID and link individually
    for (const officeId of officeIds) {
      try {
        console.log(`Linking country ${countryId} with office ${officeId}`);
        
        // Use the correct endpoint format
        const response = await fetch(`http://localhost:5000/api/superadmin/offices/${officeId}/link-country/${countryId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log(`Successfully linked country ${countryId} with office ${officeId}`);
          successCount++;
        } else {
          const errorText = await response.text();
          const errorMsg = `Failed to link office ${officeId}: HTTP ${response.status} - ${errorText}`;
          console.error(errorMsg);
          errors.push(errorMsg);
          errorCount++;
        }
      } catch (error) {
        const errorMsg = `Error linking office ${officeId}: ${error.message}`;
        console.error(errorMsg);
        errors.push(errorMsg);
        errorCount++;
      }
    }

    if (errors.length > 0) {
      console.warn(`Linking completed with ${successCount} successes and ${errorCount} errors:`, errors);
    }

    return { successCount, errorCount, errors };
  };

  // Function to unlink all offices from a country using office IDs
  const unlinkAllOfficesFromCountry = async (countryId, currentOfficeIds) => {
    const token = authService.getToken();
    let successCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log('Unlinking offices from country', countryId, ':', currentOfficeIds);

    // Loop through each office ID and unlink individually
    for (const officeId of currentOfficeIds) {
      try {
        console.log(`Unlinking office ${officeId} from country ${countryId}`);
        
        // Use the correct endpoint format
        const response = await fetch(`http://localhost:5000/api/superadmin/offices/${officeId}/unlink-country/${countryId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log(`Successfully unlinked office ${officeId} from country ${countryId}`);
          successCount++;
        } else {
          const errorText = await response.text();
          const errorMsg = `Failed to unlink office ${officeId}: HTTP ${response.status} - ${errorText}`;
          console.error(errorMsg);
          errors.push(errorMsg);
          errorCount++;
        }
      } catch (error) {
        const errorMsg = `Error unlinking office ${officeId}: ${error.message}`;
        console.error(errorMsg);
        errors.push(errorMsg);
        errorCount++;
      }
    }

    if (errors.length > 0) {
      console.warn(`Unlinking completed with ${successCount} successes and ${errorCount} errors:`, errors);
    }

    return { successCount, errorCount, errors };
  };

  const handleOfficeUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = authService.getToken();
      
      if (officeModalMode === 'bulk' && jsonData.length > 0) {
        // Handle bulk upload
        const response = await fetch('http://localhost:5000/api/superadmin/offices/bulk', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        });

        if (response.ok) {
          await fetchOffices(); // Refresh the list
          closeOfficeModal();
          setError('');
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } else {
        // Handle single office add/edit
        const updateData = {
          id: officeForm.originalId,
          registered: parseInt(officeForm.registered) || 0,
          province: officeForm.province
          // Note: Countries are now handled separately via linking API
        };
        
        let response;
        let createdOfficeId;
        
        if (officeModalMode === 'add') {
          // Create new office first
          response = await fetch('http://localhost:5000/api/superadmin/offices', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
          });
          
          if (response.ok) {
            const createdOffice = await response.json();
            createdOfficeId = createdOffice.id;
            
            // Link countries to the newly created office
            if (officeForm.countries && officeForm.countries.length > 0) {
              // Convert country names/objects to IDs
              const countryIds = officeForm.countries
                .map(country => {
                  // If it's already an ID (string/number), use it
                  if (typeof country === 'string' || typeof country === 'number') {
                    // Try to find the country by name first, then by ID
                    const foundCountry = countries.find(c => c.name === country || c.id === country);
                    return foundCountry?.id;
                  }
                  // If it's an object, extract the ID
                  return country?.id;
                })
                .filter(id => id !== undefined);
              
              if (countryIds.length > 0) {
                await linkOfficeWithCountries(createdOfficeId, countryIds);
              }
            }
          }
        } else {
          // Update existing office
          response = await fetch(`http://localhost:5000/api/superadmin/offices/${selectedOffice.id}`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),

          });
          console.log('Update response:', response);
          if (response.ok) {
            // For updates, we need to handle country linking separately
            const currentCountries = selectedOffice?.countries || [];
            const newCountries = officeForm.countries || [];
            
            // Find countries to unlink (in current but not in new)
            const countriesToUnlink = currentCountries.filter(country => {
              return !newCountries.some(newCountry => {
                // Compare by ID or name
                const currentId = country?.id || country;
                const newId = newCountry?.id || newCountry;
                return currentId === newId || country === newCountry;
              });
            });
            
            // Find countries to link (in new but not in current)
            const countriesToLink = newCountries.filter(newCountry => {
              return !currentCountries.some(currentCountry => {
                // Compare by ID or name
                const currentId = currentCountry?.id || currentCountry;
                const newId = newCountry?.id || newCountry;
                return currentId === newId || currentCountry === newCountry;
              });
            });
            
            // Convert country names/objects to IDs for unlinking
            if (countriesToUnlink.length > 0) {
              const countryIdsToUnlink = countriesToUnlink
                .map(country => {
                  // If it's already an ID (string/number), use it
                  if (typeof country === 'string' || typeof country === 'number') {
                    // Try to find the country by name first, then by ID
                    const foundCountry = countries.find(c => c.name === country || c.id === country);
                    return foundCountry?.id;
                  }
                  // If it's an object, extract the ID
                  return country?.id;
                })
                .filter(id => id !== undefined);
              
              if (countryIdsToUnlink.length > 0) {
                await unlinkAllCountriesFromOffice(selectedOffice.id, countryIdsToUnlink);
              }
            }
            
            // Convert country names/objects to IDs for linking
            if (countriesToLink.length > 0) {
              const countryIdsToLink = countriesToLink
                .map(country => {
                  // If it's already an ID (string/number), use it
                  if (typeof country === 'string' || typeof country === 'number') {
                    // Try to find the country by name first, then by ID
                    const foundCountry = countries.find(c => c.name === country || c.id === country);
                    return foundCountry?.id;
                  }
                  // If it's an object, extract the ID
                  return country?.id;
                })
                .filter(id => id !== undefined);
              
              if (countryIdsToLink.length > 0) {
                await linkOfficeWithCountries(selectedOffice.id, countryIdsToLink);
              }
            }
          }
        }

        if (response.ok) {
          await fetchOffices(); // Refresh the list
          closeOfficeModal();
          setError('');
        } else {
          let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
          
          try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              const errorData = await response.json();
              errorMessage = errorData.message || errorData || errorMessage;
            }
          } catch (parseError) {
            console.warn('Could not parse error response as JSON:', parseError);
          }
          
          setError(`Failed to ${officeModalMode === 'add' ? 'create' : 'update'} office: ${errorMessage}`);
        }
      }
    } catch (err) {
      setError(`Failed to ${officeModalMode === 'bulk' ? 'upload' : officeModalMode === 'add' ? 'create' : 'update'} office: ${err.message}`);
      console.error(`Error ${officeModalMode} office:`, err);
    } finally {
      setLoading(false);
    }
  };

  // Function to link office with countries using country IDs
  const linkOfficeWithCountries = async (officeId, countryIds) => {
    const token = authService.getToken();
    let successCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log('Linking office', officeId, 'with countries:', countryIds);

    // Loop through each country ID and link individually
    for (const countryId of countryIds) {
      try {
        console.log(`Linking office ${officeId} with country ${countryId}`);
        
        // Use the correct endpoint format
        const response = await fetch(`http://localhost:5000/api/superadmin/offices/${officeId}/link-country/${countryId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log(`Successfully linked office ${officeId} with country ${countryId}`);
          successCount++;
        } else {
          const errorText = await response.text();
          const errorMsg = `Failed to link country ${countryId}: HTTP ${response.status} - ${errorText}`;
          console.error(errorMsg);
          errors.push(errorMsg);
          errorCount++;
        }
      } catch (error) {
        const errorMsg = `Error linking country ${countryId}: ${error.message}`;
        console.error(errorMsg);
        errors.push(errorMsg);
        errorCount++;
      }
    }

    if (errors.length > 0) {
      console.warn(`Linking completed with ${successCount} successes and ${errorCount} errors:`, errors);
    }

    return { successCount, errorCount, errors };
  };

  // Function to unlink all countries from an office using country IDs
  const unlinkAllCountriesFromOffice = async (officeId, currentCountryIds) => {
    const token = authService.getToken();
    let successCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log('Unlinking countries from office', officeId, ':', currentCountryIds);

    // Loop through each country ID and unlink individually
    for (const countryId of currentCountryIds) {
      try {
        console.log(`Unlinking country ${countryId} from office ${officeId}`);
        
        // Use the correct endpoint format
        const response = await fetch(`http://localhost:5000/api/superadmin/offices/${officeId}/unlink-country/${countryId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log(`Successfully unlinked country ${countryId} from office ${officeId}`);
          successCount++;
        } else {
          const errorText = await response.text();
          const errorMsg = `Failed to unlink country ${countryId}: HTTP ${response.status} - ${errorText}`;
          console.error(errorMsg);
          errors.push(errorMsg);
          errorCount++;
        }
      } catch (error) {
        const errorMsg = `Error unlinking country ${countryId}: ${error.message}`;
        console.error(errorMsg);
        errors.push(errorMsg);
        errorCount++;
      }
    }

    if (errors.length > 0) {
      console.warn(`Unlinking completed with ${successCount} successes and ${errorCount} errors:`, errors);
    }

    return { successCount, errorCount, errors };
  };

  const deleteOfficeConfirm = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      
      const response = await fetch(`http://localhost:5000/api/superadmin/offices/${selectedOffice.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setOffices(offices.filter(o => o.id !== selectedOffice.id));
        setShowOfficeDeleteModal(false);
        setSelectedOffice(null);
        setError('');
      } else {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData || errorMessage;
          }
        } catch (parseError) {
          console.warn('Could not parse error response as JSON:', parseError);
        }
        
        setError(`Failed to delete office: ${errorMessage}`);
      }
    } catch (err) {
      setError(`Failed to delete office: ${err.message}`);
      console.error('Error deleting office:', err);
    } finally {
      setLoading(false);
    }
  };

  // Profile and 2FA Functions
  const openProfileModal = () => {
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  const handleProfileUpdate = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  const open2FAModal = () => {
    setShow2FAModal(true);
  };

  const close2FAModal = () => {
    setShow2FAModal(false);
  };

  // Effect to update filtered users when users or filters change
  React.useEffect(() => {
    filterAndSearchUsers();
  }, [users, debouncedSearchTerm, searchFilters, filterAndSearchUsers]);

  // Debounce search term
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const exportToCSV = () => {
    const csvData = filteredUsers.map(user => ({
      Username: user.username,
      Email: user.email,
      Roles: user.roles?.join(', ') || '',
      Status: user.isActive ? 'Active' : 'Inactive',
      Created: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'
    }));

    const csv = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Seo title="Admin Dashboard" />
      
      <div>
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
            <div className="row row-sm">
              <div className="col-xl-12">
                <div className="card bg-primary custom-card card-box">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-xl-8 col-sm-6 col-12">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <span className="avatar avatar-lg bg-white-2 rounded-circle">
                              <i className="fe fe-shield text-primary"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="mb-1 text-white font-weight-bold">Welcome, {currentUser?.username}!</h4>
                            <p className="mb-0 tx-white-7">
                              You have superadmin privileges. Manage users, candidates, countries, and offices here.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6 col-12">
                        <div className="text-end">
                          <button 
                            className="btn btn-white btn-sm me-2 mb-2 mb-sm-0"
                            onClick={openProfileModal}
                          >
                            <i className="fe fe-user me-2"></i>
                            Edit Profile
                          </button>
                          <button 
                            className="btn btn-white-2 btn-sm"
                            onClick={open2FAModal}
                          >
                            <i className="fe fe-shield me-2"></i>
                            Security & 2FA
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics Cards */}
            <div className="row row-sm">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-item">
                      <div className="card-item-icon card-icon">
                        <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"/>
                          <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"/>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                        </svg>
                      </div>
                      <div className="card-item-title mb-2">
                        <label className="main-content-label tx-13 font-weight-bold mb-1">TOTAL USERS</label>
                      </div>
                      <div className="card-item-body">
                        <div className="card-item-stat">
                          <h4 className="font-weight-bold">
                            <CountUp start={0} end={users.length} duration={2} />
                          </h4>
                          <small>
                            <b className="text-success">{users.length > 0 ? Math.round((users.filter(u => u.isActive).length / users.length) * 100) : 0}%</b> active users
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-item">
                      <div className="card-item-icon card-icon">
                        <svg className="text-success" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"/>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="card-item-title mb-2">
                        <label className="main-content-label tx-13 font-weight-bold mb-1">CANDIDATES</label>
                      </div>
                      <div className="card-item-body">
                        <div className="card-item-stat">
                          <h4 className="font-weight-bold">
                            <CountUp start={0} end={candidates.length} duration={2} />
                          </h4>
                          <small>
                            <b className="text-primary">{countries.length}</b> {countries.length === 1 ? 'country' : 'countries'}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-item">
                      <div className="card-item-icon card-icon">
                        <svg className="text-warning" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"/>
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <div className="card-item-title mb-2">
                        <label className="main-content-label tx-13 font-weight-bold mb-1">TOTAL VOTES</label>
                      </div>
                      <div className="card-item-body">
                        <div className="card-item-stat">
                          <h4 className="font-weight-bold">
                            <CountUp start={0} end={dashboardStats.totalVotes} duration={2} separator="," />
                          </h4>
                          <small>
                            <b className="text-info">{dashboardStats.todayVotes}</b> votes today
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-item">
                      <div className="card-item-icon card-icon">
                        <svg className="text-info" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0V0z" fill="none"/>
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div className="card-item-title mb-2">
                        <label className="main-content-label tx-13 font-weight-bold mb-1">POLLING STATIONS</label>
                      </div>
                      <div className="card-item-body">
                        <div className="card-item-stat">
                          <h4 className="font-weight-bold">
                            <CountUp start={0} end={dashboardStats.activePollingStations} duration={2} />
                          </h4>
                          <small>
                            <b className="text-success">85%</b> uptime
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Charts and Analytics Dashboard */}
            <div className="row row-sm">
              <div className="col-xl-12">
                <div className="card custom-card">
                  <div className="card-header">
                    <div className="card-title">Admin Dashboard</div>
                    <div className="main-card-options">
                      <ul className="nav nav-tabs tab-menu-heading" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a 
                            className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dashboard')}
                            style={{cursor: 'pointer'}}
                          >
                            📊 Dashboard & Analytics
                          </a>
                        </li>
                        <li className="nav-item">
                          <a 
                            className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
                            onClick={() => setActiveTab('users')}
                            style={{cursor: 'pointer'}}
                          >
                            👥 Users ({users.length})
                          </a>
                        </li>
                        <li className="nav-item">
                          <a 
                            className={`nav-link ${activeTab === 'candidates' ? 'active' : ''}`}
                            onClick={() => setActiveTab('candidates')}
                            style={{cursor: 'pointer'}}
                          >
                            🗳️ Candidates ({candidates.length})
                          </a>
                        </li>
                        <li className="nav-item">
                          <a 
                            className={`nav-link ${activeTab === 'countries' ? 'active' : ''}`}
                            onClick={() => setActiveTab('countries')}
                            style={{cursor: 'pointer'}}
                          >
                            🌍 Countries ({countries.length})
                          </a>
                        </li>
                        <li className="nav-item">
                          <a 
                            className={`nav-link ${activeTab === 'offices' ? 'active' : ''}`}
                            onClick={() => setActiveTab('offices')}
                            style={{cursor: 'pointer'}}
                          >
                            🏢 Offices ({offices.length})
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {error && (
                      <div className="alert alert-danger alert-dismissible" role="alert">
                        {error}
                        <button type="button" className="btn-close" onClick={() => setError('')} aria-label="Close"></button>
                      </div>
                    )}
                    
                    {/* Dashboard Tab with Charts */}
                    {activeTab === 'dashboard' && (
                      <div>
                        {/* Welcome Banner */}
                        <div className="row row-sm mb-1">
                          <div className="col-xl-12">
                            <div className="card bg-primary custom-card card-box">
                              <div className="card-body p-4">
                                <div className="row align-items-center">
                                  <div className="col-xl-8 col-sm-6 col-12">
                                    <div className="d-flex align-items-center">
                                      <div className="me-3">
                                        <span className="avatar avatar-xl bg-white-2 rounded-circle">
                                          <i className="fe fe-bar-chart-2 text-primary fs-5"></i>
                                        </span>
                                      </div>
                                      <div>
                                        <h4 className="mb-1 text-white font-weight-bold">📊 Analytics Dashboard</h4>
                                        <p className="mb-0 tx-white-7">
                                          Monitor system performance, user activities, and voting statistics in real-time.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 text-end">
                                    <button className="btn btn-white-2 me-2" onClick={fetchDashboardStats}>
                                      <i className="fe fe-refresh-cw me-2"></i>Refresh Data
                                    </button>
                                    <button className="btn btn-outline-light">
                                      <i className="fe fe-download me-2"></i>Export Report
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Key Performance Metrics */}
                        <div className="row row-sm mb-1">
                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card custom-card">
                              <div className="card-body">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-13 font-weight-bold mb-1">COMPLETION RATE</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold">
                                        <CountUp start={0} end={dashboardStats.completionRate} duration={2} />%
                                      </h4>
                                      <small><b className="text-success">{dashboardStats.completionRate}%</b> election progress</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card custom-card">
                              <div className="card-body">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-success" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"/>
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-13 font-weight-bold mb-1">USER GROWTH</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold">
                                        +<CountUp start={0} end={users.length > 0 ? Math.round((users.filter(u => u.isActive).length / users.length) * 100) : 0} duration={2} />%
                                      </h4>
                                      <small><b className="text-success">{users.filter(u => u.isActive).length}</b> active users</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card custom-card">
                              <div className="card-body">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-warning" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-13 font-weight-bold mb-1">SYSTEM LOAD</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold">
                                        <CountUp start={0} end={Math.round((dashboardStats.totalVotes / 15000) * 100)} duration={2} />%
                                      </h4>
                                      <small><b className="text-warning">{dashboardStats.totalVotes.toLocaleString()}</b> total votes</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card custom-card">
                              <div className="card-body">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-info" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-13 font-weight-bold mb-1">RESPONSE TIME</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold">
                                        <CountUp start={0} end={Math.round((Math.random() * 2 + 0.8) * 100) / 100} duration={2} decimals={1} />s
                                      </h4>
                                      <small><b className="text-info">85%</b> uptime today</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Analytics Charts Section */}
                        <div className="row row-sm">
                          <div className="col-xl-6 col-lg-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">👥 User Roles Distribution</div>
                                <div className="card-options">
                                  <span className="badge bg-primary-transparent">{users.length} total users</span>
                                </div>
                              </div>
                              <div className="card-body">
                                {users.length > 0 && (
                                  <Chart
                                    options={getUserRoleChartOptions().options}
                                    series={getUserRoleChartOptions().series}
                                    type="donut"
                                    height={300}
                                  />
                                )}
                                {users.length === 0 && (
                                  <div className="text-center p-4">
                                    <div className="empty">
                                      <div className="empty-icon">
                                        <i className="fe fe-users fs-3 text-muted"></i>
                                      </div>
                                      <p className="empty-title">No user data available</p>
                                      <p className="empty-subtitle text-muted">User role distribution will appear here once data is loaded</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-xl-6 col-lg-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">📊 User Activity Status</div>
                                <div className="card-options">
                                  <span className="badge bg-success-transparent">{users.filter(u => u.isActive).length} active</span>
                                </div>
                              </div>
                              <div className="card-body">
                                {users.length > 0 && (
                                  <Chart
                                    options={getUserActivityChart().options}
                                    series={getUserActivityChart().series}
                                    type="pie"
                                    height={300}
                                  />
                                )}
                                {users.length === 0 && (
                                  <div className="text-center p-4">
                                    <div className="empty">
                                      <div className="empty-icon">
                                        <i className="fe fe-activity fs-3 text-muted"></i>
                                      </div>
                                      <p className="empty-title">No activity data available</p>
                                      <p className="empty-subtitle text-muted">User activity status will appear here once data is loaded</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row row-sm mt-4">
                          <div className="col-xl-8 col-lg-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">📈 Voting Trend Analysis</div>
                                <div className="card-options">
                                  <span className="badge bg-info-transparent">Last 6 months</span>
                                </div>
                              </div>
                              <div className="card-body">
                                <Chart
                                  options={getVotingTrendChart().options}
                                  series={getVotingTrendChart().series}
                                  type="area"
                                  height={350}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-xl-4 col-lg-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">🌍 Candidates by Country</div>
                                <div className="card-options">
                                  <span className="badge bg-warning-transparent">{candidates.length} candidates</span>
                                </div>
                              </div>
                              <div className="card-body">
                                {candidates.length > 0 && (
                                  <Chart
                                    options={getCandidatesByCountryChart().options}
                                    series={getCandidatesByCountryChart().series}
                                    type="bar"
                                    height={350}
                                  />
                                )}
                                {candidates.length === 0 && (
                                  <div className="text-center p-4">
                                    <div className="empty">
                                      <div className="empty-icon">
                                        <i className="fe fe-globe fs-3 text-muted"></i>
                                      </div>
                                      <p className="empty-title">No candidate data</p>
                                      <p className="empty-subtitle text-muted">Candidate distribution will appear here</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* System Status & Activity */}
                        <div className="row row-sm mt-4">
                          <div className="col-xl-8 col-lg-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">📋 Recent System Activity</div>
                                <div className="card-options">
                                  <button className="btn btn-sm btn-outline-primary" onClick={fetchDashboardStats}>
                                    <i className="fe fe-refresh-cw me-1"></i>Refresh
                                  </button>
                                </div>
                              </div>
                              <div className="card-body">
                                <div className="activity-timeline">
                                  {[
                                    { 
                                      icon: 'fe-user-plus', 
                                      color: 'success', 
                                      text: 'New user registration completed', 
                                      time: '2 minutes ago',
                                      details: 'User registered with admin privileges'
                                    },
                                    { 
                                      icon: 'fe-edit-3', 
                                      color: 'info', 
                                      text: 'Candidate profile updated', 
                                      time: '15 minutes ago',
                                      details: 'Profile information and image updated'
                                    },
                                    { 
                                      icon: 'fe-user-x', 
                                      color: 'danger', 
                                      text: 'User account deactivated', 
                                      time: '1 hour ago',
                                      details: 'Account suspended due to policy violation'
                                    },
                                    { 
                                      icon: 'fe-globe', 
                                      color: 'warning', 
                                      text: 'New country added to system', 
                                      time: '3 hours ago',
                                      details: 'Country configuration completed'
                                    },
                                    { 
                                      icon: 'fe-check-circle', 
                                      color: 'success', 
                                      text: 'Voting session completed successfully', 
                                      time: '5 hours ago',
                                      details: 'All polling stations reported'
                                    }
                                  ].map((activity, index) => (
                                    <div key={index} className="d-flex align-items-start mb-1">
                                      <div className={`avatar avatar-sm bg-${activity.color}-transparent rounded-circle me-3 flex-shrink-0`}>
                                        <i className={`fe ${activity.icon} text-${activity.color}`}></i>
                                      </div>
                                      <div className="flex-1">
                                        <div className="d-flex justify-content-between align-items-start">
                                          <div>
                                            <p className="mb-1 font-weight-semibold">{activity.text}</p>
                                            <small className="text-muted">{activity.details}</small>
                                          </div>
                                          <small className="text-muted text-nowrap ms-2">{activity.time}</small>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-xl-4 col-lg-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">⚡ System Status</div>
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="d-flex align-items-center mb-3">
                                      <div className="avatar avatar-sm bg-success-transparent rounded me-2">
                                        <i className="fe fe-server text-success"></i>
                                      </div>
                                      <div>
                                        <p className="mb-0 font-weight-semibold">Server</p>
                                        <small className="text-success">Online</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex align-items-center mb-3">
                                      <div className="avatar avatar-sm bg-success-transparent rounded me-2">
                                        <i className="fe fe-database text-success"></i>
                                      </div>
                                      <div>
                                        <p className="mb-0 font-weight-semibold">Database</p>
                                        <small className="text-success">Connected</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex align-items-center mb-3">
                                      <div className="avatar avatar-sm bg-warning-transparent rounded me-2">
                                        <i className="fe fe-wifi text-warning"></i>
                                      </div>
                                      <div>
                                        <p className="mb-0 font-weight-semibold">API</p>
                                        <small className="text-warning">Slow</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex align-items-center mb-3">
                                      <div className="avatar avatar-sm bg-success-transparent rounded me-2">
                                        <i className="fe fe-shield text-success"></i>
                                      </div>
                                      <div>
                                        <p className="mb-0 font-weight-semibold">Security</p>
                                        <small className="text-success">Secure</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <hr className="my-3" />

                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="font-weight-semibold">Memory Usage</span>
                                    <span className="text-muted">64%</span>
                                  </div>
                                  <div className="progress" style={{ height: '6px' }}>
                                    <div className="progress-bar bg-primary" style={{ width: '64%' }}></div>
                                  </div>
                                </div>

                                <div className="mb-3">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="font-weight-semibold">CPU Usage</span>
                                    <span className="text-muted">28%</span>
                                  </div>
                                  <div className="progress" style={{ height: '6px' }}>
                                    <div className="progress-bar bg-success" style={{ width: '28%' }}></div>
                                  </div>
                                </div>

                                <div className="mb-0">
                                  <div className="d-flex justify-content-between mb-1">
                                    <span className="font-weight-semibold">Storage</span>
                                    <span className="text-muted">45%</span>
                                  </div>
                                  <div className="progress" style={{ height: '6px' }}>
                                    <div className="progress-bar bg-info" style={{ width: '45%' }}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Users Tab */}
                    {activeTab === 'users' && (
                      <div>
           

                        {/* User Statistics Cards */}
                        <div className="row row-sm mb-1">
                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card bg-primary custom-card card-box">
                              <div className="card-body p-4">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"/>
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-white tx-13 font-weight-bold mb-1">TOTAL USERS</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold tx-white">
                                        <CountUp start={0} end={users.length} duration={2} />
                                      </h4>
                                      <small className="tx-white-7"><b className="tx-white">{users.length}</b> registered users</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card bg-success custom-card card-box">
                              <div className="card-body p-4">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-white tx-13 font-weight-bold mb-1">ACTIVE USERS</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold tx-white">
                                        <CountUp start={0} end={users.filter(u => u.isActive).length} duration={2} />
                                      </h4>
                                       <small className="tx-white"><b className="tx-white">{users.length > 0 ? Math.round((users.filter(u => u.isActive).length / users.length) * 100) : 0}%</b> active rate</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card bg-warning custom-card card-box">
                              <div className="card-body p-4">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-white tx-13 font-weight-bold mb-1">ADMIN USERS</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold tx-white">
                                        <CountUp start={0} end={users.filter(u => u.roles?.includes('admin') || u.roles?.includes('superadmin')).length} duration={2} />
                                      </h4>
                                      <small className="tx-white-7"><b className="tx-white">{users.filter(u => u.roles?.includes('superadmin')).length}</b> super admins</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="card bg-info custom-card card-box">
                              <div className="card-body p-4">
                                <div className="card-item">
                                  <div className="card-item-icon card-icon">
                                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0V0z" fill="none"/>
                                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                    </svg>
                                  </div>
                                  <div className="card-item-title mb-2">
                                    <label className="main-content-label tx-white tx-13 font-weight-bold mb-1">RECENT SIGNUPS</label>
                                  </div>
                                  <div className="card-item-body">
                                    <div className="card-item-stat">
                                      <h4 className="font-weight-bold tx-white">
                                        <CountUp start={0} end={users.filter(u => {
                                          if (!u.createdAt) return false;
                                          const userDate = new Date(u.createdAt);
                                          const sevenDaysAgo = new Date();
                                          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                                          return userDate >= sevenDaysAgo;
                                        }).length} duration={2} />
                                      </h4>
                                      <small className="tx-white-7"><b className="tx-white">Last 7 days</b> activity</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Search and Filter Section */}
                        <div className="row row-sm mb-1">
                          <div className="col-xl-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">
                                  <i className="fe fe-search me-2"></i>Search & Filter Users
                                </div>
                               
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  {/* Search Input */}
                                  <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 mb-3">
                                    <label className="form-label">Search Users</label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="fe fe-search"></i>
                                      </span>
                                      <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Search by username, email, or role..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                      />
                                      {searchTerm && (
                                        <button 
                                          type="button" 
                                          className="btn btn-outline-secondary"
                                          onClick={() => setSearchTerm('')}
                                        >
                                          <i className="fe fe-x"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>

                                  {/* Filter Dropdown */}
                                  <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 mb-3">
                                    <label className="form-label">Filter By</label>
                                    <select 
                                      className="form-control"
                                      value={`${searchFilters.role || 'all'}-${searchFilters.status || 'all'}-${searchFilters.sortBy}-${searchFilters.sortOrder}`}
                                      onChange={(e) => {
                                        const [role, status, sortBy, sortOrder] = e.target.value.split('-');
                                        setSearchFilters({
                                          role: role === 'all' ? '' : role,
                                          status: status === 'all' ? '' : status,
                                          sortBy: sortBy,
                                          sortOrder: sortOrder
                                        });
                                      }}
                                    >
                                      <optgroup label="All Users">
                                        <option value="all-all-username-asc">All Users (A-Z)</option>
                                        <option value="all-all-username-desc">All Users (Z-A)</option>
                                        <option value="all-all-email-asc">All Users by Email (A-Z)</option>
                                        <option value="all-all-createdAt-desc">All Users by Date (Newest)</option>
                                        <option value="all-all-createdAt-asc">All Users by Date (Oldest)</option>
                                      </optgroup>
                                      <optgroup label="Filter by Role">
                                        <option value="user-all-username-asc">Users Only (A-Z)</option>
                                        <option value="admin-all-username-asc">Admins Only (A-Z)</option>
                                        <option value="superadmin-all-username-asc">Super Admins Only (A-Z)</option>
                                      </optgroup>
                                      <optgroup label="Filter by Status">
                                        <option value="all-active-username-asc">Active Users (A-Z)</option>
                                        <option value="all-inactive-username-asc">Inactive Users (A-Z)</option>
                                        <option value="all-active-createdAt-desc">Active Users (Newest)</option>
                                        <option value="all-inactive-createdAt-desc">Inactive Users (Newest)</option>
                                      </optgroup>
                                      <optgroup label="Specific Combinations">
                                        <option value="admin-active-username-asc">Active Admins (A-Z)</option>
                                        <option value="user-active-username-asc">Active Users (A-Z)</option>
                                        <option value="admin-inactive-username-asc">Inactive Admins (A-Z)</option>
                                        <option value="user-inactive-username-asc">Inactive Users (A-Z)</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>

                                {/* Search Results Summary */}
                                <div className="row">
                                  <div className="col-12">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="search-summary">
                                        <span className="badge bg-primary-transparent">
                                          {filteredUsers.length} of {users.length} users
                                        </span>
                                        {searchTerm && (
                                          <span className="ms-2 text-muted">
                                            Search: &ldquo;{searchTerm}&rdquo;
                                          </span>
                                        )}
                                        {(searchFilters.role || searchFilters.status) && (
                                          <span className="ms-2">
                                            {searchFilters.role && (
                                              <span className="badge bg-info-transparent me-1">
                                                Role: {searchFilters.role}
                                              </span>
                                            )}
                                            {searchFilters.status && (
                                              <span className="badge bg-success-transparent">
                                                Status: {searchFilters.status}
                                              </span>
                                            )}
                                          </span>
                                        )}
                                      </div>
                                      <div className="search-actions">
                                        {(searchTerm || searchFilters.role || searchFilters.status) && (
                                          <button 
                                            type="button" 
                                            className="btn btn-sm btn-outline-warning"
                                            onClick={clearFilters}
                                          >
                                            <i className="fe fe-filter-x me-1"></i>Clear Filters
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Users Table */}
                        <div className="row row-sm">
                          <div className="col-xl-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">User Directory</div>
                              
                              </div>
                              <div className="card-body">
                                {loading ? (
                                  <div className="text-center p-4">
                                    <div className="spinner-border text-primary" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Loading users...</p>
                                  </div>
                                ) : (
                                  <div className="table-responsive">
                                    <table className="table text-nowrap text-md-nowrap table-hover">
                                      <thead>
                                        <tr>
                                          <th className="wd-15p border-bottom-0">User</th>
                                          <th className="wd-20p border-bottom-0">Contact</th>
                                          <th className="wd-15p border-bottom-0">Roles</th>
                                          <th className="wd-15p border-bottom-0">Status</th>
                                          <th className="wd-10p border-bottom-0">Created</th>
                                          <th className="wd-25p border-bottom-0">Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {filteredUsers.map((user) => (
                                          <tr key={user.id}>
                                            <td>
                                              <div className="d-flex align-items-center">
                                                <div className="avatar avatar-md rounded-circle bg-primary-transparent me-3">
                                                  <span className="avatar-initials">
                                                    {user.username?.charAt(0).toUpperCase() || 'U'}
                                                  </span>
                                                </div>
                                                <div>
                                                  <h6 className="mb-0 font-weight-semibold">{user.username}</h6>
                                                  <small className="text-muted">ID: {user.id}</small>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <p className="mb-1">{user.email}</p>
                                                <small className="text-muted">
                                                  <i className="fe fe-mail me-1"></i>Email verified
                                                </small>
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                {user.roles && user.roles.map((role, index) => (
                                                  <span 
                                                    key={index} 
                                                    className={`badge me-1 mb-1 ${
                                                      role === 'superadmin' ? 'bg-danger' : 
                                                      role === 'user' ? 'bg-success' : 
                                                      'bg-secondary'
                                                    }`}
                                                  >
                                                    {role}
                                                  </span>
                                                ))}
                                                {(!user.roles || user.roles.length === 0) && (
                                                  <span className="badge bg-light text-dark">No roles</span>
                                                )}
                                              </div>
                                            </td>
                                            <td>
                                              <div className="d-flex align-items-center">
                                                <span className={`badge ${user.isActive ? 'bg-success' : 'bg-secondary'}`}>
                                                  {user.isActive ? 'Active' : 'Inactive'}
                                                </span>
 
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <p className="mb-0">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
                                                <small className="text-muted">
                                                  {user.createdAt ? new Date(user.createdAt).toLocaleTimeString() : ''}
                                                </small>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="btn-group" role="group">
                                                <button 
                                                  className="btn btn-sm btn-outline-info"
                                                  onClick={() => viewUserProfile(user.id)}
                                                  title="View profile"
                                                >
                                                  <i className="fe fe-eye"></i>
                                                </button>
                                                <button 
                                                  className="btn btn-sm btn-outline-primary"
                                                  onClick={() => openEditUserModal(user.id)}
                                                  title="Edit user"
                                                >
                                                  <i className="fe fe-edit"></i>
                                                </button>
                                              </div>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                    
                                    {filteredUsers.length === 0 && users.length > 0 && (
                                      <div className="text-center p-4">
                                        <div className="empty">
                                          <div className="empty-icon">
                                            <i className="fe fe-search fs-3 text-muted"></i>
                                          </div>
                                          <p className="empty-title">No matching users found</p>
                                          <p className="empty-subtitle text-muted">
                                            Try adjusting your search criteria or clear filters
                                          </p>
                                          <button 
                                            className="btn btn-outline-primary"
                                            onClick={clearFilters}
                                          >
                                            <i className="fe fe-refresh-cw me-2"></i>Clear Filters
                                          </button>
                                        </div>
                                      </div>
                                    )}

                                    {users.length === 0 && (
                                      <div className="text-center p-4">
                                        <div className="empty">
                                          <div className="empty-icon">
                                            <i className="fe fe-users fs-3 text-muted"></i>
                                          </div>
                                          <p className="empty-title">No users found</p>
                                          <p className="empty-subtitle text-muted">No registered users in the system</p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Candidates Tab */}
                    {activeTab === 'candidates' && (
                      <div>
                        <div className="row row-sm mb-4">
                          <div className="col-xl-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">Candidate Management</div>
                                <div className="card-options">
                                  <div className="d-flex align-items-center">
                                    <button 
                                      className="btn btn-sm btn-success me-2"
                                      onClick={() => openCandidateModal('add')}
                                    >
                                      <i className="fe fe-plus me-1"></i>Add Candidate
                                    </button>
                                    <button className="btn btn-sm btn-outline-light" onClick={fetchCandidates} title="Refresh data">
                                      <i className="fe fe-refresh-cw"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                {loading ? (
                                  <div className="text-center p-4">
                                    <div className="spinner-border text-primary" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Loading candidates...</p>
                                  </div>
                                ) : (
                                  <div className="table-responsive">
                                    <table className="table text-nowrap text-md-nowrap table-hover">
                                      <thead>
                                        <tr>
                                          <th className="wd-15p border-bottom-0">Candidate</th>
                                          <th className="wd-15p border-bottom-0">Name</th>
                                          <th className="wd-15p border-bottom-0">Party</th>
                                          <th className="wd-15p border-bottom-0">Country</th>
                                          <th className="wd-15p border-bottom-0">Bio</th>
                                          <th className="wd-10p border-bottom-0">Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {candidates.length === 0 ? (
                                          <tr>
                                            <td colSpan="6" className="text-center text-muted py-4">
                                              No candidates found. Click &ldquo;Add Candidate&rdquo; to create one.
                                            </td>
                                          </tr>
                                        ) : (
                                          candidates.map((candidate) => (
                                            <tr key={candidate.id}>
                                              <td>
                                                <div className="d-flex align-items-center">
                                                  {candidate.image ? (
                                                    <img 
                                                      src={candidate.image} 
                                                      alt={`${candidate.firstName} ${candidate.lastName}`}
                                                      className="avatar avatar-sm rounded-circle me-2"
                                                      style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                                    />
                                                  ) : (
                                                    <div className="avatar avatar-sm rounded-circle bg-primary-transparent me-2 d-flex align-items-center justify-content-center">
                                                      <i className="fe fe-user"></i>
                                                    </div>
                                                  )}
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  <strong>{candidate.firstName} {candidate.lastName}</strong>
                                                </div>
                                              </td>
                                              <td>
                                                <span className="badge bg-info-transparent">
                                                  {candidate.part || candidate.parti || 'No Party'}
                                                </span>
                                              </td>
                                              <td>
                                                <span className="badge bg-primary-transparent">
                                                  {candidate.country || 'Unknown'}
                                                </span>
                                              </td>
                                              <td>
                                                <div style={{maxWidth: '200px'}}>
                                                  {candidate.bio ? (
                                                    <span className="text-muted">
                                                      {candidate.bio.length > 50 ? `${candidate.bio.substring(0, 50)}...` : candidate.bio}
                                                    </span>
                                                  ) : (
                                                    <span className="text-muted">No bio available</span>
                                                  )}
                                                </div>
                                              </td>
                                              <td>
                                                <div className="btn-group" role="group">
                                                  <button 
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => openCandidateModal('view', candidate)}
                                                    title="View Details"
                                                  >
                                                    <i className="fe fe-eye"></i>
                                                  </button>
                                                  <button 
                                                    className="btn btn-sm btn-outline-info"
                                                    onClick={() => openCandidateModal('edit', candidate)}
                                                    title="Edit Candidate"
                                                  >
                                                    <i className="fe fe-edit"></i>
                                                  </button>
                                                  <button 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => {
                                                      setSelectedCandidate(candidate);
                                                      setShowCandidateDeleteModal(true);
                                                    }}
                                                    title="Delete Candidate"
                                                  >
                                                    <i className="fe fe-trash-2"></i>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                          ))
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Countries Tab */}
                    {activeTab === 'countries' && (
                      <div>
                        <div className="row row-sm mb-4">
                          <div className="col-xl-12">
                            <div className="card custom-card">
                              <div className="card-header">
                                <div className="card-title">Country Management</div>
                                <div className="card-options">
                                  <div className="d-flex align-items-center">
                                    <button 
                                      className="btn btn-sm btn-success me-2"
                                      onClick={() => openCountryModal('add')}
                                    >
                                      <i className="fe fe-plus me-1"></i>Add Country
                                    </button>
                                    <button className="btn btn-sm btn-outline-light" onClick={fetchCountries} title="Refresh data">
                                      <i className="fe fe-refresh-cw"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                {loading ? (
                                  <div className="text-center p-4">
                                    <div className="spinner-border text-primary" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Loading countries...</p>
                                  </div>
                                ) : (
                                  <div className="table-responsive">
                                    <table className="table text-nowrap text-md-nowrap table-hover">
                                      <thead>
                                        <tr>
                                          <th className="wd-20p border-bottom-0">Country Name</th>
                                          <th className="wd-15p border-bottom-0">Flag</th>
                                          <th className="wd-15p border-bottom-0">Statistics</th>
                                          <th className="wd-15p border-bottom-0">Candidates</th>
                                          <th className="wd-20p border-bottom-0">Offices</th>
                                          <th className="wd-15p border-bottom-0">Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {countries.length === 0 ? (
                                          <tr>
                                            <td colSpan="6" className="text-center text-muted py-4">
                                              No countries found. Click &ldquo;Add Country&rdquo; to create one.
                                            </td>
                                          </tr>
                                        ) : (
                                          countries.map((country) => (
                                            <tr key={country.id}>
                                              <td>
                                                <div className="d-flex align-items-center">
                                                  <div>
                                                    <strong>{country.name}</strong>
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                {country.flag ? (
                                                  <img 
                                                    src={country.flag} 
                                                    alt={`${country.name} flag`}
                                                    style={{width: '40px', height: '25px', objectFit: 'cover', borderRadius: '4px'}}
                                                  />
                                                ) : (
                                                  <div className="text-muted">
                                                    <i className="fe fe-flag"></i> No flag
                                                  </div>
                                                )}
                                              </td>
                                              <td>
                                                <div className="d-flex flex-column">
                                                  <small className="text-muted">
                                                    <i className="fe fe-briefcase me-1"></i>
                                                    {country.offices ? country.offices.length : 0} offices
                                                  </small>
                                                </div>
                                              </td>
                                              <td>
                                                <div className="d-flex flex-column">
                                                  <small className="text-muted">
                                                    <i className="fe fe-users me-1"></i>
                                                    {candidates.filter(c => c.country === country.name).length} candidates
                                                  </small>
                                                  {candidates.filter(c => c.country === country.name).length > 0 && (
                                                    <small className="text-success">
                                                      <i className="fe fe-check me-1"></i>Active
                                                    </small>
                                                  )}
                                                </div>
                                              </td>
                                              <td>
                                                <div className="d-flex flex-column">
                                                  <small className="text-muted">
                                                    <i className="fe fe-building me-1"></i>
                                                    {offices.filter(o => o.countries && o.countries.includes(country.name)).length} offices
                                                  </small>
                                                  {offices.filter(o => o.countries && o.countries.includes(country.name)).length > 0 && (
                                                    <div className="d-flex flex-wrap gap-1 mt-1">
                                                      {offices.filter(o => o.countries && o.countries.includes(country.name)).slice(0, 2).map((office, index) => (
                                                        <span key={index} className="badge bg-info-transparent" style={{fontSize: '10px'}}>
                                                          {office.originalId}
                                                        </span>
                                                      ))}
                                                      {offices.filter(o => o.countries && o.countries.includes(country.name)).length > 2 && (
                                                        <span className="badge bg-secondary-transparent" style={{fontSize: '10px'}}>
                                                          +{offices.filter(o => o.countries && o.countries.includes(country.name)).length - 2}
                                                        </span>
                                                      )}
                                                    </div>
                                                  )}
                                                </div>
                                              </td>
                                              <td>
                                                <div className="btn-group" role="group">
                                                  <button 
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => openCountryModal('view', country)}
                                                    title="View Details"
                                                  >
                                                    <i className="fe fe-eye"></i>
                                                  </button>
                                                  <button 
                                                    className="btn btn-sm btn-outline-info"
                                                    onClick={() => openCountryModal('edit', country)}
                                                    title="Edit Country"
                                                  >
                                                    <i className="fe fe-edit"></i>
                                                  </button>
                                                  <button 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => {
                                                      setSelectedCountry(country);
                                                      setShowCountryDeleteModal(true);
                                                    }}
                                                    title="Delete Country"
                                                  >
                                                    <i className="fe fe-trash-2"></i>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                          ))
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Offices Tab */}
                    {activeTab === 'offices' && (
                      <div>
                        <div className="row row-sm mb-4">
                          <div className="col-xl-12">
                            <div className="card custom-card">
                              <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                <h6 className="card-title mb-0">
                                  <i className="fe fe-building me-2"></i>Offices Management
                                  <small className="text-muted ms-2">Manage offices and their country associations</small>
                                </h6>
                                <div className="d-flex gap-2">
                                  <button 
                                    className="btn btn-primary btn-sm"
                                    onClick={() => openOfficeModal('add')}
                                  >
                                    <i className="fe fe-plus me-1"></i>Add Office
                                  </button>
                                  <button 
                                    className="btn btn-success btn-sm"
                                    onClick={() => openOfficeModal('bulk')}
                                  >
                                    <i className="fe fe-upload me-1"></i>Bulk Upload
                                  </button>
                                </div>
                              </div>
                              <div className="card-body">
                                {/* Search and Filters */}
                                <div className="row mb-3">
                                  <div className="col-md-6">
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="fe fe-search"></i>
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search offices by province, ID, code, or country..."
                                        value={officeSearchTerm}
                                        onChange={(e) => handleOfficeSearch(e.target.value)}
                                      />
                                      {officeSearchTerm && (
                                        <button
                                          className="btn btn-outline-secondary"
                                          type="button"
                                          onClick={() => handleOfficeSearch('')}
                                          title="Clear search"
                                        >
                                          <i className="fe fe-x"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="d-flex justify-content-end align-items-center gap-2">
                                      {selectedOffices.length > 0 && (
                                        <span className="badge bg-primary">
                                          {selectedOffices.length} selected
                                        </span>
                                      )}
                                      <span className="text-muted">
                                        {getFilteredOffices().length} office{getFilteredOffices().length !== 1 ? 's' : ''} found
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {loading ? (
                                  <div className="text-center p-4">
                                    <div className="spinner-border text-primary" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Loading offices...</p>
                                  </div>
                                ) : (
                                  <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                      <thead className="bg-light">
                                        <tr>
                                          <th width="50">
                                            <input 
                                              type="checkbox" 
                                              className="form-check-input" 
                                              id="select-all-offices"
                                              checked={isAllCurrentPageOfficesSelected()}
                                              ref={(input) => {
                                                if (input) input.indeterminate = isSomeCurrentPageOfficesSelected() && !isAllCurrentPageOfficesSelected();
                                              }}
                                              onChange={(e) => handleSelectAllOffices(e.target.checked)}
                                            />
                                          </th>
                                          <th>Original ID</th>
                                          <th>Province</th>
                                          <th>Registered</th>
                                          <th>Countries</th>
                                          <th>Created</th>
                                          <th>Updated</th>
                                          <th className="text-center">Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {offices.length === 0 ? (
                                          <tr>
                                            <td colSpan="8" className="text-center py-4 text-muted">
                                              <i className="fe fe-building fs-1 mb-2 d-block"></i>
                                              No offices found. Click &quot;Add Office&quot; to create your first office.
                                            </td>
                                          </tr>
                                        ) : (
                                          getPaginatedOffices().map((office) => (
                                            <tr key={office.originalId || office.id}>
                                              <td>
                                                <input 
                                                  type="checkbox" 
                                                  className="form-check-input" 
                                                  id={`office-${office.id}`}
                                                  checked={selectedOffices.includes(office.id)}
                                                  onChange={(e) => handleSelectOffice(office.id, e.target.checked)}
                                                />
                                              </td>
                                              <td>
                                                <span className="badge bg-info">{office.originalId || office.id}</span>
                                              </td>
                                              <td>
                                                <div className="d-flex flex-column">
                                                  <strong>{office.province}</strong>
                                                  {office.code && (
                                                    <small className="text-muted">Code: {office.code}</small>
                                                  )}
                                                </div>
                                              </td>
                                              <td>
                                                <span className="badge bg-primary">
                                                  {office.registered || 0} voters
                                                </span>
                                              </td>
                                              <td>
                                                {office.countries && office.countries.length > 0 ? (
                                                  <div className="d-flex flex-wrap gap-1">
                                                    {office.countries.slice(0, 2).map((countryName, index) => {
                                                      // Find the country to get its flag
                                                      const country = countries.find(c => c.name === countryName);
                                                      return (
                                                        <span key={index} className="badge bg-success d-flex align-items-center gap-1" style={{fontSize: '11px'}}>
                                                          {country?.flag && (
                                                            <img 
                                                              src={country.flag} 
                                                              alt={countryName}
                                                              style={{width: '14px', height: '10px', objectFit: 'cover'}}
                                                              onError={(e) => e.target.style.display = 'none'}
                                                            />
                                                          )}
                                                          {countryName}
                                                        </span>
                                                      );
                                                    })}
                                                    {office.countries.length > 2 && (
                                                      <span className="badge bg-secondary" style={{fontSize: '11px'}}>
                                                        +{office.countries.length - 2} more
                                                      </span>
                                                    )}
                                                  </div>
                                                ) : office.countryName ? (
                                                  <span className="badge bg-success d-flex align-items-center gap-1" style={{fontSize: '11px'}}>
                                                    {(() => {
                                                      const country = countries.find(c => c.name === office.countryName);
                                                      return country?.flag && (
                                                        <img 
                                                          src={country.flag} 
                                                          alt={office.countryName}
                                                          style={{width: '14px', height: '10px', objectFit: 'cover'}}
                                                          onError={(e) => e.target.style.display = 'none'}
                                                        />
                                                      );
                                                    })()}
                                                    {office.countryName}
                                                  </span>
                                                ) : (
                                                  <span className="text-muted">
                                                    <i className="fe fe-globe me-1"></i>No countries
                                                  </span>
                                                )}
                                              </td>
                                              <td>
                                                <small className="text-muted">
                                                  {office.createdAt ? new Date(office.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                  }) : 'N/A'}
                                                </small>
                                              </td>
                                              <td>
                                                <small className="text-muted">
                                                  {office.updatedAt ? new Date(office.updatedAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                  }) : 'N/A'}
                                                </small>
                                              </td>
                                              <td className="text-center">
                                                <div className="btn-group" role="group">
                                                  <button
                                                    className="btn btn-sm btn-info"
                                                    onClick={() => openOfficeModal('view', office)}
                                                    title="View Office"
                                                  >
                                                    <i className="fe fe-eye"></i>
                                                  </button>
                                                  <button
                                                    className="btn btn-sm btn-warning"
                                                    onClick={() => openOfficeModal('edit', office)}
                                                    title="Edit Office"
                                                  >
                                                    <i className="fe fe-edit"></i>
                                                  </button>
                                                  <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => {
                                                      setSelectedOffice(office);
                                                      setShowOfficeDeleteModal(true);
                                                    }}
                                                    title="Delete Office"
                                                  >
                                                    <i className="fe fe-trash-2"></i>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                          ))
                                        )}
                                      </tbody>
                                    </table>
                                    
                                    {/* Enhanced Pagination and Controls */}
                                    {getFilteredOffices().length > 0 && (
                                      <div className="row mt-4 align-items-center">
                                        {/* Left side - Items per page and showing info */}
                                        <div className="col-md-6">
                                          <div className="d-flex align-items-center flex-wrap gap-3">
                                            <div className="d-flex align-items-center">
                                              <span className="text-muted me-2">Show:</span>
                                              <select 
                                                className="form-select form-select-sm" 
                                                style={{width: 'auto'}}
                                                value={officeItemsPerPage}
                                                onChange={(e) => {
                                                  setOfficeItemsPerPage(Number(e.target.value));
                                                  setCurrentOfficePage(1);
                                                }}
                                              >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                                <option value={200}>200</option>
                                              </select>
                                              <span className="text-muted ms-2">per page</span>
                                            </div>
                                            
                                            <div className="text-muted">
                                              Showing {Math.min((currentOfficePage - 1) * officeItemsPerPage + 1, getFilteredOffices().length)} to{' '}
                                              {Math.min(currentOfficePage * officeItemsPerPage, getFilteredOffices().length)} of {getFilteredOffices().length} 
                                              {officeSearchTerm ? ` filtered` : ''} office{getFilteredOffices().length !== 1 ? 's' : ''}
                                            </div>
                                          </div>
                                        </div>
                                        
                                        {/* Right side - Pagination controls */}
                                        <div className="col-md-6">
                                          {getTotalOfficePages() > 1 && (
                                            <div className="d-flex justify-content-end align-items-center gap-3">
                                              {/* Jump to page */}
                                              <div className="d-flex align-items-center">
                                                <span className="text-muted me-2 small">Go to:</span>
                                                <input
                                                  type="number"
                                                  className="form-control form-control-sm"
                                                  style={{width: '70px'}}
                                                  min="1"
                                                  max={getTotalOfficePages()}
                                                  value={jumpToPage}
                                                  onChange={(e) => setJumpToPage(e.target.value)}
                                                  onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                      handleJumpToPage(parseInt(jumpToPage));
                                                    }
                                                  }}
                                                  placeholder="Page"
                                                />
                                                <button
                                                  className="btn btn-sm btn-outline-primary ms-1"
                                                  onClick={() => handleJumpToPage(parseInt(jumpToPage))}
                                                  disabled={!jumpToPage || parseInt(jumpToPage) < 1 || parseInt(jumpToPage) > getTotalOfficePages()}
                                                >
                                                  Go
                                                </button>
                                              </div>
                                              
                                              {/* Pagination navigation */}
                                              <nav>
                                                <ul className="pagination pagination-sm mb-0">
                                                  {/* First page */}
                                                  <li className={`page-item ${currentOfficePage === 1 ? 'disabled' : ''}`}>
                                                    <button 
                                                      className="page-link"
                                                      onClick={() => setCurrentOfficePage(1)}
                                                      disabled={currentOfficePage === 1}
                                                      title="First page"
                                                    >
                                                      <i className="fe fe-chevrons-left"></i>
                                                    </button>
                                                  </li>
                                                  
                                                  {/* Previous page */}
                                                  <li className={`page-item ${currentOfficePage === 1 ? 'disabled' : ''}`}>
                                                    <button 
                                                      className="page-link"
                                                      onClick={() => setCurrentOfficePage(currentOfficePage - 1)}
                                                      disabled={currentOfficePage === 1}
                                                      title="Previous page"
                                                    >
                                                      <i className="fe fe-chevron-left"></i>
                                                    </button>
                                                  </li>
                                                  
                                                  {/* Page numbers with smart pagination */}
                                                  {getPageNumbers().map((pageNum, index) => {
                                                    if (pageNum === '...') {
                                                      return (
                                                        <li key={`dots-${index}`} className="page-item disabled">
                                                          <span className="page-link">...</span>
                                                        </li>
                                                      );
                                                    }
                                                    return (
                                                      <li key={pageNum} className={`page-item ${currentOfficePage === pageNum ? 'active' : ''}`}>
                                                        <button 
                                                          className="page-link"
                                                          onClick={() => setCurrentOfficePage(pageNum)}
                                                        >
                                                          {pageNum}
                                                        </button>
                                                      </li>
                                                    );
                                                  })}
                                                  
                                                  {/* Next page */}
                                                  <li className={`page-item ${currentOfficePage === getTotalOfficePages() ? 'disabled' : ''}`}>
                                                    <button 
                                                      className="page-link"
                                                      onClick={() => setCurrentOfficePage(currentOfficePage + 1)}
                                                      disabled={currentOfficePage === getTotalOfficePages()}
                                                      title="Next page"
                                                    >
                                                      <i className="fe fe-chevron-right"></i>
                                                    </button>
                                                  </li>
                                                  
                                                  {/* Last page */}
                                                  <li className={`page-item ${currentOfficePage === getTotalOfficePages() ? 'disabled' : ''}`}>
                                                    <button 
                                                      className="page-link"
                                                      onClick={() => setCurrentOfficePage(getTotalOfficePages())}
                                                      disabled={currentOfficePage === getTotalOfficePages()}
                                                      title="Last page"
                                                    >
                                                      <i className="fe fe-chevrons-right"></i>
                                                    </button>
                                                  </li>
                                                </ul>
                                              </nav>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* No results message */}
                                    {getFilteredOffices().length === 0 && officeSearchTerm && (
                                      <div className="text-center py-4">
                                        <i className="fe fe-search fs-1 text-muted mb-2 d-block"></i>
                                        <h6 className="text-muted">No offices found</h6>
                                        <p className="text-muted small">
                                          No offices match your search term &quot;{officeSearchTerm}&quot;.
                                          <button 
                                            className="btn btn-link btn-sm p-0 ms-1"
                                            onClick={() => handleOfficeSearch('')}
                                          >
                                            Clear search
                                          </button>
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* User Profile/Edit Modal */}
        {showUserModal && (
          <div 
            className="modal fade show" 
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeUserModal();
              }
            }}
          >
            <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {modalMode === 'view' ? (
                      <>
                        <i className="fe fe-user me-2"></i>User Profile
                      </>
                    ) : (
                      <>
                        <i className="fe fe-edit me-2"></i>Edit User
                      </>
                    )}
                  </h5>
                  <button type="button" className="btn-close" onClick={closeUserModal}></button>
                </div>
                <div className="modal-body">
                  {/* Error Display */}
                  {error && (
                    <div className="alert alert-danger alert-dismissible" role="alert">
                      <i className="fe fe-alert-triangle me-2"></i>
                      {error}
                      <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setError('')}
                        aria-label="Close"
                      ></button>
                    </div>
                  )}
                  
                  {loading && modalMode !== 'view' ? (
                    // Loading state for edit mode
                    <div className="text-center p-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2 text-muted">Loading user data...</p>
                    </div>
                  ) : modalMode === 'view' ? (
                    // View Mode - Display user information
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-4 text-center">
                                <div className="avatar avatar-xxl rounded-circle bg-primary-transparent mx-auto mb-3">
                                  <span className="avatar-initials fs-1">
                                    {selectedUser?.username?.charAt(0).toUpperCase() || 'U'}
                                  </span>
                                </div>
                                <h5 className="mb-1">{selectedUser?.username}</h5>
                                <p className="text-muted mb-0">User ID: {selectedUser?.id}</p>
                              </div>
                              <div className="col-md-8">
                                <table className="table table-borderless">
                                  <tbody>
                                    <tr>
                                      <td className="font-weight-semibold">Email:</td>
                                      <td>{selectedUser?.email}</td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">Status:</td>
                                      <td>
                                        <span className={`badge ${selectedUser?.isActive ? 'bg-success' : 'bg-secondary'}`}>
                                          {selectedUser?.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">Roles:</td>
                                      <td>
                                        {selectedUser?.roles && selectedUser.roles.map((role, index) => (
                                          <span 
                                            key={index} 
                                            className={`badge me-1 ${
                                              role === 'superadmin' ? 'bg-danger' : 
                                              role === 'admin' ? 'bg-warning' : 
                                              'bg-secondary'
                                            }`}
                                          >
                                            {role}
                                          </span>
                                        ))}
                                        {(!selectedUser?.roles || selectedUser.roles.length === 0) && (
                                          <span className="badge bg-light text-dark">No roles</span>
                                        )}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">Created:</td>
                                      <td>
                                        {selectedUser?.createdAt ? 
                                          new Date(selectedUser.createdAt).toLocaleDateString() + ' ' + 
                                          new Date(selectedUser.createdAt).toLocaleTimeString() : 
                                          'N/A'
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">Last Updated:</td>
                                      <td>
                                        {selectedUser?.updatedAt ? 
                                          new Date(selectedUser.updatedAt).toLocaleDateString() + ' ' + 
                                          new Date(selectedUser.updatedAt).toLocaleTimeString() : 
                                          'N/A'
                                        }
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Edit Mode - Display form
                    <form onSubmit={handleUserUpdate}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="form-label">Username *</label>
                            <input
                              type="text"
                              className="form-control"
                              value={userForm.username}
                              onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                              required
                              placeholder="Enter username"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="form-label">Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              value={userForm.email}
                              onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                              required
                              placeholder="Enter email address"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="form-label">New Password (leave blank to keep current)</label>
                            <div className="input-group">
                              <input
                                type="password"
                                className="form-control"
                                value={userForm.password}
                                onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                                placeholder="Enter new password"
                              />
                              <button type="button" className="btn btn-outline-secondary">
                                <i className="fe fe-eye"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="form-label">Status</label>
                            <select
                              className="form-control"
                              value={userForm.isActive}
                              onChange={(e) => setUserForm({ ...userForm, isActive: e.target.value === 'true' })}
                            >
                              <option value="true">Active</option>
                              <option value="false">Inactive</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label className="form-label">User Roles</label>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="role-user"
                                checked={userForm.roles.includes('user')}
                                onChange={() => handleRoleToggle('user')}
                              />
                              <label className="form-check-label" htmlFor="role-user">
                                <span className="badge bg-secondary me-2">USER</span>Basic User
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="role-admin"
                                checked={userForm.roles.includes('admin')}
                                onChange={() => handleRoleToggle('admin')}
                              />
                              <label className="form-check-label" htmlFor="role-admin">
                                <span className="badge bg-warning me-2">ADMIN</span>Administrator
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="role-superadmin"
                                checked={userForm.roles.includes('superadmin')}
                                onChange={() => handleRoleToggle('superadmin')}
                              />
                              <label className="form-check-label" htmlFor="role-superadmin">
                                <span className="badge bg-danger me-2">SUPER</span>Super Admin
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label className="form-label">Additional Information</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          value={userForm.notes || ''}
                          onChange={(e) => setUserForm({ ...userForm, notes: e.target.value })}
                          placeholder="Add any notes or additional information about this user..."
                        />
                      </div>
                    </form>
                  )}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={closeUserModal} disabled={loading}>
                    <i className="fe fe-x me-2"></i>Cancel
                  </button>
                  {modalMode === 'edit' && (
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      onClick={handleUserUpdate}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="spinner-border spinner-border-sm me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Updating...
                        </>
                      ) : (
                        <>
                          <i className="fe fe-save me-2"></i>Update User
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && selectedUser && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-danger text-white">
                  <h5 className="modal-title">
                    <i className="fe fe-alert-triangle me-2"></i>Confirm User Deletion
                  </h5>
                  <button type="button" className="btn-close btn-close-white" onClick={() => setShowDeleteModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="text-center p-3">
                    <div className="avatar avatar-xl bg-danger-transparent rounded-circle mx-auto mb-3">
                      <i className="fe fe-trash-2 fs-2 text-danger"></i>
                    </div>
                    <h5 className="mb-3">Delete User Account</h5>
                    <p className="text-muted mb-3">
                      Are you sure you want to delete the user account for <strong>{selectedUser.username}</strong>?
                    </p>
                    <div className="alert alert-warning" role="alert">
                      <i className="fe fe-alert-triangle me-2"></i>
                      This action cannot be undone. All user data will be permanently removed.
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={() => setShowDeleteModal(false)}>
                    <i className="fe fe-x me-2"></i>Cancel
                  </button>
                  <button type="button" className="btn btn-danger" onClick={deleteUser}>
                    <i className="fe fe-trash-2 me-2"></i>Delete User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Candidate Modal */}
        {showCandidateModal && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className={`modal-header ${candidateModalMode === 'view' ? 'bg-info' : candidateModalMode === 'edit' ? 'bg-warning' : 'bg-success'} text-white`}>
                  <h5 className="modal-title">
                    <i className={`fe ${candidateModalMode === 'view' ? 'fe-eye' : candidateModalMode === 'edit' ? 'fe-edit' : 'fe-plus'} me-2`}></i>
                    {candidateModalMode === 'view' ? 'View' : candidateModalMode === 'edit' ? 'Edit' : 'Add'} Candidate
                  </h5>
                  <button type="button" className="btn-close btn-close-white" onClick={closeCandidateModal}></button>
                </div>
                <div className="modal-body">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      <i className="fe fe-alert-circle me-2"></i>
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleCandidateUpdate}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={candidateForm.firstName}
                            onChange={(e) => setCandidateForm({...candidateForm, firstName: e.target.value})}
                            required
                            disabled={candidateModalMode === 'view'}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={candidateForm.lastName}
                            onChange={(e) => setCandidateForm({...candidateForm, lastName: e.target.value})}
                            required
                            disabled={candidateModalMode === 'view'}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label">Party</label>
                          <input
                            type="text"
                            className="form-control"
                            value={candidateForm.part}
                            onChange={(e) => setCandidateForm({
                              ...candidateForm, 
                              part: e.target.value,
                              parti: e.target.value
                            })}
                            disabled={candidateModalMode === 'view'}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="form-label">Country *</label>
                          <select
                            className="form-control"
                            value={candidateForm.country}
                            onChange={(e) => setCandidateForm({...candidateForm, country: e.target.value})}
                            required
                            disabled={candidateModalMode === 'view'}
                          >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country.id} value={country.name}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group mb-3">
                      <label className="form-label">Image URL</label>
                      <input
                        type="url"
                        className="form-control"
                        value={candidateForm.image}
                        onChange={(e) => setCandidateForm({...candidateForm, image: e.target.value})}
                        placeholder="https://example.com/image.jpg"
                        disabled={candidateModalMode === 'view'}
                      />
                      {candidateForm.image && (
                        <div className="mt-2">
                          <img 
                            src={candidateForm.image} 
                            alt="Preview" 
                            style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px'}}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="form-group mb-3">
                      <label className="form-label">Biography</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        value={candidateForm.bio}
                        onChange={(e) => setCandidateForm({...candidateForm, bio: e.target.value})}
                        placeholder="Brief biography of the candidate..."
                        disabled={candidateModalMode === 'view'}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={closeCandidateModal}>
                    <i className="fe fe-x me-2"></i>
                    {candidateModalMode === 'view' ? 'Close' : 'Cancel'}
                  </button>
                  {candidateModalMode === 'view' ? (
                    <button 
                      type="button" 
                      className="btn btn-warning"
                      onClick={() => openCandidateModal('edit', selectedCandidate)}
                    >
                      <i className="fe fe-edit me-2"></i>Edit Candidate
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={handleCandidateUpdate}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          {candidateModalMode === 'add' ? 'Creating...' : 'Updating...'}
                        </>
                      ) : (
                        <>
                          <i className="fe fe-check me-2"></i>
                          {candidateModalMode === 'add' ? 'Create Candidate' : 'Update Candidate'}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Candidate Delete Confirmation Modal */}
        {showCandidateDeleteModal && selectedCandidate && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-danger text-white">
                  <h5 className="modal-title">
                    <i className="fe fe-alert-triangle me-2"></i>Confirm Candidate Deletion
                  </h5>
                  <button type="button" className="btn-close btn-close-white" onClick={() => setShowCandidateDeleteModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="text-center p-3">
                    <div className="avatar avatar-xl bg-danger-transparent rounded-circle mx-auto mb-3">
                      <i className="fe fe-trash-2 fs-2 text-danger"></i>
                    </div>
                    <h5 className="mb-3">Delete Candidate</h5>
                    <p className="text-muted mb-3">
                      Are you sure you want to delete <strong>{selectedCandidate.firstName} {selectedCandidate.lastName}</strong>?
                    </p>
                    <div className="alert alert-warning" role="alert">
                      <i className="fe fe-alert-triangle me-2"></i>
                      This action cannot be undone. All candidate data will be permanently removed.
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={() => setShowCandidateDeleteModal(false)}>
                    <i className="fe fe-x me-2"></i>Cancel
                  </button>
                  <button type="button" className="btn btn-danger" onClick={deleteCandidateConfirm}>
                    <i className="fe fe-trash-2 me-2"></i>Delete Candidate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Country Modal */}
        {showCountryModal && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className={`modal-header ${countryModalMode === 'view' ? 'bg-info' : countryModalMode === 'edit' ? 'bg-warning' : 'bg-success'} text-white`}>
                  <h5 className="modal-title">
                    <i className={`fe ${countryModalMode === 'view' ? 'fe-eye' : countryModalMode === 'edit' ? 'fe-edit' : 'fe-plus'} me-2`}></i>
                    {countryModalMode === 'view' ? 'View' : countryModalMode === 'edit' ? 'Edit' : 'Add'} Country
                  </h5>
                  <button type="button" className="btn-close btn-close-white" onClick={closeCountryModal}></button>
                </div>
                <div className="modal-body">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      <i className="fe fe-alert-circle me-2"></i>
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleCountryUpdate}>
                    <div className="form-group mb-3">
                      <label className="form-label">Country Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={countryForm.name}
                        onChange={(e) => setCountryForm({...countryForm, name: e.target.value})}
                        required
                        disabled={countryModalMode === 'view'}
                        placeholder="Enter country name"
                      />
                    </div>
                    
                    <div className="form-group mb-3">
                      <label className="form-label">Flag URL</label>
                      <input
                        type="url"
                        className="form-control"
                        value={countryForm.flag}
                        onChange={(e) => setCountryForm({...countryForm, flag: e.target.value})}
                        disabled={countryModalMode === 'view'}
                        placeholder="https://example.com/flag.png"
                      />
                      {countryForm.flag && (
                        <div className="mt-2">
                          <img 
                            src={countryForm.flag} 
                            alt="Flag preview" 
                            style={{width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {countryModalMode !== 'view' && (
                      <div className="form-group mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <label className="form-label mb-0">
                            <i className="fe fe-building me-2"></i>Associated Offices
                            <span className="badge bg-info ms-2">{countryForm.offices?.length || 0} selected</span>
                          </label>
                          <div className="btn-group btn-group-sm" role="group">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              onClick={() => {
                                setCountryForm({
                                  ...countryForm,
                                  offices: offices.map(o => o.originalId || o.id)
                                });
                              }}
                            >
                              <i className="fe fe-check-square me-1"></i>Select All
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => {
                                setCountryForm({
                                  ...countryForm,
                                  offices: []
                                });
                              }}
                            >
                              <i className="fe fe-square me-1"></i>Deselect All
                            </button>
                          </div>
                        </div>
                        
                        {/* Search input for offices */}
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <i className="fe fe-search"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search offices by province or ID..."
                            value={officeSearchTerm}
                            onChange={(e) => setOfficeSearchTerm(e.target.value)}
                          />
                          {officeSearchTerm && (
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => setOfficeSearchTerm('')}
                              title="Clear search"
                            >
                              <i className="fe fe-x"></i>
                            </button>
                          )}
                        </div>
                        
                        <div className="card">
                          <div className="card-body p-3" style={{maxHeight: '250px', overflowY: 'auto'}}>
                            {offices.length === 0 ? (
                              <div className="text-center py-4">
                                <i className="fe fe-building fs-1 text-muted mb-2 d-block"></i>
                                <p className="text-muted mb-0">No offices available. Add offices first.</p>
                              </div>
                            ) : (
                              (() => {
                                // Filter offices based on search term
                                const filteredOffices = officeSearchTerm.trim() ? 
                                  offices.filter(office => 
                                    office.province?.toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
                                    office.originalId?.toString().toLowerCase().includes(officeSearchTerm.toLowerCase()) ||
                                    office.id?.toString().toLowerCase().includes(officeSearchTerm.toLowerCase())
                                  ) : offices;
                                
                                return filteredOffices.length === 0 ? (
                                  <div className="text-center py-4">
                                    <i className="fe fe-search fs-1 text-muted mb-2 d-block"></i>
                                    <p className="text-muted mb-0">No offices match your search.</p>
                                  </div>
                                ) : (
                                  <div className="row">
                                    {filteredOffices.map((office) => (
                                      <div key={office.originalId || office.id} className="col-md-6 mb-3">
                                        <div className={`card h-100 ${countryForm.offices?.includes(office.originalId || office.id) ? 'border-primary bg-primary-transparent' : 'border'}`}>
                                          <div className="card-body p-3">
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`office-${office.originalId || office.id}`}
                                                checked={countryForm.offices?.includes(office.originalId || office.id) || false}
                                                onChange={(e) => {
                                                  const currentOffices = countryForm.offices || [];
                                                  const officeId = office.originalId || office.id;
                                                  if (e.target.checked) {
                                                    setCountryForm({
                                                      ...countryForm, 
                                                      offices: [...currentOffices, officeId]
                                                    });
                                                  } else {
                                                    setCountryForm({
                                                      ...countryForm,
                                                      offices: currentOffices.filter(o => o !== officeId)
                                                    });
                                                  }
                                                }}
                                              />
                                              <label className="form-check-label w-100" htmlFor={`office-${office.originalId || office.id}`} style={{cursor: 'pointer'}}>
                                                <div className="d-flex align-items-center">
                                                  <div className="me-2">
                                                    <span className="badge bg-info">{office.originalId || office.id}</span>
                                                  </div>
                                                  <div className="flex-grow-1">
                                                    <div className="fw-semibold">{office.originalId || office.id}</div>
                                                    <small className="text-muted">
                                                      <i className="fe fe-map-pin me-1"></i>
                                                      {office.province}
                                                    </small>
                                                    {office.registered && (
                                                      <small className="text-muted d-block">
                                                        <i className="fe fe-users me-1"></i>
                                                        {office.registered} voters
                                                      </small>
                                                    )}
                                                  </div>
                                                  <div className="text-end">
                                                    <span className={`badge ${office.registered ? 'bg-success' : 'bg-warning'}`} style={{fontSize: '9px'}}>
                                                      {office.registered ? 'Active' : 'Pending'}
                                                    </span>
                                                  </div>
                                                </div>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                );
                              })()
                            )}
                          </div>
                        </div>
                        <small className="form-text text-muted">
                          <i className="fe fe-help-circle me-1"></i>
                          Select offices that will operate or provide services in this country
                        </small>
                      </div>
                    )}

                    {countryModalMode === 'view' && selectedCountry && (
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card bg-light">
                            <div className="card-body">
                              <h6 className="card-title">Statistics</h6>
                              <div className="d-flex justify-content-between">
                                <span>Candidates:</span>
                                <span className="badge bg-primary">
                                  {candidates.filter(c => c.country === selectedCountry.name).length}
                                </span>
                              </div>
                              <div className="d-flex justify-content-between mt-2">
                                <span>Offices:</span>
                                <span className="badge bg-info">
                                  {selectedCountry.offices ? selectedCountry.offices.length : 0}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={closeCountryModal}>
                    <i className="fe fe-x me-2"></i>
                    {countryModalMode === 'view' ? 'Close' : 'Cancel'}
                  </button>
                  {countryModalMode === 'view' ? (
                    <button 
                      type="button" 
                      className="btn btn-warning"
                      onClick={() => openCountryModal('edit', selectedCountry)}
                    >
                      <i className="fe fe-edit me-2"></i>Edit Country
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={handleCountryUpdate}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          {countryModalMode === 'add' ? 'Creating...' : 'Updating...'}
                        </>
                      ) : (
                        <>
                          <i className="fe fe-check me-2"></i>
                          {countryModalMode === 'add' ? 'Create Country' : 'Update Country'}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Country Delete Confirmation Modal */}
        {showCountryDeleteModal && selectedCountry && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-danger text-white">
                  <h5 className="modal-title">
                    <i className="fe fe-alert-triangle me-2"></i>Confirm Country Deletion
                  </h5>
                  <button type="button" className="btn-close btn-close-white" onClick={() => setShowCountryDeleteModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="text-center p-3">
                    <div className="avatar avatar-xl bg-danger-transparent rounded-circle mx-auto mb-3">
                      <i className="fe fe-trash-2 fs-2 text-danger"></i>
                    </div>
                    <h5 className="mb-3">Delete Country</h5>
                    <p className="text-muted mb-3">
                      Are you sure you want to delete <strong>{selectedCountry.name}</strong>?
                    </p>
                    {candidates.filter(c => c.country === selectedCountry.name).length > 0 && (
                      <div className="alert alert-warning" role="alert">
                        <i className="fe fe-alert-triangle me-2"></i>
                        This country has {candidates.filter(c => c.country === selectedCountry.name).length} candidate(s). 
                        Deleting it may affect the candidates.
                      </div>
                    )}
                    <div className="alert alert-danger" role="alert">
                      <i className="fe fe-alert-triangle me-2"></i>
                      This action cannot be undone. All country data will be permanently removed.
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={() => setShowCountryDeleteModal(false)}>
                    <i className="fe fe-x me-2"></i>Cancel
                  </button>
                  <button type="button" className="btn btn-danger" onClick={deleteCountryConfirm}>
                    <i className="fe fe-trash-2 me-2"></i>Delete Country
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Office Modal */}
        {showOfficeModal && (
          <div 
            className="modal fade show" 
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeOfficeModal();
              }
            }}
          >
            <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {officeModalMode === 'view' ? (
                      <>
                        <i className="fe fe-building me-2"></i>Office Details
                      </>
                    ) : officeModalMode === 'bulk' ? (
                      <>
                        <i className="fe fe-upload me-2"></i>Bulk Upload Offices
                      </>
                    ) : (
                      <>
                        <i className={`fe fe-${officeModalMode === 'add' ? 'plus' : 'edit'} me-2`}></i>
                        {officeModalMode === 'add' ? 'Add New Office' : 'Edit Office'}
                      </>
                    )}
                  </h5>
                  <button type="button" className="btn-close" onClick={closeOfficeModal}></button>
                </div>
                <div className="modal-body">
                  {/* Error Display */}
                  {error && (
                    <div className="alert alert-danger alert-dismissible" role="alert">
                      <i className="fe fe-alert-triangle me-2"></i>
                      {error}
                      <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setError('')}
                        aria-label="Close"
                      ></button>
                    </div>
                  )}

                  {officeModalMode === 'bulk' ? (
                    // Bulk Upload Mode
                    <div>
                      <div className="alert alert-info" role="alert">
                        <i className="fe fe-info me-2"></i>
                        Upload a JSON file with office data. Each office should have: originalId, offices, code, registered, province, countries (array).
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label">Select JSON File:</label>
                        <input
                          type="file"
                          className="form-control"
                          accept=".json"
                          onChange={handleJsonFileUpload}
                          ref={fileInputRef}
                        />
                      </div>

                      {jsonPreview && (
                        <div className="mb-3">
                          <label className="form-label">Preview ({jsonPreview.length} offices):</label>
                          <div className="bg-light p-3 rounded" style={{maxHeight: '300px', overflowY: 'auto'}}>
                            <pre className="mb-0" style={{fontSize: '12px'}}>
                              {JSON.stringify(jsonPreview.slice(0, 3), null, 2)}
                              {jsonPreview.length > 3 && '\n... and ' + (jsonPreview.length - 3) + ' more offices'}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : loading && officeModalMode !== 'view' ? (
                    // Loading state for edit mode
                    <div className="text-center p-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2 text-muted">Loading office data...</p>
                    </div>
                  ) : officeModalMode === 'view' ? (
                    // View Mode - Display office information
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-4 text-center">
                                <div className="avatar avatar-xxl rounded-circle bg-info-transparent mx-auto mb-3">
                                  <span className="avatar-initials fs-1">
                                    <i className="fe fe-building"></i>
                                  </span>
                                </div>
                                <h5 className="mb-1">Office {selectedOffice?.originalId || selectedOffice?.id}</h5>
                                <p className="text-muted mb-0">{selectedOffice?.province}</p>
                                <div className="mt-2">
                                  <span className={`badge ${selectedOffice?.registered > 0 ? 'bg-success' : 'bg-warning'}`}>
                                    {selectedOffice?.registered > 0 ? 'Active' : 'Pending'}
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <h6 className="mb-3">Office Information</h6>
                                <table className="table table-borderless">
                                  <tbody>
                                    <tr>
                                      <td className="font-weight-semibold" style={{width: '35%'}}>Original ID:</td>
                                      <td><span className="badge bg-info">{selectedOffice?.originalId || selectedOffice?.id}</span></td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">System ID:</td>
                                      <td><span className="badge bg-secondary">{selectedOffice?.id}</span></td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">Province:</td>
                                      <td><strong>{selectedOffice?.province}</strong></td>
                                    </tr>
                                    <tr>
                                      <td className="font-weight-semibold">Registered Voters:</td>
                                      <td>
                                        <span className="badge bg-primary">
                                          <i className="fe fe-users me-1"></i>
                                          {selectedOffice?.registered || 0} voters
                                        </span>
                                      </td>
                                    </tr>
                                    {selectedOffice?.code && (
                                      <tr>
                                        <td className="font-weight-semibold">Code:</td>
                                        <td><code>{selectedOffice.code}</code></td>
                                      </tr>
                                    )}
                                    {selectedOffice?.countryId && (
                                      <tr>
                                        <td className="font-weight-semibold">Country ID:</td>
                                        <td><code>{selectedOffice.countryId}</code></td>
                                      </tr>
                                    )}
                                    {selectedOffice?.countryName && (
                                      <tr>
                                        <td className="font-weight-semibold">Country:</td>
                                        <td>
                                          <span className="badge bg-success d-flex align-items-center gap-1 w-fit">
                                            {(() => {
                                              const country = countries.find(c => c.name === selectedOffice.countryName);
                                              return country?.flag && (
                                                <img 
                                                  src={country.flag} 
                                                  alt={selectedOffice.countryName}
                                                  style={{width: '16px', height: '12px', objectFit: 'cover'}}
                                                  onError={(e) => e.target.style.display = 'none'}
                                                />
                                              );
                                            })()}
                                            {selectedOffice.countryName}
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                    {selectedOffice?.CreatedAt && (
                                      <tr>
                                        <td className="font-weight-semibold">Created:</td>
                                        <td>
                                          <span className="badge bg-info-transparent text-info">
                                            <i className="fe fe-calendar me-1"></i>
                                            {new Date(selectedOffice.CreatedAt).toLocaleDateString('en-US', {
                                              year: 'numeric',
                                              month: 'short',
                                              day: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit'
                                            })}
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                    {selectedOffice?.UpdatedAt && (
                                      <tr>
                                        <td className="font-weight-semibold">Last Updated:</td>
                                        <td>
                                          <span className="badge bg-warning-transparent text-warning">
                                            <i className="fe fe-clock me-1"></i>
                                            {new Date(selectedOffice.UpdatedAt).toLocaleDateString('en-US', {
                                              year: 'numeric',
                                              month: 'short',
                                              day: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit'
                                            })}
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                    <tr>
                                      <td className="font-weight-semibold">Associated Countries:</td>
                                      <td>
                                        {selectedOffice?.countries && selectedOffice.countries.length > 0 ? (
                                          <div className="d-flex flex-wrap gap-2">
                                            {selectedOffice.countries.map((countryName, index) => {
                                              const country = countries.find(c => c.name === countryName);
                                              return (
                                                <div key={index} className="d-flex align-items-center gap-2 bg-light p-2 rounded border">
                                                  {country?.flag && (
                                                    <img 
                                                      src={country.flag} 
                                                      alt={countryName}
                                                      style={{width: '20px', height: '14px', objectFit: 'cover', borderRadius: '2px'}}
                                                      onError={(e) => e.target.style.display = 'none'}
                                                    />
                                                  )}
                                                  <span className="fw-semibold">{countryName}</span>
                                                  <span className="badge bg-primary" style={{fontSize: '10px'}}>
                                                    {candidates.filter(c => c.country === countryName).length} candidates
                                                  </span>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        ) : (
                                          <div className="alert alert-info mb-0" style={{padding: '8px 12px'}}>
                                            <i className="fe fe-info me-2"></i>
                                            No countries associated with this office
                                          </div>
                                        )}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Add/Edit Mode - Form
                    <form onSubmit={(e) => handleOfficeUpdate(e)}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Original ID <span className="text-danger">*</span></label>
                            <input
                              type="text"
                              className="form-control"
                              value={officeForm.originalId}
                              onChange={(e) => setOfficeForm({...officeForm, originalId: e.target.value})}
                              required
                              placeholder="Enter original ID"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Province <span className="text-danger">*</span></label>
                            <input
                              type="text"
                              className="form-control"
                              value={officeForm.province}
                              onChange={(e) => setOfficeForm({...officeForm, province: e.target.value})}
                              required
                              placeholder="Enter province name"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Province <span className="text-danger">*</span></label>
                            <input
                              type="text"
                              className="form-control"
                              value={officeForm.province}
                              onChange={(e) => setOfficeForm({...officeForm, province: e.target.value})}
                              required
                              placeholder="Enter province"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Original ID</label>
                            <input
                              type="text"
                              className="form-control"
                              value={officeForm.originalId}
                              onChange={(e) => setOfficeForm({...officeForm, originalId: e.target.value})}
                              placeholder="Enter original ID"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Registered Voters</label>
                        <input
                          type="number"
                          className="form-control"
                          id="registeredInput"
                          min="0"
                          value={officeForm.registered}
                          onChange={(e) => setOfficeForm({...officeForm, registered: parseInt(e.target.value) || 0})}
                          placeholder="Enter number of registered voters"
                        />
                        <div className="form-text text-muted">
                          Number of voters registered at this office
                        </div>
                      </div>

                      <div className="mb-3">
                      
                        
                        {/* Search input for countries */}
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <i className="fe fe-search"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search countries by name..."
                            value={countrySearchTerm}
                            onChange={(e) => setCountrySearchTerm(e.target.value)}
                          />
                          {countrySearchTerm && (
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => setCountrySearchTerm('')}
                              title="Clear search"
                            >
                              <i className="fe fe-x"></i>
                            </button>
                          )}
                        </div>
                        
                        <div className="alert alert-info" style={{padding: '8px 12px', fontSize: '12px'}}>
                          <i className="fe fe-info me-1"></i>
                          Select which countries this office will serve or operate in
                        </div>
                        <div className="card">
                          <div className="card-body p-3" style={{maxHeight: '250px', overflowY: 'auto'}}>
                            {countries.length === 0 ? (
                              <div className="text-center py-4">
                                <i className="fe fe-alert-circle fs-1 text-muted mb-2 d-block"></i>
                                <p className="text-muted mb-0">No countries available. Add countries first.</p>
                              </div>
                            ) : (
                              (() => {
                                // Filter countries based on search term
                                const filteredCountries = countrySearchTerm.trim() ? 
                                  countries.filter(country => 
                                    country.name?.toLowerCase().includes(countrySearchTerm.toLowerCase())
                                  ) : countries;
                                
                                return filteredCountries.length === 0 ? (
                                  <div className="text-center py-4">
                                    <i className="fe fe-search fs-1 text-muted mb-2 d-block"></i>
                                    <p className="text-muted mb-0">No countries match your search.</p>
                                  </div>
                                ) : (
                                  <div className="row">
                                    {filteredCountries.map((country) => (
                                  <div key={country.id} className="col-md-6 mb-3">
                                    <div 
                                      className={`card h-100 ${officeForm.countries?.includes(country.name) ? 'border-primary bg-primary-transparent' : 'border'}`} 
                                      style={{cursor: 'pointer', transition: 'all 0.2s ease'}} 
                                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} 
                                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                      <div className="card-body p-3">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`country-${country.id}`}
                                            checked={officeForm.countries?.includes(country.name) || false}
                                            onChange={(e) => {
                                              const currentCountries = officeForm.countries || [];
                                              if (e.target.checked) {
                                                setOfficeForm({
                                                  ...officeForm, 
                                                  countries: [...currentCountries, country.name]
                                                });
                                              } else {
                                                setOfficeForm({
                                                  ...officeForm, 
                                                  countries: currentCountries.filter(c => c !== country.name)
                                                });
                                              }
                                            }}
                                          />
                                          <label className="form-check-label w-100" htmlFor={`country-${country.id}`} style={{cursor: 'pointer'}}>
                                            <div className="d-flex align-items-center">
                                              {country.flag && (
                                                <img 
                                                  src={country.flag} 
                                                  alt={country.name}
                                                  className="me-2"
                                                  style={{width: '24px', height: '16px', objectFit: 'cover', borderRadius: '3px', border: '1px solid #dee2e6'}}
                                                  onError={(e) => e.target.style.display = 'none'}
                                                />
                                              )}
                                              <div className="flex-grow-1">
                                                <div className="fw-semibold">{country.name}</div>
                                                <small className="text-muted">
                                                  <i className="fe fe-users me-1"></i>
                                                  {candidates.filter(c => c.country === country.name).length} candidates
                                                </small>
                                              </div>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                  </div>
                                );
                              })()
                            )}
                          </div>
                        </div>
                        <small className="form-text text-muted">
                          <i className="fe fe-help-circle me-1"></i>
                          This office will be able to manage elections and voting for the selected countries
                        </small>
                      </div>
                    </form>
                  )}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={closeOfficeModal}>
                    <i className="fe fe-x me-2"></i>
                    {officeModalMode === 'view' ? 'Close' : 'Cancel'}
                  </button>
                  {officeModalMode === 'bulk' && jsonPreview && (
                    <button 
                      type="button" 
                      className="btn btn-success" 
                      onClick={(e) => handleOfficeUpdate(e, true)}
                      disabled={loading}
                    >
                      <i className="fe fe-upload me-2"></i>
                      {loading ? 'Uploading...' : `Upload ${jsonPreview.length} Offices`}
                    </button>
                  )}
                  {(officeModalMode === 'add' || officeModalMode === 'edit') && (
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      onClick={(e) => handleOfficeUpdate(e)}
                      disabled={loading}
                    >
                      <i className={`fe fe-${officeModalMode === 'add' ? 'plus' : 'save'} me-2`}></i>
                      {loading ? 'Saving...' : (officeModalMode === 'add' ? 'Add Office' : 'Update Office')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Office Delete Confirmation Modal */}
        {showOfficeDeleteModal && selectedOffice && (
          <div 
            className="modal fade show" 
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowOfficeDeleteModal(false);
              }
            }}
          >
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="fe fe-alert-triangle me-2 text-danger"></i>Confirm Delete
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setShowOfficeDeleteModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="text-center">
                    <div className="avatar avatar-lg rounded-circle bg-danger-transparent mx-auto mb-3">
                      <i className="fe fe-trash-2 fs-1 text-danger"></i>
                    </div>
                    <h6 className="mb-2">Delete Office &quot;{selectedOffice.province}&quot;?</h6>
                    <p className="text-muted mb-3">
                      Are you sure you want to delete this office? This will permanently remove:
                    </p>
                    <div className="card bg-light border-0 mb-3">
                      <div className="card-body p-3">
                        <ul className="list-unstyled mb-0 text-start">
                          <li className="mb-1">
                            <i className="fe fe-hash me-2 text-muted"></i>
                            <strong>Original ID:</strong> {selectedOffice.originalId || selectedOffice.id}
                          </li>
                          <li className="mb-1">
                            <i className="fe fe-map-pin me-2 text-muted"></i>
                            <strong>Province:</strong> {selectedOffice.province}
                          </li>
                          <li className="mb-1">
                            <i className="fe fe-users me-2 text-muted"></i>
                            <strong>Registered Voters:</strong> {selectedOffice.registered || 0}
                          </li>
                          {selectedOffice.countries && selectedOffice.countries.length > 0 && (
                            <li className="mb-1">
                              <i className="fe fe-globe me-2 text-muted"></i>
                              <strong>Associated Countries:</strong> {selectedOffice.countries.join(', ')}
                            </li>
                          )}
                          {selectedOffice.countryName && (
                            <li className="mb-1">
                              <i className="fe fe-flag me-2 text-muted"></i>
                              <strong>Country:</strong> {selectedOffice.countryName}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="alert alert-danger" role="alert">
                      <i className="fe fe-alert-triangle me-2"></i>
                      This action cannot be undone. All office data will be permanently removed from the system.
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={() => setShowOfficeDeleteModal(false)}>
                    <i className="fe fe-x me-2"></i>Cancel
                  </button>
                  <button type="button" className="btn btn-danger" onClick={deleteOfficeConfirm}>
                    <i className="fe fe-trash-2 me-2"></i>Delete Office
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Modal */}
        <ProfileModal 
          isOpen={showProfileModal}
          onClose={closeProfileModal}
          currentUser={currentUser}
          onUserUpdate={handleProfileUpdate}
        />

        {/* 2FA Modal */}
        <TwoFactorModal 
          isOpen={show2FAModal}
          onClose={close2FAModal}
        />
      </div>
    </div>
  );
};

AdminDashboard.layout = "Contentlayout";

export default withSuperAdminAuth(AdminDashboard);
