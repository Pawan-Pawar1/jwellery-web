import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { Link } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState([]);

 const deleteCart = async (itemId) => {
  try {
    const res = await axios.delete(
      `${BACKEND_URL}/cart/delete/${itemId}`,
      { withCredentials: true }
    );

    // If your backend returns { success: true, cart: [...] }
    if (res.data.success) {
      setItems(res.data.cart);
    } else {
      // Fallback: if it just returns the cart directly
      setItems(res.data);
    }
  } catch (err) {
    console.error("Error deleting item:", err);
    alert("Could not remove item from cart");
  }
};

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/cart`,
          { withCredentials: true }
        );
        setItems(res.data);
      } catch (err) {
        console.error("Cart fetch error:", err);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="cart-box">
      <h3>Your Cart</h3>

      {items.length === 0 ? (
        <p>No products in cart</p>
      ) : (
        items.map(item => (
          <div key={item._id} className="cart-item">
            
            
            <img
              src={item.productId?.images?.url || "/placeholder.png"}
              alt={item.productId?.name}
              className="cart-image"
            />

            
            <div className="cart-details">
              <p className="cart-title">{item.productId?.name}</p>
              <p className="cart-price">{item.productId?.material}</p>
              <p className="cart-price">{item.productId?.weight}g</p>
              <p className="cart-price">{item.productId?.discription}</p>
              <p className="cart-qty">Qty: {item.quantity}</p>
               
               <Link to={`/product/${item.productId?._id}`} className="btn btn-outline-success">
               view Detail</Link> <br />
               <button 
               className="btn btn-danger"
               onClick={()=>deleteCart(item._id)}
               >remove</button>
            </div>
                              
          </div>
        ))
      )}
    </div>
  );
}