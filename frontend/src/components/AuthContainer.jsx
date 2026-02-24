import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthContainer.css";

export default function AuthContainer(){
const navigate=useNavigate();

    return(
        <>
           <div className="authContainer">
            <h5>your account</h5>
            <p>access your account</p>
            <button type="button" className="btn  loginBtn" onClick={()=>navigate('/login')}>login</button>
            <button type="button" className="btn  signupBtn" onClick={()=>navigate('/signup')}>signup</button>
           </div>
        </>
    )
}