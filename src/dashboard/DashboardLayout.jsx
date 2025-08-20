// src/dashboard/DashboardLayout.js
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <DashboardNavbar />
            <div className="dashboard-container">
                <DashboardSidebar />
                <main className="dashboard-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;