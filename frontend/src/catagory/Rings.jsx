import React, { useState, useEffect,useContext } from "react";
import axios from "axios";

import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import ShowPage from "./Showpage.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Rings() {
  const [bestSeller, setBestSeller] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [trending, setTrending]=useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {user}=useContext(AuthContext);
  const fetchRing = async () => {
    try {
      setLoading(true);

      const [bestRes, newRes,trendRes] = await Promise.all([
        axios.get(
          `${BACKEND_URL}/products?category=ring&isBestSeller=true`,
           { withCredentials: true }
        ),
        axios.get(
          `${BACKEND_URL}/products?category=ring&isNew=true`,
           { withCredentials: true }
        ),
        axios.get(
          `${BACKEND_URL}/products?category=ring&isTrending=true`,
           { withCredentials: true }
        )
      ]);

      setBestSeller(bestRes.data);
      setNewArrivals(newRes.data);
      setTrending(trendRes.data);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRing();
  }, []);

  if (loading) return <Loader />;

  return (
    <>

        {/* Trending */}
        <h3 className="mt-4 heading">Trending</h3>

        <ShowPage products={trending}  />
 <hr />

      {/* LATEST */}
      <h3 className="mt-4 heading">New Arrivals</h3>

      
            <ShowPage  products={newArrivals}  />
  
       <hr />

      {/* BEST SELLERS */}
      <h3 className="mt-4 heading">Best Sellers</h3>

                 <ShowPage    products={bestSeller}  />
<hr />
      {/* ADD BUTTON */}
   {user?.role=="admin" && (
         <div className="braceletBtn mt-4 text-center">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/product/addFile")}
        >
          Add Product
        </button>
      </div>
     )}
    </>
  );
}
