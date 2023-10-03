import "./Header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:5000/categories") 
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="header-section">
      <div>
        <img className="header-logo" src="/logo.png" alt="logo"></img>
      </div>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">
            Capabilities
            <i className="fa fa-caret-down"> </i>
          </button>
          <div className="dropdown-content">
            <Link to="/design">Design</Link>
            <Link to="/production">Production</Link>
            <Link to="/certification">Certification</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Flavors
            <i className="fa fa-caret-down"> </i>
          </button>
          {categories && (
            <ul className="dropdown-content">
              {categories.map((category, index) => (
                <Link id={index} to={`/flavors/${category}`} onClick={(event) => event.target.parent.removeClass("expand")}>
                  <li>{category}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <Link to={"about-us"}>About Us</Link>
        <Link to={"contact-us"}>Contact Us</Link>
      </div>
    </section>
  );
};
