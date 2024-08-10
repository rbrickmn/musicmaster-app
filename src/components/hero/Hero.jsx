import React from "react";
import "./Hero.css";
import SearchBar from "../searchBar/SearchBar";

const Hero = () => {
  return (
    <>
      <div className="container">
        <h1 className="hero-header">It's all here.</h1>

        <p className="hero-text">
          Discover every detail of your favorite music, review it, see what
          others think, and contribute your knowledge.
        </p>

        <SearchBar />
      </div>
    </>
  );
};

export default Hero;
