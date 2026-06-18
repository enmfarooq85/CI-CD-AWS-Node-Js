const express = require("express");

const app = express();

app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully 🚀",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Backend API 🚀");
});

// Example test route
app.get("/api/test", (req, res) => {
  res.json({
    message: "Test route working fine ✔",
    env: process.env.NODE_ENV || "development"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});