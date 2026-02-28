import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./PriceBoard.css";
import { AuthContext } from "../context/AuthContext";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function PriceBoard() {
  const { user } = useContext(AuthContext);

  const [price, setPrice] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    gold: "",
    silver: ""
  });

  const fetchPrice = async () => {
    const res = await axios.get(`${BACKEND_URL}/price`,{
      withCredentials : true,
    });
    setPrice(res.data);
    setFormData({
      gold: res.data?.gold || "",
      silver: res.data?.silver || ""
    });
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
     `${BACKEND_URL}/price/addprice`,
      formData,
      { withCredentials: true }
    );
    setEditMode(false);
    fetchPrice();
  };

  return (
    
    <div className="price-board-container ">
      <div className="price-card mt-2">
        <h2 className="price-board-title ">💜 Price Board</h2> 

        {!editMode ? (
          <>
            <div className="price-row gold  ">
              <span>Gold (24K / gm)</span>
              <strong>₹ {price?.gold ?? "--"}</strong>
            </div>

            <div className="price-row silver">
              <span>Silver (8 gm)</span>
              <strong>₹ {price?.silver ?? "--"}</strong>
            </div>

            <p className="updated-time">
              Last Updated:{" "}
              {price?.updatedAt
                ? new Date(price.updatedAt).toLocaleString()
                : "--"}
            </p>

            {/* ADMIN ONLY */}
            {user?.role === "admin" && (
              <button
                className="edit-btn "
                onClick={() => setEditMode(true)}
              >
                ✏️ Edit Prices
              </button>
            )}
          </>
        ) : (
          /* EDIT FORM */
          <form className="price-form" onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Gold Price"
              value={formData.gold}
              onChange={(e) =>
                setFormData({ ...formData, gold: e.target.value })
              }
              required
            />

            <input
              type="number"
              placeholder="Silver Price"
              value={formData.silver}
              onChange={(e) =>
                setFormData({ ...formData, silver: e.target.value })
              }
              required
            />

            <div className="form-actions">
              <button type="submit" className="save-btn">
                Save
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}