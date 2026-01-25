import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../loader/Loader";

export default function BraceletsFile() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  // 🔥 FORM STATE (IMPORTANT)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    weight: "",
    category: "",
    material: "",
    description: "",
    isTrending: false,
    isNew: false,
    isBestSeller: false,
    image: null,
  });

  // 🔥 FETCH PRODUCT
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/products/${id}`);
        const data = res.data;

        setFormData({
          name: data.name || "",
          price: data.price || "",
          weight: data.weight || "",
          category: data.category || "",
          material: data.material || "",
          description: data.description || "",
          isTrending: data.isTrending || false,
          isNew: data.isNew || false,
          isBestSeller: data.isBestSeller || false,
          image: null, // cannot prefill file input
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // 🔥 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  // 🔥 SUBMIT EDIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    try {
      setLoading(true);
      await axios.put(`${BACKEND_URL}/products/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product updated successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <form
      className="container mt-4"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* NAME */}
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* CATEGORY */}
      <div className="mb-3">
        <select
          name="category"
          className="form-select"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="ring">Ring</option>
          <option value="bracelet">Bracelet</option>
          <option value="earring">Earring</option>
          <option value="necklace">Necklace</option>
        </select>
      </div>

      {/* CHECKBOXES */}
      <div className="mb-3">
        <label className="me-4">
          <input
            type="checkbox"
            name="isTrending"
            checked={formData.isTrending}
            onChange={handleChange}
          />{" "}
          Trending
        </label>

        <label className="me-4">
          <input
            type="checkbox"
            name="isNew"
            checked={formData.isNew}
            onChange={handleChange}
          />{" "}
          New Arrival
        </label>

        <label>
          <input
            type="checkbox"
            name="isBestSeller"
            checked={formData.isBestSeller}
            onChange={handleChange}
          />{" "}
          Best Seller
        </label>
      </div>

      {/* PRICE */}
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      {/* WEIGHT */}
      <div className="mb-3">
        <label className="form-label">Weight</label>
        <input
          type="number"
          name="weight"
          className="form-control"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </div>

      {/* MATERIAL */}
      <div className="mb-3">
        <select
          name="material"
          className="form-select"
          value={formData.material}
          onChange={handleChange}
          required
        >
          <option value="">Select material</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>
      </div>

      {/* IMAGE */}
      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input
          type="file"
          name="image"
          className="form-control"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {/* DESCRIPTION */}
      <div className="mb-3">
        <textarea
          className="form-control"
          name="description"
          placeholder="Product description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Edit Product
      </button>
    </form>
  );
}
