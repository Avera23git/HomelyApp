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
        origin: ['http://localhost:5173', 'https://homely-properties-ks9x.vercel.app'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        Credential: true,
    }
));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/property'));

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
);
