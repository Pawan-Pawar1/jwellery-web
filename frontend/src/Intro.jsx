import React from "react";
import "./Intro.css"
export default function Intro(){
    return(
<div className="container mt-5">
    <div className="row" >
       <div className="col-8">
          <video  autoPlay loop muted>
               <source src="/vedeos/intro.mp4" type="video/mp4" />
               
         </video>
       </div>
       <div className="col-4 text-center info">
        Since 1971
        most trusted shop in Hingoli
        <form action="#">
            <button type="button" className="btn btn-outline-purple">explore</button>
        </form>
       </div>
    </div>
</div>
    )
}