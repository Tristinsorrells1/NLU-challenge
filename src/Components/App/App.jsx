import { useState } from "react";
import "./App.css";
import { Homepage } from "../Homepage/Homepage";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { CategoryPage } from "../CategoryPage/CategoryPage";
import { FlavorPage } from "../FlavorPage/FlavorPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/certification" element={<Homepage pageView={"cert"} indexNum={2} showQuote={true} />} />
        <Route path="/production" element={<Homepage pageView={"prod"} indexNum={1} showQuote={true} />} />
        <Route path="/design" element={<Homepage pageView={"design"} indexNum={0} showQuote={true} />} />
        <Route path="/about-us" element={<Homepage pageView={"about"} indexNum={0} showQuote={false} />} />
        <Route path="/contact-us" element={<Homepage pageView={"contact"} indexNum={1} showQuote={false} />} />
        <Route path="/flavors/:category" element={<CategoryPage />} />
        <Route path="/flavor/:flavor" element={<FlavorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
