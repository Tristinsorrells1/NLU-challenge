import "./FlavorPage.css"
import React from "react";
import { useParams } from "react-router-dom";

export const FlavorPage = () => {
  const { flavor } = useParams();
  return (
    <div className="flavor-result-card">
      <span className="flavor-name-card">{flavor}</span>
      <img src="/images.png" alt="Flavor Image" />
    </div>
  );
};
