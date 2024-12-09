const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const librarianRoutes = require('./routes/librarian');
const memberRoutes = require('./routes/member');
const connectDB = require('./config/db'); // Import the connectDB function

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the function to connect to the database

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/librarian', librarianRoutes);
app.use('/api/member', memberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});