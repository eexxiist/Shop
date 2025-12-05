import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>

            <nav className={styles.nav}>
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
            </nav>

            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
