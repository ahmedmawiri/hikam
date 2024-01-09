import express from "express";
import amthal from "./amthal.js";

const app = express();

app.get("/", (req, res) => {
  res.send("مرحبا بكم");
});



app.get("/mathal", (req, res) => {
    const randomIndex = Math.floor(Math.random() * amthal.length);
    const randomMathal = amthal[randomIndex];
    res.send(randomMathal);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
