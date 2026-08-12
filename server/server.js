const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db("portfolioDB");
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

// Home route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running!");
});

// Projects API
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await db.collection("projects").find().toArray();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch projects"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});