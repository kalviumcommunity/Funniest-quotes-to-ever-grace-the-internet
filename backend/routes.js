const express = require('express');
const Quote = require(`./schema`); // adjust path as needed
const router = express.Router();

router.get('/quotes', async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quotes" });
    }
});

module.exports = router;
