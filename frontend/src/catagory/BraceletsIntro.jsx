import React from "react";
import "./BraceletsIntro.css";
import { Link } from "react-router-dom";

export default function BraceletsIntro() {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="desktop-wrap">
        <Link to="/bracelets" className="no-decoration">

          <div className="container text-center cont-bracelet">
            <div className="row ring-container">

              {/* Left Side Image */}
              <div className="col-xl-6 col-md-6 ring-obj">
                <img src="/braclate/braclate.avif" alt="bracelet-main" />
              </div>

              {/* Right Side Slider */}
              <div className="col-xl-6 col-md-6">

                <div className="bracelet-slider">
                  <div className="slider-track">
                    <img src="/braclate/braclate2.avif" alt="" />
                    <img src="/braclate/braclate3.avif" alt="" />
                    <img src="/braclate/braclate4.avif" alt="" />
                    <img src="/braclate/braclate5.avif" alt="" />

                    {/* Copies for infinite loop */}
                    <img src="/braclate/braclate6.avif" alt="" />
                    <img src="/braclate/braclate7.avif" alt="" />
                    <img src="/braclate/braclate8.avif" alt="" />
                    <img src="/braclate/braclate9.avif" alt="" />
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
        <Link to="/bracelets" className="no-decoration">

          <div className="container-fluid mob-block">
            <div className="row cont-img">
              <div className="col-12">

                <img
                  src="/braclate/braclate.avif"
                  className="back-img"
                  alt="bracelet-bg"
                />

                {/* Animated Foreground Images */}
                <img src="/braclate/braclate6.avif" className="front-img" alt="" />
                <img src="/braclate/braclate7.avif" className="front-img" alt="" />
                <img src="/braclate/braclate8.avif" className="front-img" alt="" />
                <img src="/braclate/braclate9.avif" className="front-img" alt="" />

                <button className="btn btn-outline-pink">View all</button>

              </div>
            </div>
          </div>

        </Link>
      </div>
    </>
  );
}
