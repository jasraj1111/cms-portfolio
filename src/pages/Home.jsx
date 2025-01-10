import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => (
    <section id="home" className="home">
        <div className="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, skills, and achievements.</p>
            <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary">View Projects</Link> {/* Use Link for routing */}
                <Link to="/contact" className="btn btn-secondary">Contact Me</Link> {/* Update for contact */}
            </div>
        </div>
    </section>
);

export default Home;
