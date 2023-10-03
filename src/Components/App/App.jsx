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
        <Route path="/certification" element={<Homepage />} />
        <Route path="/production" element={<Homepage />} />
        <Route path="/design" element={<Homepage />} />
        <Route path="/flavors/:category" element={<CategoryPage />} />
        <Route path="/flavor/:flavor" element={<FlavorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
