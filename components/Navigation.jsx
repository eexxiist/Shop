import React from "react";
import Styles from "../styles/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className={Styles.nav}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
