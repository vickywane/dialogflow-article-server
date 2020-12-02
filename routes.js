require("dotenv").config();
import express from "express";
import FoodModel from "./schema";

const app = express();

app.get("/get-all-meals", (req, res) => {
  FoodModel.find({}, (err, data) => {
  if (err) {
    res.status(422).send({ error: err });
  }
  // const test = {
  //   name: "Burnt Beef",
  //   description:
  //     "A delicious, healthy meal, prepared by our chef to be delivered to your doorstep.",
  //   price: 5.0,
  //   availableUnits: 1,
  // };

  // const data = new FoodModel(test);

  // data
  //   .save()
  //   .then((data) => console.log(data))
  //   .catch((e) => console.log(e));

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
