require("dotenv").config();
import express from "express";
import FoodModel from "./schema";
import Test from "./sample.js";

const app = express();

app.get("/get-all-meals", (req, res) => {
  FoodModel.find({}, (err, data) => {
    if (err) {
      res.status(422).send({ error: err });
    }
    
    res.status(200).send({ data: data });
  }).lean();
});

app.get("/get-meal", (req, res) => {
  FoodModel.find({ original_title: req.query.title }, (err, data) => {
    if (err) {
      res.status(422).send({ error: err });
    }

    res.status(200).send({ data: data });
  }).lean();
});

export default app;
