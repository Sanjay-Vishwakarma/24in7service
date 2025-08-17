// src/dashboard/DashboardSidebar.js
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import {
    Dashboard,
    People,
    Work,
    Payments,
    Settings,
    ExitToApp
} from '@mui/icons-material';

function DashboardSidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`dashboard-sidebar ${collapsed ? 'collapsed' : ''}`}>
            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <Nav.Link href="/dashboard" className="sidebar-link">
                    <Dashboard className="me-2" />
                    {!collapsed && 'Dashboard'}
                </Nav.Link>
                <Nav.Link href="/dashboard/users" className="sidebar-link">
                    <People className="me-2" />
                    {!collapsed && 'Users'}
                </Nav.Link>
                <Nav.Link href="/dashboard/jobs" className="sidebar-link">
                    <Work className="me-2" />
                    {!collapsed && 'Jobs'}
                </Nav.Link>
                <Nav.Link href="/dashboard/payments" className="sidebar-link">
                    <Payments className="me-2" />
                    {!collapsed && 'Payments'}
                </Nav.Link>
                <Nav.Link href="/dashboard/settings" className="sidebar-link">
                    <Settings className="me-2" />
                    {!collapsed && 'Settings'}
                </Nav.Link>
                <div className="sidebar-divider" />
                <Nav.Link href="/logout" className="sidebar-link">
                    <ExitToApp className="me-2" />
                    {!collapsed && 'Logout'}
                </Nav.Link>
            </Nav>
            <div
                className="sidebar-toggle"
                onClick={toggleSidebar}
            >
                {collapsed ? '>' : '<'}
            </div>
        </div>
    );
}

export default DashboardSidebar;