// src/dashboard/DashboardNavbar.js
import { Navbar, Container, Button } from 'react-bootstrap';
import { Menu, Notifications, AccountCircle } from '@mui/icons-material';

function DashboardNavbar({ toggleSidebar }) {
    return (
        <Navbar bg="white" expand="lg" className="dashboard-navbar shadow-sm">
            <Container fluid>
                <Button variant="link" onClick={toggleSidebar} className="me-2">
                    <Menu />
                </Button>
                <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
                <div className="ms-auto d-flex">
                    <Button variant="link" className="text-dark">
                        <Notifications />
                    </Button>
                    <Button variant="link" className="text-dark">
                        <AccountCircle />
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default DashboardNavbar;