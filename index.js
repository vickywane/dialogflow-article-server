require("dotenv").config();
const { MongoClient } = require("mongodb");
const { Schema, model, connect } = require("mongoose");

const FoodSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableUnits: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    default: "USD",
  },
});

const Meals = model("Meals", FoodSchema);

exports.foodFunction = async (req, res) => {
  const CONNECTION_URI = process.env.MONGODB_URI;

  // initate a connection to the deployed mongodb cluster

  MongoClient.connect(
    CONNECTION_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, db) => {
      if (err) {
      }

      const collec = db.db("dialogflow-food-service");

      collec.collection("Meals").find({ name: "Fries" }, (err, data) => {
        console.log(data);
      });
    }
  );

  //   Mongodb.connect(
  //     CONNECTION_URI,
  //     {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     },
  //     (err, database) => {
  //       if (err) {
  //         res.status(503).send({
  //           error: err,
  //           status: "MONGO DB CONNECTION REFUSED",
  //         });
  //       }

  //       console.log(database);
  //     }
  //   );
};
