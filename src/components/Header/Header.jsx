import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/register-rbs">Register RBS</Link>
            <Link to="/register-bs">Register BS</Link>
            <Link to="/testform1">Test Form1</Link>
        </nav>
    );
};

export default Header;