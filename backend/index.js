const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing JSON requests

// Test route
app.get("/ping", (req, res) => {
    res.send("pong!");
});

const quoteRoutes = require('./routes'); // adjust the path
app.use('/api', quoteRoutes);

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ MongoDB connected successfully");

    // Start the server only after successful DB connection
    app.listen(8080, () => {
        console.log("🚀 Server running on http://localhost:8080");
    });
})
.catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
});
