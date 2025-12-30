import React,{useState,useEffect} from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import {Link,Outlet,useLocation, useNavigate } from "react-router-dom"
export default function Bracelets(){
    const [data, setData]=useState([])
    const navigate=useNavigate();
    const location =useLocation();
    const isBracelet=location.pathname==="/bracelets";
    const fetchBracelets= async ()=>{
       try{ const res = await axios.get(`${BACKEND_URL}/bracelets`)
    console.log(res.data);
    setData(res.data);
       }catch(err){
        console.error(err)
       }
    }
    useEffect(() => {
  fetchBracelets();
}, []);
    return(
        
        <>
        {data.map((item)=>{
            return(
            <div key={item._id}>
                <img src={item.images?.url} alt="braceletImg" />
                <h3>{item.name}</h3>
                <h4>{item._id}</h4>
            </div>
        )})}
          
          <button onClick={() => navigate("/bracelets/addBracelets")} className="btn btn-primary">Add Photo</button>
       
         
        </>
    )
}