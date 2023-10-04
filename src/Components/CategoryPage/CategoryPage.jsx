import "./CategoryPage.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Quote } from "../Quote/Quote";

export const CategoryPage = () => {
  const { category } = useParams();
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/flavors/${category}`)
      .then((response) => response.json())
      .then((data) => {
        const names = data.data.map((flavor) => flavor.flavor);
        setFlavors(names);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <section className="category-container">
      <h2>{category} Flavors</h2>
      {flavors.length !== 0 && <span className="num-of-flavors-text">{flavors.length} results</span>}
      {flavors.length !== 0 && (
        <div className="flavor-quote-container">
          <div className="flavors-grid">
            {flavors.map((flavor, index) => (
              <NavLink key={index} to={`/flavor/${flavor}`}>
                <div className="flavor-result" id={`flavor-${index}`}>
                  <img src="/images.png" alt="Flavor Image" />
                  <span className="flavor-name">{flavor}</span>
                </div>
              </NavLink>
            ))}
          </div>
          <Quote />
        </div>
      )}
    </section>
  );
};
