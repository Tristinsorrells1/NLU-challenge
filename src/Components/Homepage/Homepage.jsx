import React, { useEffect, useState } from "react";
import "./Homepage.css";
import "../Header/Header.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Quote } from "../Quote/Quote";

export const Homepage = ({ pageView, indexNum, showQuote }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [view, setView] = useState("");
  const [displayQuote, setDisplayQuote] = useState(true);

  useEffect(() => {
    setView(pageView)
    setImgIndex(indexNum)
    setDisplayQuote(showQuote)
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
          {view === "about" && <h2>About Us</h2>}
          {view === "contact" && (
            <div>
              <h2>Contact Us</h2>
              <p>
                <u>FakeEmail@Email.com</u>
              </p>
            </div>
          )}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {displayQuote && <Quote />}
      </section>
    </main>
  );
};
