import "./Quote.css";
import React, { useState } from "react";

export const Quote = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", sendNewsletter: true, capability: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheck = (event) => {
    const sendUserNewsletter = !formData.sendNewsletter;
    setFormData((prevFormData) => ({ ...prevFormData, sendNewsletter: sendUserNewsletter }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New contact added successfully. Contact ID:", data.contactId);
      })
      .catch((error) => console.error("Error adding contact:", error));
  };

  return (
    <div className="quote-container">
      <span className="get-quote-text">Get a quote</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input className="form-data" type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </label>
        <label htmlFor="email">
          <input className="form-data" type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          <select className="form-data capability-dropdown" value={formData.capability} onChange={handleChange} name="capability" required>
            <option value="" disabled={true}>
              Select a capability
            </option>
            <option name="capability" value="Design">
              Design
            </option>
            <option name="capability" value="Production">
              Production
            </option>
            <option name="capability" value="Certification">
              Certification
            </option>
          </select>
        </label>
        <label htmlFor="message">
          <textarea className="form-data" id="message" name="message" placeholder="Comments" value={formData.message} onChange={handleChange} />
        </label>
        <div>
          <label htmlFor="sendNewsletter">
            <input type="checkbox" id="sendNewsletter" name="sendNewsletter" checked={formData.sendNewsletter} onChange={handleCheck} />
          </label>
          <span className="newsletter-text">I'd like to recieve the newsletter</span>
        </div>
        <button className="submit-btn" type="submit">
          Get a quote
        </button>
      </form>
    </div>
  );
};
