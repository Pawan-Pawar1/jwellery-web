import React,{useState} from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar(){

  const[open, setOpen]=useState(false);
  function menu(){
    setOpen(!open);
  }
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
            <li><Link to="/"><i className="fa-solid fa-xmark"></i></Link></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/bracelets">Bracelets & Bangles</Link></li>
            <li><Link to="necklace" >Necklace</Link></li>
            <li><Link  to="earings">earings</Link></li>
            <li><Link to="rings">rings</Link></li>
          </ul>
          
        </div>
        
      )}

                
            </div>
            <div className="col-11 mt-3 ">
              <img 
                src="logo.png"
               alt="Logo" 
                className=" logo" />
            </div>
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
  <div className="col-4 ">
           <img 
      src="logo.png"
       alt="Logo" 
        className="mt-4 logo" />
  </div>
    
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
  <div className="col-3 ">
           <img 
      src="logo.png"
       alt="Logo" 
        className="mt-3 logo" />
  </div>
    
  </div>
</div>


    </>               
    )
}