require("dotenv").config();
import express from "express";
import { Schema, model } from "mongoose";

const app = express();

const schema = new Schema({

});

const foodSchema = model("foods", schema);

app.get("/get-all-foods", (req, res) => {
  foodSchema
    .find({}, (err, data) => {
      if (err) {
        res.status(422).send({ error: err });
      }

      res.status(200).send({ data: data });
    })
    .lean();
}); 

app.get("/get-foods", (req, res) => {
  foodSchema
    .find({ original_title: req.query.title }, (err, data) => {
      if (err) {
        res.status(422).send({ error: err });
      }

      res.status(200).send({ data: data });
    })
    .lean();
});

export default app;
