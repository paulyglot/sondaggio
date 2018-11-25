const express = require("express"); //using common js modules for serverside of app will use ES2015_modules for frontend
const app = express(); //used to setup config to listen for incoming requests and route them to various route handlers

app.get("/greeting", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT;
app.listen(PORT);
