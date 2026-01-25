import React from "react";
import { Link } from "react-router-dom";
import "./Showpage.css"
// This component receives data via props
// props.products = array of products

export default function ShowPage({ products = {} }) {
  

  if (!products.length) {
    return <p className="text-center mt-5">No listings found</p>;
  }

  return (
    <div className="container  mt-5">
      

      <div className="row ">
        {products.map((product) => (
          <div className="col-lg-12 " key={product._id}>
            <div className="card h-100 shadow-sm" >
              <img
                src={product.images?.url}
                className="card-img-top"
                alt={product.name}
                
                
              />

              <div className="card-body d-flex flex-column">
                {/* <h5 className="card-title">{product.name}</h5> */}
                <p className="card-text mb-1" >{product.name.slice(0,12)}...</p>
                <p className="card-text mb-1">₹{product.price}</p>
                

                <Link
                  to={`/product/${product._id}`}
                  className="btn view-detail"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
