"use strict";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { Car } from "./models/Car.js";
import React from "react";
import ReactDOM from "react-dom";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const cars = await Car.find({});
    res.render("home", { items: JSON.stringify(cars) });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/cars", async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.get("/api/cars/:manufacturer", async (req, res) => {
  try {
    const car = await Car.findOne({ manufacturer: req.params.manufacturer });
    if (!car) {
      res.sendStatus(404);
    } else {
      res.json(car);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.post("/api/cars", async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.delete("/api/cars/:manufacturer", async (req, res) => {
  try {
    const result = await Car.deleteOne({
      manufacturer: req.params.manufacturer,
    });
    if (result.deletedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
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
  try {
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
