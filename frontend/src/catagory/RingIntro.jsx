import React from "react";
import "./BraceletsIntro.css";
import { Link } from "react-router-dom";

export default function BraceletsIntro() {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="desktop-wrap">
        <Link to="/rings" className="no-decoration">

          <div className="container text-center cont-bracelet">
            <div className="row ring-container">

              {/* Left Side Image */}
              <div className="col-xl-6 col-md-6 ring-obj">
                <img src="/rings/ring.avif" alt="bracelet-main" />
              </div>

              {/* Right Side Slider */}
              <div className="col-xl-6 col-md-6">

                <div className="bracelet-slider">
                  <div className="slider-track">
                    <img src="/rings/ring2.avif" alt="" />
                    <img src="/rings/ring3.avif" alt="" />
                    <img src="/rings/ring4.avif" alt="" />
                    <img src="/rings/ring5.avif" alt="" />

                    {/* Copies for infinite loop */}
                    <img src="/rings/ring6.avif" alt="" />
                    <img src="/rings/ring7.avif" alt="" />
                    <img src="/rings/ring8.avif" alt="" />
                    <img src="/rings/ring9.avif" alt="" />
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
        <Link to="/rings" className="no-decoration">

          <div className="container-fluid mob-block">
            <div className="row cont-img">
              <div className="col-12">

                <img
                  src="/rings/ring.avif"
                  className="back-img"
                  alt="bracelet-bg"
                />

                {/* Animated Foreground Images */}
                <img src="/rings/ring2.avif" className="front-img" alt="" />
                <img src="/rings/ring3.avif" className="front-img" alt="" />
                <img src="/rings/ring4.avif" className="front-img" alt="" />
                <img src="/rings/ring5.avif" className="front-img" alt="" />

                <button className="btn btn-outline-pink">View all</button>

              </div>
            </div>
          </div>

        </Link>
      </div>
    </>
  );
}
