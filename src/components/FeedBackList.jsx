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
  useMediaQuery,
  IconButton,
  Tooltip,
  CircularProgress,
  Alert,
  Snackbar,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import {
  Search,
  Refresh,
  Computer,
  PhoneAndroid,
  TabletAndroid,
  HelpOutline
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '../config/axiosInstance';
import { API_ENDPOINTS } from '../config/apiEndpoints';

function FeedBackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 1,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.post(
        `${API_ENDPOINTS.FEEDBACK_LIST}?page=${pagination.page}&size=${pagination.size}`,
        {}
      );

      const data = response.data;
      setFeedbacks(data.content);
      setPagination((prev) => ({
        ...prev,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
      }));
      setError(null);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [pagination.page, pagination.size]);

  const handleRefresh = () => {
    setPagination((prev) => ({ ...prev, page: 0 }));
  };

  const handlePageChange = (event, newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage - 1 }));
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination((prev) => ({ ...prev, size: newSize, page: 0 }));
  };

  const filteredFeedbacks = feedbacks.filter((fb) =>
    fb.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fb.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fb.feedbackMessage?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        User Feedback
      </Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2
      }}>
        <TextField
          size="small"
          placeholder="Search feedback..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1 }} />
          }}
          sx={{ width: isMobile ? '100%' : 300 }}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormControl size="small">
            <Select
              value={pagination.size}
              onChange={handleSizeChange}
              sx={{ minWidth: 120 }}
            >
              <MenuItem value={5}>5 per page</MenuItem>
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={20}>20 per page</MenuItem>
              <MenuItem value={50}>50 per page</MenuItem>
            </Select>
          </FormControl>

          <Tooltip title="Refresh">
            <IconButton onClick={handleRefresh} color="primary">
              <Refresh />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
          <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
            Error fetching feedbacks: {error}
          </Alert>
        </Snackbar>
      ) : (
        <>
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 650 }} aria-label="feedback table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Feedback</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFeedbacks.length > 0 ? (
                  filteredFeedbacks.map((fb, index) => (
                    <TableRow key={index}>
                      <TableCell>{fb.name}</TableCell>
                      <TableCell>{fb.email}</TableCell>
                      <TableCell>{fb.rating}</TableCell>
                      <TableCell sx={{ maxWidth: 250 }}>
                        <Typography variant="body2">{fb.feedbackMessage}</Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {getDeviceIcon(fb.deviceType)}
                          <Typography variant="body2">{fb.operatingSystem}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {fb.city ? `${fb.city}, ${fb.region}, ${fb.country}` : 'Unknown'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {fb.ipAddress}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No feedback found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
            gap: 2,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <Typography variant="body2" color="text.secondary">
              Total: {pagination.totalElements} feedbacks
            </Typography>
            <Pagination
              count={pagination.totalPages}
              page={pagination.page + 1}
              onChange={handlePageChange}
              color="primary"
              showFirstButton
              showLastButton
              siblingCount={isMobile ? 0 : 1}
              boundaryCount={isMobile ? 1 : 2}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default FeedBackList;
