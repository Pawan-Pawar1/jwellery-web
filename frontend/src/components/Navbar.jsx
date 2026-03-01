import React,{useContext, useState} from "react";
import "./Navbar.css"
import {Link, useNavigate} from "react-router-dom"
import AuthContainer from "./AuthContainer";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import ProfilePopup from "./ProfilePopup";
export default function Navbar(){
 const { user, loading } = useContext(AuthContext);

  const[open, setOpen]=useState(false);
  const[authClick, setAuthClick]=useState(false);
  
  const firstLetter =  user?.name ? user.name.charAt(0).toUpperCase() : "";
  function menu(){
    setOpen(!open);
  }
const navigate=useNavigate();
 
 

    return(
          <>
{/* navbar if mobile screen */}
       <div className="container mobile-nav">
        <div className="row">
            <div className="col-1 mt-1 " onClick={menu} >
              {open?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
                    {/* Mobile Dropdown Menu (Render when open is true) */}
      {open && (
        <div className="mobile-menu-page animate">
         
          <ul>
            <li><i className="fa-solid fa-xmark"></i></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/bracelets">Bracelets & Bangles</Link></li>
            <li><Link to="necklace" >Necklace</Link></li>
            <li><Link  to="earings">earings</Link></li>
            <li><Link to="rings">rings</Link></li>
          </ul>
          
        </div>
        
      )}

                
            </div>
            <div className="col-7 mt-3 ">
              <img 
                src="/logo/logo.png"
               alt="Logo" 
                className=" logo" />
            </div>
       
  {user  ? (
    <div className="avatar-circle" onClick={()=>navigate("/profile")}>
      {firstLetter}
      
    </div>
  ) : (
     <div className="col-2" onClick={() => setAuthClick(prev => !prev)}>
    <i className="fa-solid fa-circle-user login-icon"></i></div>
  )}

        </div>
       </div>


{/* navbar for laptop and desktop screen */}

      <div className="container text-center mt-4 nav-container">
  <div className="row laptop-nav">
    <div className="col-8 ">
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav " >
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bracelets">Bracelets & Bangles</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/necklace">Necklace</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/earings">Earings</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/rings">rings</Link>
        </li>
        
    
            
      </ul>

      
      
    </div>
  </div>
</nav> 

  </div>  
  <div className="col-2 ">
           <img 
      src="/logo/logo.png"
       alt="Logo" 
        className="mt-4 logo" />
        
  </div>
  {user  ? (
    <div className="avatar-circle" onClick={()=>navigate("/profile")}>
      {firstLetter}
      
    </div>
  ) : (
     <div className="col-2" onClick={() => setAuthClick(prev => !prev)}>
    <i className="fa-solid fa-circle-user login-icon"></i></div>
  )}
    
  </div>
</div>

{/* navbar if tab screeen */}
 <div className="container text-center mt-4 tablet-nav">
  <div className="row">
    <div className="col-9 ">
        <nav className="navbar navbar-expand-md ">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
       <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bracelets">Bracelets & Bangles</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/necklace">Necklace</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/earings">Earings</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/rings">rings</Link>
        </li> 
           
            
      </ul>

      
      
    </div>
  </div>
  
</nav> 

  </div>  
  <div className="col-2 ">
    
           <img 
      src="/logo/logo.png"
       alt="Logo" 
        className="mt-3 logo" />
  </div>
   {user  ? (
    <div className="avatar-circle" onClick={()=>navigate("/profile")}>
      {firstLetter}
      
    </div>
  ) : (
     <div className="col-2" onClick={() => setAuthClick(prev => !prev)}>
    <i className="fa-solid fa-circle-user login-icon"></i></div>
  )}
  
    
  </div>
</div>




<AnimatePresence>
{
authClick && 
   <motion.div
      className="auth-popup"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 12 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2,ease: "easeOut" }}
    >
      <AuthContainer />
    </motion.div>
}
</AnimatePresence>
    </>               
    )
}