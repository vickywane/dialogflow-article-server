require("dotenv").config();
import express from "express";
import Dialogflow from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";
import Path, { parse } from "path";
import Axios from "axios";
import util from "util";
import { pipeline, Transform } from "stream";
import busboy from "connect-busboy";

const app = express();

app.use(
    busboy({
        immediate: true,
    })
);

app.post("/text-input", async (req, res) => {
    // Creates a new session
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

app.post("/voice-input", (req, res) => {
    const encoding = "AUDIO_ENCODING_OGG_OPUS";
    //const encoding = "AUDIO_ENCODING_MP3";

    // const encoding = "AUDIO_ENCODING_UNSPECIFIED";
    const hertz = 16000;
    const language = "en-US";
    const pump = util.promisify(pipeline);

    const sessionClient = new Dialogflow.SessionsClient({
        keyFilename: Path.join(__dirname, "./recommender-key.json"),
    });

    const sessionPath = sessionClient.projectAgentSessionPath(
        process.env.PROJECT_ID,
        uuid()
    );

    const stream = {
        session: sessionPath,
        queryInput: {
            audioConfig: {
                audioEncoding: encoding,
                sampleRateHertz: hertz,
                languageCode: language,
            },
            singleUtterance: true,
        },
    };
    let streamData = null;

    const detectStream = sessionClient
        .streamingDetectIntent()
        .on("error", (error) => console.log(error))
        .on("data", (data) => {
            streamData = data;
        })
        .on("end", () => {
            // console.log("FINISHED", streamData.queryResult.fulfillmentText);
            res.status(200).send({
                data: streamData.queryResult.fulfillmentText,
            });
        });

    detectStream.write(stream);

    try {
        req.busboy.on("file", (_, file) => {
            pump(
                file,

                new Transform({
                    objectMode: true,

                    transform: (obj, _, next) => {
                        next(null, { inputAudio: obj });
                    },
                }),

                detectStream
            );
        });
    } catch (e) {
        console.log(`error  : ${e}`);
    }

    // res.status(200).send({ data: "OK" });
});

app.post("/webhook", (req, res) => {
    const amount = req.body.queryResult.parameters["unit-currency"].amount;
    const endpoint = `https://api.spoonacular.com/food/wine/recommendation?wine=merlot&maxPrice=${amount}&apiKey=cb91120884964757ae48e19f7f482971`;

    Axios.get(endpoint).then((response) => {
        const {
            title,
            price,
            imageUrl,
            description,
            ratingCount,
            link,
        } = response.data.recommendedWines[0];

        const agentResponse = [
            {
                text: {
                    text: [
                        `You can get the ${title} rated at ${ratingCount} for a cheap price of ${price} `,
                    ],
                },
            },
            {
                card: {
                    title: `${title} at $${price}`,
                    subtitle: description,
                    imageUri: imageUrl,
                    buttons: [
                        {
                            text: "Purchase Wine",
                            postback: link,
                        },
                    ],
                },
            },
        ];

        res.status(200).send({ fulfillmentMessages: agentResponse });
    });
});

export default app;
