import "./FlavorPage.css"
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

export const FlavorPage = () => {
  const { flavor } = useParams();
  return (
    <div className="flavor-result-card">
      <span className="flavor-name-card">{flavor}</span>
      <img src="/images.png" alt="Flavor Image" />
    </div>
  );
};
