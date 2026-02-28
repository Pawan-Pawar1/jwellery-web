import React, { useState, } from "react";
import axios from "axios";
import "./auth.css";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Login() {
  const [loading , setLoading]=useState(false);
  const [formData, setFormData]=useState({
    email: "",
    password: "",
  })

  const navigate=useNavigate();
 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const findAcc = async (e) => {
    e.preventDefault(); // 🔥 IMPORTANT

    try {
      setLoading(true);

      const res = await axios.post(
        `${BACKEND_URL}/login`,
        formData,
        { withCredentials: true }
      );

      
    } catch (err) {
      console.log("FETCH ERR", err.response?.data || err);
    } finally {
      setLoading(false);
      navigate('/')
    }
  };
  
  return (

   
    <div className="min-vh-100 d-flex justify-content-center align-items-start bg-light">
      <div className="card auth-card shadow">
        <div className="card-body p-4">
          <h3 className="text-center text-purple fw-bold mb-4">
            Login
          </h3>
 {loading && <Loader />}
          <form onSubmit={findAcc}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-purple w-100">
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account?
            <a href="/signup" className="text-purple fw-semibold ms-1">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
