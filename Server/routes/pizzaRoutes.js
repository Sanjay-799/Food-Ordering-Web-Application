const express = require('express');
const app = express.Router();
const db = require('../lib/pizzaDB');
const { error } = require('console');


app.get('/items', (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});


app.get('/admin/allitems', (req, res) => {
  const sql = 'SELECT * FROM items';
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: err });
    }
    return res.status(200).json(result); 
  });
});


app.post('/admin/additem', (req, res) => {
  const { name, size, quantity, price, image_url } = req.body;

  const sql = "INSERT INTO items (name, size, quantity, price, image_url) VALUES (?, ?, ?, ?, ?)";
  const values = [name, size, quantity, price, image_url];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Failed to add item" });
    } else {
      return res.status(200).json({ message: "item added successfully", result });
    }
  });
});


app.delete('/admin/deleteitem', (req, res) => {
  const { name, size } = req.body;

  const sql = 'DELETE FROM items WHERE name = ? AND size = ?';
  const values = [name, size];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Delete error:", err);
      return res.status(500).json({ error: "Failed to delete item" });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No matching item found to delete" });
    } else {
      return res.status(200).json({ message: "Item deleted successfully", result });
    }
  });
});


app.put('/admin/updateitems', (req, res) => {
  const { name, size, quantity, price } = req.body;

  const sql = 'UPDATE items SET quantity = ?, price = ? WHERE name = ? AND size = ?';
  const values = [quantity, price, name, size];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Update error:", err);
      return res.status(500).json({ error: "Failed to update item" });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No matching item found to update" });
    } else {
      return res.status(200).json({ message: "Item updated successfully", result });
    }
  });
});


module.exports = app;
