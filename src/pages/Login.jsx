import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ email, pass })
        if (email.toLowerCase() === "admin@aa.com" && pass.toLowerCase() === "admin") {
            sessionStorage.setItem("user", true)
            navigate("/dashboard")
        } else {
            alert("Use email as 'admin@aa.com', password as 'admin'")
        }
    }
    return (
        <div class="loginDiv">
            <div class="loginCard">
                <div class="header">
                    <span class="headerSpan"></span>
                    <h1 class="headerTitle">MY PORTFOLIO WEBPAGE</h1>
                </div>
                <div class="subHeader">
                    <h3>SIGN IN</h3>
                    <p>Use email as 'admin@aa.com', password as 'admin'</p>
                </div>
                <form onSubmit={handleSubmit} class="form">
                    <div class="formGroup">
                        <label class="label">Email</label>
                        <input class="input" type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required autofocus />
                    </div>
                    <div class="formGroup">
                        <label class="label">Password</label>
                        <input class="input" type="password" 
                         value={pass}
                         onChange={(e)=>setPass(e.target.value)}placeholder="Enter your password" required />
                    </div>
                    <button type="submit" class="button">Sign In</button>
                    <p class="resetLink">
                        <span class="resetText">Forgot your password?</span>
                        <a href="#">Reset Password</a>
                    </p>
                </form>
            </div>
        </div>
    );
};


export default Login