const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const bcrypt = require('bcrypt');

router.get('/',(req,res)=>{
    res.send('default route')
});



router.post('/register', async(req,res)=>{
    const {name,email,password}=req.body;
    console.log(req.body);
    const hashedPassword= await bcrypt.hash(password,10);
    db.query(`INSERT INTO users (name, email, password) VALUES ('${name}','${email}','${hashedPassword}');`,(err,result)=>{
        if(err){
            console.log('MySQL inser error',err);
            return res.status(500).json({ error: 'Failed to register user'});
        }
        return res.status(200).json({ message: 'User registered successfully', userId: result.insertId})

    });

})





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
