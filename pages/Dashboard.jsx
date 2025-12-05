import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <h1>Dashboard</h1>
            <nav>
                <Link to="profile">Profile</Link>

                <Link to="settings">Settings</Link>

                <Outlet />
            </nav>
        </div>
    );
};

export default Dashboard;
