import React from "react";
import './Register.css';
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <div className="signup-body">
            <div className="signup-card">
                <h2>Register</h2>
                <form className="signup-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" name="name" id="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" />

                    <button type="submit">Sign Up</button>
                    <p className="login-link">
                        Already have an account? <Link to="/">Login</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
