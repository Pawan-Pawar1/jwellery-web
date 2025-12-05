import React from "react";
import "./BraceletsIntro.css";
import { Link } from "react-router-dom";

export default function BraceletsIntro() {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="desktop-wrap">
        <Link to="/necklace" className="no-decoration">

          <div className="container text-center cont-bracelet">
            <div className="row ring-container">

              

              {/* Right Side Slider */}
              <div className="col-xl-6 col-md-6">

                <div className="bracelet-slider">
                  <div className="slider-track">
                    <img src="/necklace/necklace2.avif" alt="" />
                    <img src="/necklace/necklace3.avif" alt="" />
                    <img src="/necklace/necklace4.avif" alt="" />
                    <img src="/necklace/necklace5.avif" alt="" />

                    {/* Copies for infinite loop */}
                    <img src="/necklace/necklace6.avif" alt="" />
                    <img src="/necklace/necklace7.avif" alt="" />
                    <img src="/necklace/necklace8.avif" alt="" />
                    <img src="/necklace/necklace9.avif" alt="" />
                  </div>
                </div>


                <button type="button" className="btn btn-outline-pink">
                  View full collection
                </button>

              </div>
              {/* Left Side Image */}
              <div className="col-xl-6 col-md-6 ring-obj">
                <img src="/necklace/necklace10.avif" alt="bracelet-main" />
              </div>

            </div>
          </div>

        </Link>
      </div>

      {/* MOBILE VERSION */}
      <div className="mobile-wrap">
        <Link to="/necklace" className="no-decoration">

          <div className="container-fluid mob-block">
            <div className="row cont-img">
              <div className="col-12">

                <img
                  src="/necklace/necklace7.avif"
                  className="back-img"
                  alt="bracelet-bg"
                />

                {/* Animated Foreground Images */}
                <img src="/necklace/necklace2.avif" className="front-img" alt="" />
                <img src="/necklace/necklace3.avif" className="front-img" alt="" />
                <img src="/necklace/necklace4.avif" className="front-img" alt="" />
                <img src="/necklace/necklace5.avif" className="front-img" alt="" />

                <button className="btn btn-outline-pink">View all</button>

              </div>
            </div>
          </div>

        </Link>
      </div>
    </>
  );
}
