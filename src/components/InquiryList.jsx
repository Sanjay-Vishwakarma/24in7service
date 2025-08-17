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
import { Computer, PhoneAndroid, TabletAndroid, HelpOutline, Search, Refresh } from '@mui/icons-material';
import axiosInstance from '../config/axiosInstance';
import { API_ENDPOINTS } from '../config/apiEndpoints';

function InquiryList() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 1
  });

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `${API_ENDPOINTS.INQUIRY_LIST}?page=${pagination.page}&size=${pagination.size}`,
        {} // body if needed
      );

      const data = response.data;
      setInquiries(data.content);
      setPagination(prev => ({
        ...prev,
        totalElements: data.totalElements,
        totalPages: data.totalPages
      }));
      setError(null);
    } catch (err) {
      console.error('Error fetching inquiries:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [pagination.page, pagination.size]);

  const handlePageChange = (event, newPage) => {
    setPagination(prev => ({ ...prev, page: newPage - 1 }));
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination(prev => ({ ...prev, size: newSize, page: 0 }));
  };

  const getDeviceIcon = (deviceType) => {
    switch (deviceType) {
      case 'Computer':
        return <Computer fontSize="small" />;
      case 'Phone':
        return <PhoneAndroid fontSize="small" />;
      case 'Tablet':
        return <TabletAndroid fontSize="small" />;
      default:
        return <HelpOutline fontSize="small" />;
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  const filteredInquiries = inquiries.filter(inquiry =>
    inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.phone?.includes(searchTerm) ||
    inquiry.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Inquiry Submissions
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <TextField
          size="small"
          placeholder="Search inquiries..."
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
          <Refresh onClick={fetchInquiries} sx={{ cursor: 'pointer', color: 'primary.main' }} />
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
                  <TableCell>Name</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Service Details</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInquiries.length > 0 ? (
                  filteredInquiries.map((inq, index) => (
                    <TableRow key={index}>
                      <TableCell>{inq.name}</TableCell>
                      <TableCell>
                        <Typography>{inq.email}</Typography>
                        <Typography variant="body2" color="text.secondary">{inq.phone}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{inq.maidServiceType} ({inq.workHours})</Typography>
                        <Typography variant="body2">{inq.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {getDeviceIcon(inq.deviceType)}
                          <Typography variant="body2">{inq.operatingSystem}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {inq.city || inq.location || 'Unknown'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">{inq.ipAddress}</Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">No inquiries found</TableCell>
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

export default InquiryList;
