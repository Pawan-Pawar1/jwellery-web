import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading,setLoading]=useState(true);


const  handleDelete= async(id)=>{
    if (!window.confirm("Are you sure you want to delete?")) return;
       try{
        await axios.delete(`${BACKEND_URL}/products/${id}`);
         navigate(`/bracelets/${id}`); 
       }catch(err){
        console.log(err);
        alert("deleting failed");
       }
}


  useEffect(() => {
    const fetchProduct = async () => {
      try {
       
        const res = await axios.get(`${BACKEND_URL}/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }finally{
        setLoading(false);
      }
    };
    fetchProduct();
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
          src={product.images?.url}
          style={{"height":"80%", "width":"80%"}}
          alt={product.name}
        />
        </div>
        <div className="col-md-4 col-sm-12">
          <h3>{product.name}</h3>
          <p><b>Price:</b> ₹{product.price}</p>
          <p><b>Weight:</b> {product.weight} g</p>
          <p><b>Material:</b> {product.material}</p>
          <p><b>Description:</b> {product.description}</p>

          
            <button
              className="btn btn-warning mt-3"
              onClick={() => navigate(`/product/${product._id}/edit`)}
            >
              Edit Bracelet
            </button>

            <button className="btn btn-danger mt-3"
            style={{"marginLeft":"2rem"}}
             onClick={() => handleDelete(product._id)}>
  Delete
</button>
        
        </div>
      </div>
    </div>
  );
}
