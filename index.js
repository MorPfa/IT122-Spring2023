"use stict";
import express from "express";
import * as fs from "fs/promises";
import * as http from "http";
import * as data from "./data.js";
import exp from "constants";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = data.getAll();
  res.render("home", { items });
  console.log("received request");
});

app.get("/about", (req, res) => {
  console.log("received request");
  res.type("about page");
  res.sendFile("/public/about.html");
});
app.get("/details", (req, res) => {
  const manufacturer = parseInt(req.query.manufacturer);
  const item = data.getItem(manufacturer);
  if (!item) {
    res.sendStatus(404);
  } else {
    res.render("details", { item });
  }
});
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(app.get("port"), () => {
  console.log("Express started");
});
