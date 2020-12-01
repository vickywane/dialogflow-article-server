require("dotenv").config();
import express from "express";
import Dialogflow from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";
import Path from "path";

const app = express();
 
app.get("/agent-webhook", (req, res) => {});

app.get("/get-response", async (req, res) => {
  // Create a new session

  const sessionClient = new Dialogflow.SessionsClient({
    keyFilename: Path.join(__dirname, "./dialogflow-key.json"),
  });

  const sessionPath = sessionClient.projectAgentSessionPath(process.env.PROJECT_ID, uuid());

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: "hello",
        // The language used by the client (en-US)
        languageCode: "en-US",
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);

  console.log(responses);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`Intent: ${result.intent.displayName}`);
  } else {
    console.log(`No intent matched.`);
  }
});

app.post("/post-response", (req, res) => {});

export default app;
