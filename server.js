const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/config');

// Initialize environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors(
    {
        origin: 'https://r2jh5q39-5173.uks1.devtunnels.ms/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        Credential: true,
    }
));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/property'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
);