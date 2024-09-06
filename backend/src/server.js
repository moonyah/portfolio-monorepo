// server.js 또는 app.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // CORS를 허용합니다

app.get("/", (req, res) => {
  res.send("Hello World! WOW");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
