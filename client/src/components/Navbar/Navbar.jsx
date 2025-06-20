import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarPage() {
    return (
        <nav className="navbar navbar-expand-lg pt-3 pb-3 bg-light shadow custom-navbar">
            <div className="container-fluid container">
                <a className="navbar-brand" href="#">Pizza Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/login' className="nav-link" aria-current="page" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarPage;
