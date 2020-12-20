require("dotenv").config();
import express from "express";
import WineModel from "./schema";
import Test from "./sample.js";

const app = express();

app.get("/get-all-wines", (req, res) => {
  // Test.forEach((item) => {
  //   const wine = new WineModel(item)

  //   wine.save().then(_ => console.log("done"))
  // })

  WineModel.find({}, (err, data) => {
    if (err) {
      res.status(422).send({ error: err });
    }

    res.status(200).send({ data: data });
  }).lean();
});

app.get("/get-wine", (req, res) => {
  WineModel.find({ original_title: req.query.title }, (err, data) => {
    if (err) {
      res.status(422).send({ error: err });
    }

    res.status(200).send({ data: data });
  }).lean();
});

export default app;
