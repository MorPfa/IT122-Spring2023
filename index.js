"use stict";
import express from "express";
// import * as data from "./data.js";
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
  // const items = data.getAll();
  // res.render("home", { items });
  // console.log("received request");
});

app.get("/about", (req, res) => {
  console.log("received request");
  res.type("about page");
  res.sendFile("/public/about.html");
});
app.get("/details", (req, res) => {
  const manufacturer = parseInt(req.query.manufacturer);
  try {
    const car = Car.findOne({ manufacturer });
    if (!car) {
      res.sendStatus(404);
    } else {
      res.render("details", { car });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
  // const item = data.getItem(manufacturer);
  // if (!item) {
  //   res.sendStatus(404);
  // } else {
  //   res.render("details", { item });
  // }
});
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(app.get("port"), () => {
  console.log("Express started");
});
