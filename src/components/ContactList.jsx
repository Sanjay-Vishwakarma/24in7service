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
    Menu,
    MenuItem,
    FormControl,
    Select
} from '@mui/material';
import {
    FilterList,
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

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [pagination, setPagination] = useState({
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 1
    });
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterAnchorEl, setFilterAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchContacts = async () => {
        try {
            setLoading(true);

            const response = await axiosInstance.post(
                `${API_ENDPOINTS.CONTACT_LIST}?page=${pagination.page}&size=${pagination.size}`,
                {} // body if needed
            );

            const data = response.data;
            setContacts(data.content);
            setPagination((prev) => ({
                ...prev,
                totalElements: data.totalElements,
                totalPages: data.totalPages,
            }));
            setError(null);
        } catch (err) {
            console.error("Error fetching contacts:", err);
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchContacts();
    }, [pagination.page, pagination.size]);

    const handleRefresh = () => {
        setPagination(prev => ({ ...prev, page: 0 }));
    };

    const handlePageChange = (event, newPage) => {
        setPagination(prev => ({ ...prev, page: newPage - 1 }));
    };

    const handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value);
        setPagination(prev => ({ ...prev, size: newSize, page: 0 }));
    };

    const handleFilterClick = (event) => {
        setFilterAnchorEl(event.currentTarget);
        setFilterOpen(true);
    };

    const handleFilterClose = () => {
        setFilterAnchorEl(null);
        setFilterOpen(false);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phoneNumber?.includes(searchTerm)
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
                Contact Submissions
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
                    placeholder="Search contacts..."
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
                    <Tooltip title="Filters">
                        <IconButton
                            onClick={handleFilterClick}
                            color="primary"
                            aria-controls="filter-menu"
                            aria-haspopup="true"
                            aria-expanded={filterOpen ? 'true' : undefined}
                        >
                            <FilterList />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="filter-menu"
                        anchorEl={filterAnchorEl}
                        open={filterOpen}
                        onClose={handleFilterClose}
                        MenuListProps={{
                            'aria-labelledby': 'filter-button',
                        }}
                    >
                        <MenuItem onClick={handleFilterClose}>Filter by Date</MenuItem>
                        <MenuItem onClick={handleFilterClose}>Filter by Device</MenuItem>
                        <MenuItem onClick={handleFilterClose}>Filter by Location</MenuItem>
                    </Menu>
                </Box>
            </Box>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
                    <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                        Error fetching contacts: {error}
                    </Alert>
                </Snackbar>
            ) : (
                <>
                    <TableContainer component={Paper} elevation={3}>
                        <Table sx={{ minWidth: 650 }} aria-label="contacts table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Contact Info</TableCell>
                                    <TableCell>Message</TableCell>
                                    <TableCell>Device</TableCell>
                                    <TableCell>Location</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredContacts.length > 0 ? (
                                    filteredContacts.map((contact, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Typography fontWeight="medium">{contact.fullName}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography>{contact.email}</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {contact.phoneNumber}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ maxWidth: 200 }}>
                                                    {contact.description}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    {getDeviceIcon(contact.deviceType)}
                                                    <Typography variant="body2">
                                                        {contact.operatingSystem}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography variant="body2">
                                                        {contact.city !== 'Unknown' ? `${contact.city}, ${contact.region}` : 'Location unknown'}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {contact.ipAddress}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">
                                            No contacts found
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
                            Total: {pagination.totalElements} contacts
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

export default ContactList;