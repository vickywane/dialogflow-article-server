const express = require("express");
const UserModel = require("./userModel");
const jwt = require("jsonwebtoken");
const querystring = require('querystring');

const app = express.Router();

app.get("/authorize-user", (req, res) => {
  const { token } = req.query;

  //   const { userId, accountId, backToUrl } = jwt.verify(
  //     token,
  //     process.env.CLIENT_SECRET
  //   );

  res.status(200).send(
    "https://auth.monday.com/oauth2/authorize?" +
      querystring.stringify({
        client_id: "9f2049819de70ea76d17b25c9375bd9a",
        state: token,
      })
  );

//   console.log(userId, accountId, backToUrl);

//   return res.status(200).send({ data: "redirect url" });
});

module.exports = app;
