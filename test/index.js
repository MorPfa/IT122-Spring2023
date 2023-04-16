"use stict";
import express from "express";
import * as fs from "fs/promises";
import * as http from "http";
import * as querystring from "querystring";
// import * as data from "./data.js";
import exp from "constants";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("received request");
  res.type("Home page");
});

app.get("/about", (req, res) => {
  console.log("received request");
  res.type("about page");
  res.sendFile("/public/about.html");
});

app.listen(app.get("port"), () => {
  console.log("Express started");
});
