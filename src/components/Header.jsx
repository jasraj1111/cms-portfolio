import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Check for JWT token

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the JWT token
        navigate('/login'); // Redirect to the login page
    };

    return (
        <header className="header">
             <h1>Portfolio Manager</h1>
            <div className="container">
               
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/add-project">Add Project</Link>
                    {token && <Link to="/dashboard">Dashboard</Link>} {/* Show Dashboard if logged in */}
                    {token && <button onClick={handleLogout}>Logout</button>} {/* Show Logout if logged in */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
