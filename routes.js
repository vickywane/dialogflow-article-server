require("dotenv").config();
import express from "express";

const app = express();

app.get("/movies", (req, res) => {
  res.status(200).send({ data: "OK" });
});

export default app;
