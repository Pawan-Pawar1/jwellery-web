import React,{useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom"

import Loader from "../loader/Loader";
export default function BraceletsFile() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      setLoading(true);   
      const res = await axios.post(
        `${BACKEND_URL}/products/file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data);
      e.target.reset();
          navigate("/");

    } catch (error) {
      console.error("Upload error:", error);
    } finally {
    setLoading(false);            // 🔥 stop loader
  }
  };

  if (loading) {
  return (
         <Loader />
  );
}
  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="container mt-4"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name of the product
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <select name="category" className="form-select" aria-label="Default select example" required>
             <option >select the catagory</option>
                 <option value="ring">Ring</option>
                 <option value="bracelet">Bracelet</option>
                 <option value="earring">earring</option>
                 <option value="necklace">necklace</option>
              </select>
        </div>


             <div className="mb-3 form-check">
              <label className="form-check-label">
  <input type="checkbox" name="isTrending" 
  className="form-check-input" style={{"marginLeft":"1rem"}}/> 
  Trending
</label >

<label className="form-check-label">
  <input type="checkbox" name="isNew" style={{"marginLeft":"6rem"}}
  className="form-check-input" />
   New Arrival
</label>

<label className="form-check-label">
  <input type="checkbox" name="isBestSeller" style={{"marginLeft":"6rem"}}
  className="form-check-input" /> 
  Best Seller
</label>
             </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price of the product
          </label>
          <input
            type="number"
            name="price"
            className="form-control"
            id="price"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight of the product
          </label>
          <input
            type="number"
            name="weight"
            className="form-control"
            id="weight"
            required
          />
        </div>

     <div className="mb-3">
          <select name="material" className="form-select" aria-label="Default select example" required>
             <option >select the material(gold/silver)</option>
                 <option value="gold">gold</option>
                 <option value="silver">silver</option>
                 
              </select>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload product image
          </label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="image"
            accept="image/*"
            required
          />
        </div>
        <div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a discription  here"
   id="floatingTextarea"
   name="description"></textarea>
  <label for="floatingTextarea">discription</label>
</div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
