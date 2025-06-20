import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function LoginPage() {
    

    const handleLogin=(e)=>{
        e.preventDefault();


      
    }

    return (
        <div className="login-body">
            <div className="login-card">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" />

                    <button type="submit">Login</button>
                    <p className="register-link">
                        Don’t have an account? <Link to="/registration">Register</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default LoginPage;
