import React, { useState, } from "react";
import axios from "axios";
import "./auth.css";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createAcc = async (e) => {
    e.preventDefault(); // 🔥 IMPORTANT

    try {
      setLoading(true);

      const res = await axios.post(
        `${BACKEND_URL}/signup`,
        formData,
        { withCredentials: true }
      );

      console.log("SIGNUP SUCCESS:", res.data);
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
            Sign Up
          </h3>

          {loading && <Loader />}

          <form onSubmit={createAcc}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-purple w-100" disabled={loading}>
              Create Account
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account?
            <a href="/login" className="text-purple fw-semibold ms-1">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}