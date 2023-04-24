"use stict";
import express from "express";

import { Car } from "./models/Car.js";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const cars = await Car.find({});
    res.render("home", { items: cars });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/about", (req, res) => {
  console.log("received request");
  res.type("about page");
  res.sendFile("/public/about.html");
});
app.get("/details/:manufacturer", async (req, res) => {
  // const manufacturer = parseInt(req.query.manufacturer);
  // const { manufacturer } = req.params;
  try {
    // const car = await Car.findOne({ manufacturer });
    const car = await Car.findOne({ manufacturer: req.params.manufacturer });
    if (!car) {
      res.sendStatus(404);
    } else {
      res.render("details", { car });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
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
