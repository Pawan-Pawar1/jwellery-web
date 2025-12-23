import React, { use } from "react";
import {Link,Outlet,useLocation } from "react-router-dom"
export default function Rings(){
    const location =useLocation();
    const isBracelet=location.pathname==="/bracelets";
    return(
        
        <>
         {isBracelet&&(<Link to="file">
         <button className="btn btn-primary">add photo</button>
         
         </Link>)}
         <Outlet/>
        </>
    )
}