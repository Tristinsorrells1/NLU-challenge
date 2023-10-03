import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const flavorsDb = new sqlite3.Database("flavors.db");
const contactsDb = new sqlite3.Database("contacts.db");

app.get("/flavors", (req, res) => {
  flavorsDb.all("SELECT DISTINCT flavor FROM flavors", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
   const flavors = rows.map((row) => row.flavor);
   res.json({ flavors });
  });
});

app.get("/categories", (req, res) => {
  flavorsDb.all("SELECT DISTINCT category FROM flavors", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    const categories = rows.map((row) => row.category);
    res.json({ categories });
  });
});

app.get("/flavors/:category", (req, res) => {
  const category = req.params.category;

  flavorsDb.all("SELECT * FROM flavors WHERE category = ?", [category], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ data: rows });
  });
});

app.post("/contacts", (req, res) => {
 
  const formData = req.body;

  const { capability, email, message, name, sendNewsletter } = formData;

  const insertQuery = `
    INSERT INTO contacts (capability, email, message, name, sendNewsletter)
    VALUES (?, ?, ?, ?, ?)
  `;

  contactsDb.run(insertQuery, [capability, email, message, name, sendNewsletter], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: "New contact added successfully",
      contactId: this.lastID,
    });
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
