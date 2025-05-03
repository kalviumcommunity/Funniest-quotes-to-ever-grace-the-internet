const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware to parse JSON body and enable CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb+srv://satyaemailid2007:5QjZaMSmKoPXQcTK@cluster0.dgkcspy.mongodb.net/"; // Replace with your MongoDB URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Mongoose schema and model for shoes
const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Shoe = mongoose.model("Shoe", shoeSchema);

// GET request to check if the server is alive
app.get("/", (req, res) => {
  res.send("pong!");
});

// CRUD operations for shoes

// Create a new shoe
app.post("/post", async (req, res) => {
  try {
    const newShoe = new Shoe(req.body);
    const savedShoe = await newShoe.save();
    res.status(201).json(savedShoe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all shoes
app.get("/get", async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.get("/get/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    res.json(shoe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.put("/put/:id", async (req, res) => {
  try {
    const updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedShoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    res.json(updatedShoe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



// Delete a shoe by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedShoe = await Shoe.findByIdAndDelete(req.params.id);
    if (!deletedShoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    res.json({ message: "Shoe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(8080, () => {
  try {
    console.log("Server connected successfully on port 8080");
  } catch (error) {
    console.log(error);
  }
});