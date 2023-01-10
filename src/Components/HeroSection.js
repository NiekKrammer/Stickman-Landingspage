import React from "react";
import $ from "jquery";

export default function HeroSection() {
  $("#myvideo").hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
      this.removeAttribute("controls");
    } else {
      this.setAttribute("controls", "controls");
    }
  });
  return (
    
    <section id="hero-section">
    <div className="hero-section">
      <div className="container-fluid ">
        <div className="row">

            <div className="col-12 p-0 m-0">
                <img src="../Asserts/GIF.gif" id="gif"/>
            </div>

            <div className="col-12 p-0 m-0">
                <img src="../Asserts/Hero-img.png"/>
            </div>

            <div className="col-12 text-center" id="socials">
                <a href=".navbar">Chart</a>
                <a href=".navbar">Telegram</a>
                <a href=".navbar">Twitter</a>
            </div>  

        </div>
          
      </div>
    </div>
    </section>
  );
}
