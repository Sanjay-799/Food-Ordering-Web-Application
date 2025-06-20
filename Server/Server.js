const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 
app.use('/', userRoutes); 

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
