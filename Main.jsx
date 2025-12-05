import React, { Children } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
    Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettings from "./pages/DashboardSettings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const Main = () => {
    const loggedIn = false;

    const PrivateProfile = ({ children }) => {
        if (loggedIn) {
            return children;
        } else {
            return <Navigate to={"/login"} />;
        }
    };

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="profile" element={<DashboardProfile />} />
                    <Route path="settings" element={<DashboardSettings />} />
                </Route>
                <Route path="/user/:id" element={<UserPage />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateProfile>
                            <Profile />
                        </PrivateProfile>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default Main;

//useSearchParams
