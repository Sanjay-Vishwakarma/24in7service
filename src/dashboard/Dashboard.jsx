import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContactList from '../components/ContactList';
import FeedBackList from '../components/FeedBackList';
import InquiryList from '../components/InquiryList';
import JobApplicationList from '../components/JobApplicationList';

function Dashboard() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // remove token
        navigate("/"); // redirect to login page
    };

    return (
        <Container fluid className="dashboard-main">
            {/* Header with Logout */}
            <div className="dashboard-header d-flex flex-column flex-md-row justify-content-between align-items-center py-3 px-3">
                <h4 className="mb-2 mb-md-0 text-center text-md-start">Admin Dashboard</h4>
                <Button
                    variant="outline-danger"
                    className="logout-btn w-100 w-md-auto"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>

            {/* Tabs Section */}
            <Box sx={{ width: '100%', mt: 3 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="dashboard tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Contacts" />
                    <Tab label="Feedback" />
                    <Tab label="Inquiries" />
                    <Tab label="Job Applications" />
                </Tabs>

                <Box sx={{ mt: 3 }}>
                    {activeTab === 0 && <ContactList />}
                    {activeTab === 1 && <FeedBackList />}
                    {activeTab === 2 && <InquiryList />}
                    {activeTab === 3 && <JobApplicationList />}
                </Box>
            </Box>
        </Container>
    );
}

export default Dashboard;
