require("dotenv").config();
import express from "express";
import Dialogflow from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";
import Path from "path";

const app = express();

app.get("/agent-webhook", (req, res) => {});

app.post("/get-response", async (req, res) => {
  // Create a new session

  const { message } = req.body;

  const sessionClient = new Dialogflow.SessionsClient({
    keyFilename: Path.join(__dirname, "./recommender-key.json"),
  });

  const sessionPath = sessionClient.projectAgentSessionPath(
    process.env.PROJECT_ID,
    uuid()
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client (en-US)
        languageCode: "en-US",
      },
    },
  };

  // Send request and log result
  try {
    const responses = await sessionClient.detectIntent(request);

    res.status(200).send({ data: responses });
  } catch (e) {
    console.log(e);
    res.status(422).send({ e });
  }

});

app.post("/post-response", (req, res) => {});

export default app;
