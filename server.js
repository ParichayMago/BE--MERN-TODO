require("dotenv").config();
const express = require("express");
const app = express();


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});


const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log("Listening on port", port);
});