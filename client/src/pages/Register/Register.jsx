import React, { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function RegisterPage() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', values);
            console.log("User registered:", response.data);
            alert('Successfully Registered');
            navigate('/login');
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="signup-body">
            <div className="signup-card">
                <h2>Register</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" name="name" id="name" onChange={handleChanges} />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" onChange={handleChanges} />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" onChange={handleChanges} />

                    <button type="submit">Sign Up</button>
                    <p className="login-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}


export default RegisterPage;
