import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  TextField,
  Pagination,
  CircularProgress,
  Alert,
  Snackbar,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import { Search, Refresh } from '@mui/icons-material';
import axiosInstance from '../config/axiosInstance';
import { API_ENDPOINTS } from '../config/apiEndpoints';

function JobApplicationList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 1
  });

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `${API_ENDPOINTS.JOB_APPLICATION_LIST}?page=${pagination.page}&size=${pagination.size}`,
        {}
      );

      const data = response.data;
      setApplications(data.content);
      setPagination(prev => ({
        ...prev,
        totalElements: data.totalElements,
        totalPages: data.totalPages
      }));
      setError(null);
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [pagination.page, pagination.size]);

  const handlePageChange = (event, newPage) => {
    setPagination(prev => ({ ...prev, page: newPage - 1 }));
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination(prev => ({ ...prev, size: newSize, page: 0 }));
  };

  const handleCloseError = () => {
    setError(null);
  };

  const filteredApplications = applications.filter(app =>
    app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.mobile?.includes(searchTerm) ||
    app.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.workLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Job Applications
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <TextField
          size="small"
          placeholder="Search applications..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{ startAdornment: <Search sx={{ mr: 1 }} /> }}
          sx={{ width: 300 }}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormControl size="small">
            <Select value={pagination.size} onChange={handleSizeChange}>
              <MenuItem value={5}>5 per page</MenuItem>
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={20}>20 per page</MenuItem>
            </Select>
          </FormControl>
          <Refresh onClick={fetchApplications} sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Box>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
          <Alert onClose={handleCloseError} severity="error">{error}</Alert>
        </Snackbar>
      ) : (
        <>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Profile</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Category & Experience</TableCell>
                  <TableCell>Work Location</TableCell>
                  <TableCell>Other Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((app, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img
                          src={app.profileImageUrl}
                          alt={app.fullName}
                          style={{ width: 60, height: 60, borderRadius: '50%' }}
                        />
                      </TableCell>
                      <TableCell>{app.fullName}</TableCell>
                      <TableCell>
                        <Typography>{app.mobile}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{app.category}</Typography>
                        <Typography variant="body2">Experience: {app.experience} yrs</Typography>
                        <Typography variant="body2">Salary: ₹{app.expectedSalary}</Typography>
                      </TableCell>
                      <TableCell>{app.workLocation}</TableCell>
                      <TableCell>
                        <Typography variant="body2">Marital: {app.maritalStatus}</Typography>
                        <Typography variant="body2">Age: {app.age}</Typography>
                        <Typography variant="body2">Gender: {app.gender}</Typography>
                        <Typography variant="body2">Passport: {app.passport}</Typography>
                        <Typography variant="body2">Education: {app.education}</Typography>
                        <Typography variant="body2">Languages: {app.languages.join(', ')}</Typography>
                        <Typography variant="body2">Working Hours: {app.workingHours}</Typography>
                        <Typography variant="body2">Address: {app.address}</Typography>
                        <Typography variant="body2">Aadhar: <a href={app.aadharCardUrl} target="_blank" rel="noreferrer">View</a></Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">No applications found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              count={pagination.totalPages}
              page={pagination.page + 1}
              onChange={handlePageChange}
              color="primary"
              showFirstButton
              showLastButton
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default JobApplicationList;
