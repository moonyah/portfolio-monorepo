// server.js 또는 app.js
const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors()); // CORS를 허용합니다
app.use(express.json());

app.get("/api/visitors/today", (req, res) => {
  res.json({ count: 100 });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
