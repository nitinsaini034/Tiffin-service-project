import React from "react";
import heroImage from "../assets/hero.jpg";
import "../css/hero.css";
import Search from "./Search/Search";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Fresh, homestyle meals</p>
        <h1>Delicious tiffins, delivered to your doorstep</h1>
        <p className="hero__description">
          Find trusted local kitchens and enjoy healthy, freshly prepared meals
          every day.
        </p>

        <Search/>
      </div>

      <div className="hero__image-wrapper">
        <img
          className="hero__image"
          src={heroImage}
          alt="Fresh homestyle tiffin meal"
        />
      </div>
    </section>
  );
};

export default Hero;
