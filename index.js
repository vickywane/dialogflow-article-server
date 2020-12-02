require("dotenv").config();
const { MongoClient } = require("mongodb");

exports.foodFunction = async (req, res) => {
  const { foodName } = req.query;
  const CONNECTION_URI = process.env.MONGODB_URI;
  // initate a connection to the deployed mongodb cluster

  const { parameters } = req.body.queryResult;

  const client = new MongoClient(CONNECTION_URI, {
    useNewUrlParser: true,
  });

  client.connect(async (err) => {
    if (err) {
      res
        .status(500)
        .send({ status: "MONGODB CONNECTION REFUSED", error: err });
    }
    const collection = client.db(process.env.DATABASE_NAME).collection("Meals");

    // const cursor = collection.find({});
    // const data = await cursor.toArray();

    try {
      const data = collection.find({ name: parameters.food });
      const result = [];

      result.push(
        data.forEach((item) => {
          result.push(item);
        })
      );

      Promise.all(result)
        .then((_) => {
            console.log(result);
          res.status(200).send({ data: result });
        })
        .catch((e) => res.status(400).send({ error: e }));
    } catch (e) {
      res.status(400).send({ error: e });
    }

    client.close();
  });
};
