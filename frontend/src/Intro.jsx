import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="container mt-4  intro">
      <div className="row">

        {/* Video column */}
        <div className="col-sm-12 col-md-8 order-1">
          <video autoPlay loop muted>
            <source src="/vedeos/intro.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text column */}
        <div className="col-sm-12 col-md-4 text-center info order-2">
          Since 1971
          <br />
          most trusted shop in Hingoli
          <form action="#">
            <button type="button" className="btn btn-outline-purple mt-3">
              explore
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
