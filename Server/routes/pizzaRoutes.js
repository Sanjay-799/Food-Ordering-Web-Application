const express = require('express');
const app = express.Router();
const db = require('../lib/pizzaDB');


app.get('/items', (req, res) => {
  const sql = "SELECT * FROM pizza"; 
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

module.exports = app;
