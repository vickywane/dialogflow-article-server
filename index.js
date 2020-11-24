require("dotenv").config();

exports.foodFunction = async (req, res) => {
  const { MongoClient } = require("mongodb");

  // const { food } = req.body.queryResult.parameters;
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

    const { displayName } = req.body.queryResult.intent;

    const result = [];
    switch (displayName) {
      case "list-available-meals":
        const data = collection.find({});
        const meals = [
          {
            text: {
              text: [
                `We currently have the following 20 meals on our menu list. Which would you like to request for?`,
              ],
            },
          },
        ];

        result.push(
          data.forEach((item) => {
            const { name, description, price, image_uri } = item;

            const card = {
              card: {
                title: `${name} at $${price}`,
                subtitle: description,
                imageUri: image_uri,
              },
            };

            meals.push(card);
          })
        );

        return Promise.all(result)
          .then((_) => {
            const response = {
              fulfillmentMessages: meals,
            };

            res.status(200).json(response);
          })
          .catch((e) => res.status(400).send({ error: e }));

      case "request-meal":
        const { food } = req.body.queryResult.parameters;
        collection.findOne({ name: food }, (err, data) => {
          if (err) {
            res.status(400).send({ error: err });
          }

          const { name, price, description, image_uri } = data;

          const singleCard = [
            {
              text: {
                text: [`The ${name} is currently priced at $${price}.`],
              },
            },

            {
              card: {
                title: `${name} at $${price}`,
                subtitle: description,
                imageUri: image_uri,
                buttons: [
                  {
                    text: "Pay For Meal",
                    postback: "htts://google.com",
                  },
                ],
              },
            },
          ];

          res.status(200).json({ fulfillmentMessages: singleCard });
        });

      default:
        break;
    }

    // const result = [];

    client.close();
  });
};
