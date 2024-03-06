const express = require("express");

const router = express.Router();

router
  .route("/*")
  .get((req, res) => {
    return res.send("We Don't Have Anything on this URL 😶‍🌫️ Check your url and try again");
  })
  .post((req, res) => {
    return res.send("Post Url Not Found Check your url and try again");
  });

module.exports = router;
