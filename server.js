import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());

const db = new sqlite3.Database("flavors.db");

app.get("/flavors", (req, res) => {
  db.all("SELECT DISTINCT flavor FROM flavors", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
   const flavors = rows.map((row) => row.flavor);
   res.json({ flavors });
  });
});

app.get("/categories", (req, res) => {
  db.all("SELECT DISTINCT category FROM flavors", (err, rows) => {
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

  db.all("SELECT * FROM flavors WHERE category = ?", [category], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ data: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
