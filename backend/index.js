const express = require("express");
const cors = require("cors");
const pool = require("./db"); // assuming you have a db.js for PostgreSQL connection

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS to allow requests from different origins
app.use(cors());
app.use(express.json());

// Define the /api/test route
app.get("/api/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]); // Send back a JSON response
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});