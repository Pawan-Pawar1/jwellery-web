import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import { AuthContext } from "../context/AuthContext";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch gold/silver price
  const fetchPrice = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/price`,{
        withCredentials:true,
      });
      setPrice(res.data);
    } catch (err) {
      console.error("Price fetch failed", err);
    }
  };

  // 🔹 Fetch product
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/products/${id}`,{
          withCredentials: true ,
      });
      setProduct(res.data);
    } catch (err) {
      console.error("Product fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchPrice();
  }, [id]);

  // 🔹 Add to cart (safe)
  const addToCart = async (productId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `${BACKEND_URL}/cart/add`,
        {
          userId: user._id,
          productId,
        },
        { withCredentials: true }
      );
      alert("Added to cart");
    } catch (err) {
      console.error(err);
      alert("Add to cart failed");
    }
  };

  // 🔹 Delete product (admin)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await axios.delete(`${BACKEND_URL}/products/${id}`, {
        withCredentials: true,
      });
      navigate("/bracelets"); // go to list page
    } catch (err) {
      console.error(err);
      alert("Deleting failed");
    }
  };

  if (loading || !product) return <Loader />;

  // ✅ SAFE PRICE CALCULATION (NO NaN)
  const calculatedPrice =
    price && product
      ? product.material === "gold"
        ? product.weight * price.gold
        : product.weight * price.silver
      : 0;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* IMAGE */}
        <div className="col-md-8 col-sm-12">
          <img
            src={product.images?.url}
            alt={product.name}
            style={{ height: "80%", width: "80%" }}
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-4 col-sm-12">
          <h3>{product.name}</h3>

          <p>
            <b>Price:</b> ₹{calculatedPrice}
          </p>

          <p>
            <b>Weight:</b> {product.weight} g
          </p>

          <p>
            <b>Material:</b> {product.material}
          </p>

          <p>
            <b>Description:</b> {product.description}
          </p>

          {/* ADMIN ONLY */}
          {user?.role === "admin" && (
            <>
              <button
                className="btn btn-warning mt-3"
                onClick={() => navigate(`/product/${product._id}/edit`)}
              >
                Edit Product
              </button>

              <button
                className="btn btn-danger mt-3"
                style={{ marginLeft: "1rem" }}
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </>
          )}

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(product._id)}
            className="btn mt-3 btn-outline-success"
            style={{ marginLeft: "1rem" }}
          >
            Add to Cart <i className="fa-solid fa-cart-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}