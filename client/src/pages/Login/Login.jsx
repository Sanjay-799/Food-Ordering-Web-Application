import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', loginData);

            if (response.data.success) {
                alert(response.data.message);
                navigate('/');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert("Login failed. Check your email/password.");
        }
    };

    return (
        <div className="login-body">
            <div className="login-card">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" onChange={handleChange} value={loginData.email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" onChange={handleChange}
                        value={loginData.password} />

                    <button type="submit">Login</button>
                    <p className="register-link">
                        Don’t have an account? <Link to="/register">Register</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default LoginPage;
