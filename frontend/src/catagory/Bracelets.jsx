import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Bracelets.css"
import Loader from "../loader/Loader";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import {Link,Outlet,useLocation, useNavigate } from "react-router-dom"
export default function Bracelets(){
    const [data, setData]=useState([]);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
    const location =useLocation();
    const isBracelet=location.pathname==="/bracelets";
    const fetchBracelets= async ()=>{
       try{
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/products`)
    console.log(res.data);
    setData(res.data);
       }catch(err){
        console.error(err)
       }finally{
        setLoading(false);
       }
    }
    useEffect(() => {
  fetchBracelets();
}, []);


if(loading){
  return(
    <Loader />
  )
}






    return(
        
        <>
        <h3>latest</h3>

        <h3>trending</h3>









        <div className="container-latest">
  <div className="row">
              <h3 className=" mt-3">Best sellers</h3>

         {data.map(item => (
      <div key={item._id} 
      className="col-md-12 col-sm-12 col-lg-12 mt-1 p-0 imp-card"
      onClick={()=>
        navigate(`/bracelets/${item._id}`)
      }
      style={{cursor:"pointer"}}
      >
        <div className="card bracelet-card">
    <img
      src={item.images?.url}
      alt={item.name}
      className="bracelet-img"
    />

    <div className="card-body ">
      <h5>{item.name}</h5>
      <p> ₹{item.price} | {item.weight}g</p>
    </div>
  </div>
      </div>
    ))}
          </div>
         <div className=" col-md-12 col-sm-12 col-lg-12 braceletBtn mt-4">
    <button
      className="btn btn-primary"
      onClick={() => navigate("/bracelets/addFile")}
    >
      Add Photo
    </button>
  </div>
       </div>
         
        </>
    )
}