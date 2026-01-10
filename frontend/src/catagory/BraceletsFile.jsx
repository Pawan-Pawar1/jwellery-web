import React,{useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom"

import Loader from "../loader/Loader";
export default function BraceletsFile() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      setLoading(true);   
      const res = await axios.post(
        `${BACKEND_URL}/bracelets/file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data);
      e.target.reset();
          navigate("/bracelets");

    } catch (error) {
      console.error("Upload error:", error);
    } finally {
    setLoading(false);            // 🔥 stop loader
  }
  };

  if (loading) {
  return (
         <Loader />
  );
}
  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="container mt-4"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name of the product
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price of the product
          </label>
          <input
            type="number"
            name="price"
            className="form-control"
            id="price"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight of the product
          </label>
          <input
            type="number"
            name="weight"
            className="form-control"
            id="weight"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="material" className="form-label">
            Material of the product
          </label>
          <input
            type="text"
            name="material"
            className="form-control"
            id="material"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload product image
          </label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="image"
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
