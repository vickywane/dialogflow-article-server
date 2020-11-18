const express = require("express");
const moongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const user = require("./user");

const app = express();
const PORT = process.env.PORT || 4040;

moongoose
    .connect("mongodb://localhost/monday", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB CONNECTED"))
    .catch((e) => console.log(e));

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/user", user);

app.use((req, res) => {
    console.log("route hit", req.query, req.body);
    res.send({ status: "error", message: "Route not found" });
});

app.listen(PORT, () => console.log(`🔥  server running on port ${PORT}`));
