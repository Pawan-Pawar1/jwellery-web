import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function BraceletDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bracelet, setBracelet] = useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const fetchBracelet = async () => {
      try {
       
        const res = await axios.get(`${BACKEND_URL}/bracelets/${id}`);
        setBracelet(res.data);
      } catch (err) {
        console.error(err);
      }finally{
        setLoading(false);
      }
    };
    fetchBracelet();
  }, [id]);

  if (loading){ 
    return (

     <Loader/>)
    };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-sm-12">
        <img
          src={bracelet.images?.url}
          className="card-img-top"
          alt={bracelet.name}
        />
        </div>
        <div className="col-md-4 col-sm-12">
          <h3>{bracelet.name}</h3>
          <p><b>Price:</b> ₹{bracelet.price}</p>
          <p><b>Weight:</b> {bracelet.weight} g</p>
          <p><b>Description:</b> {bracelet.description}</p>

          
            <button
              className="btn btn-warning mt-3"
              onClick={() => navigate(`/bracelets/edit/${bracelet._id}`)}
            >
              Edit Bracelet
            </button>
        
        </div>
      </div>
    </div>
  );
}
