const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 

        
        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                console.log('MySQL insert error', err);
            
                return res.status(500).json({ error: 'Failed to register user' });
            }

            return res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});


router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        if (results.length === 0) {
            return res.json({ success: false, message: 'User not found' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            return res.json({ success: true, message: 'Login successful' });
            

        } else {
            return res.json({ success: false, message: 'Incorrect password' });
        }
    });
});


module.exports = router;
