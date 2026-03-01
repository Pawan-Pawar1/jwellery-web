import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProfilePopup.css";
import Cart from "./Cart";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ProfilePopup({ close }) {
  const { user, setUser } = useContext(AuthContext);
  const [cart , setCart]=useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post(
      `${BACKEND_URL}/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
    
    navigate("/login");
  };
  function goBack(){
    navigate("/",{ replace: true });
  }

  if (!user) {
    return null; 
  }

  return (
    <div className="profile-popup text-center mt-5">
      <p className="profile-name"><i className="fa-solid fa-circle-user"></i> :{user.name}</p>
      <p className="profile-email"><i className="fa-regular fa-envelope"></i>:{user.email}</p>

      <hr />

      <button onClick={goBack} className="profile-btn">
        <i className="fa-solid fa-backward"></i>
      </button>
   
      <button className="logout-btn profile-btn" onClick={logout}>
        Logout
      </button>

      <button className=" profile-btn btn btn-purple" onClick={()=>setCart(prev => !prev)} >
         <i className="fa-solid fa-cart-arrow-down"></i>

      </button>
      {cart && 
        <Cart user={user} />
      
      }
    </div>
  
  );
}