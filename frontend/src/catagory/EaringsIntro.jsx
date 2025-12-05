import React from "react";
import "./BraceletsIntro.css";
import { Link } from "react-router-dom";

export default function BraceletsIntro() {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="desktop-wrap">
        <Link to="/earings" className="no-decoration">

          <div className="container text-center cont-bracelet">
            <div className="row ring-container">

              {/* Left Side Image */}
              <div className="col-xl-6 col-md-6 ring-obj">
                <img src="/earings/earings15.avif" alt="bracelet-main" />
              </div>

              {/* Right Side Slider */}
              <div className="col-xl-6 col-md-6">

                <div className="bracelet-slider">
                  <div className="slider-track">
                    <img src="/earings/earings2.avif" alt="" />
                    <img src="/earings/earings3.avif" alt="" />
                    <img src="/earings/earings4.avif" alt="" />
                    <img src="/earings/earings5.avif" alt="" />

                    {/* Copies for infinite loop */}
                    <img src="/earings/earings6.avif" alt="" />
                    <img src="/earings/earings7.avif" alt="" />
                    <img src="/earings/earings8.avif" alt="" />
                    <img src="/earings/earings9.avif" alt="" />
                  </div>
                </div>

                <button type="button" className="btn btn-outline-pink">
                  View full collection
                </button>

              </div>

            </div>
          </div>

        </Link>
      </div>

      {/* MOBILE VERSION */}
      <div className="mobile-wrap">
        <Link to="/earings" className="no-decoration">

          <div className="container-fluid mob-block">
            <div className="row cont-img">
              <div className="col-12">

                <img
                  src="/earings/earings10.avif"
                  className="back-img"
                  alt="bracelet-bg"
                />

                {/* Animated Foreground Images */}
                <img src="/earings/earings2.avif" className="front-img" alt="" />
                <img src="/earings/earings3.avif" className="front-img" alt="" />
                <img src="/earings/earings4.avif" className="front-img" alt="" />
                <img src="/earings/earings5.avif" className="front-img" alt="" />

                <button className="btn btn-outline-pink">View all</button>

              </div>
            </div>
          </div>

        </Link>
      </div>
    </>
  );
}
