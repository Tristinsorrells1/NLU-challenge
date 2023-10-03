import React, { useEffect, useState } from "react";
import "./Homepage.css";
import "../Header/Header.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Quote } from "../Quote/Quote";

export const Homepage = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [view, setView] = useState("");

  useEffect(() => {
    if (window.location.href.includes("design")) {
      setView("design");
      setImgIndex(0);
    }
    if (window.location.href.includes("production")) {
      setView("prod");
      setImgIndex(1);
    }
    if (window.location.href.includes("certification")) {
      setView("cert");
      setImgIndex(2);
    }
  });

  return (
    <main>
      <div className="slider">
        <Splide key={imgIndex} options={{ rewind: true, start: imgIndex }} aria-label="React Splide Example">
          <SplideSlide>
            <img src="slider_1.jpg" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="slider_2.jpg" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="slider_3.jpg" alt="Image 1" />
          </SplideSlide>
        </Splide>
      </div>
      <section className="quote-and-text-container">
        <div className="dummy-text">
          {view === "design" && <h2>Design. Manufacture. Deliver.</h2>}
          {view === "prod" && <h2>Produce. Manufacture. Deliver.</h2>}
          {view === "cert" && <h2>Certify. Manufacture. Deliver.</h2>}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Quote />
      </section>
    </main>
  );
};
