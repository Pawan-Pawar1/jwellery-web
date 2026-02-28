import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Showpage.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ShowPage({ products = [] }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/price`,{
          withCredentials : true,
        });
        setPrice(res.data);
      } catch (err) {
        console.error("Price fetch error", err);
      }
    };
    fetchPrice();
  }, []);

  if (!products.length) {
    return <p className="text-center mt-5">No listings found</p>;
  }

  return (
    <div className="container mt-5">
  <div className="product-grid">
    {products.map((product) => (
      <div className="product-card" key={product._id}>
        <div className="card h-100 shadow-sm">
          <img
            src={product.images?.url}
            className="card-img-top"
            alt={product.name}
          />

          <div className="card-body d-flex flex-column text-center">
            <p className="card-text mb-1">
              {product.name.slice(0, 12)}...
            </p>

            <p className="card-text mb-2">
              ₹{" "}
              {product.material === "gold"
                ? product.weight * price?.gold
                : product.weight * price?.silver}
            </p>

            <Link
              to={`/product/${product._id}`}
              className="btn view-detail mt-auto"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}