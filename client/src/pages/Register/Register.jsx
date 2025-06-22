import React, { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {

    const [registerDetails, setRegisterDetails] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function handleInput(e) {
       
        let value = e.target.value;
        let fieldname = e.target.name;
        setRegisterDetails(prev => ({
            ...prev,
            [fieldname]: value
        }))
    }

    function handleSubmit(e) {
         e.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerDetails)
        })
        alert('Successfully Registered');
        navigate('/login');

    }


    return (
        <div className="signup-body">
            <div className="signup-card">
                <h2>Register</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" name="name" id="name" onChange={handleInput} value={registerDetails.name} />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" onChange={handleInput} value={registerDetails.email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" onChange={handleInput} value={registerDetails.password} />

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
