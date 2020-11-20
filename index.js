require("dotenv").config();

exports.foodFunction = async (req, res) => {
  const { MongoClient } = require("mongodb");

  const { food } = req.body.queryResult.parameters;
  const CONNECTION_URI = process.env.MONGODB_URI;
  // initate a connection to the deployed mongodb cluster

  const client = new MongoClient(CONNECTION_URI, {
    useNewUrlParser: true,
  });

  client.connect((err) => {
    if (err) {
      res
        .status(500)
        .send({ status: "MONGODB CONNECTION REFUSED", error: err });
    }
    const collection = client.db(process.env.DATABASE_NAME).collection("Meals");

   

    // res.status(200).json(response);

    const data = collection.find({ name: food });
    const result = [];

    result.push(
      data.forEach((item) => {
        result.push(item);
      })
    );

    Promise.all(result)
      .then((_) => {
        const { name, availableUnits, price, description } = result[1];
        // const responseText =

        const response = {
          fulfillmentText: "This is a text response",
          fulfillmentMessages: [
            {
              text: {
                text: [`${name} are available in ${availableUnits} each at ${price}.`],
              },
            },
          ],
        };

        res.status(200).json(response);
      })
      .catch((e) => res.status(400).send({ error: e }));

    client.close();
  });
};
