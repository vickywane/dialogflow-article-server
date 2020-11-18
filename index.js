require("dotenv").config();
const { MongoClient } = require("mongodb");

exports.foodFunction = async (req, res) => {
  const { foodName } = req.body;
  const CONNECTION_URI = process.env.MONGODB_URI;

  // initate a connection to the deployed mongodb cluster

  const client = new MongoClient(CONNECTION_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const collection = client.db(process.env.DATABASE_NAME).collection("Meals");

    // const cursor = collection.find({});

    // const data = await cursor.toArray();

    const data = collection.find({ name: foodName });

    data.forEach((item) => {
      res.status(200).send({ item });
    });

    client.close();
  });
};
