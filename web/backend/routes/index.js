var express = require("express");
var router = express.Router();
const Animation = require("./../JSON/Animation.json");
const Movie = require("./../JSON/Movie.json");
const Series = require("./../JSON/Series.json");
const Music = require("./../JSON/Music.json");
const MusicVideo = require("./../JSON/Music Video.json");
const Software = require("./../JSON/Software.json");
const PCGame = require("./../JSON/PCGame.json");
const Application = require("./../JSON/Application.json");
const AndroidGame = require("./../JSON/Android Game.json");

/* GET home page. */
router.get("/", function (req, res) {
  res.send("Wellcome to Back-End Server");
});

// router.get("/Animation", function (req, res) {
//   res.send(Animation);
// });

router.get("/:Partion", function (req, res) {
  if (req.params.Partion === "Animation") {
    res.send(Animation);
  } else if (req.params.Partion === "Movie") {
    res.send(Movie);
  } else if (req.params.Partion === "Series") {
    res.send(Series);
  } else if (req.params.Partion === "Music") {
    res.send(Music);
  } else if (req.params.Partion === "MusicVideo") {
    res.send(MusicVideo);
  } else if (req.params.Partion === "Software") {
    res.send(Software);
  } else if (req.params.Partion === "PCGame") {
    res.send(PCGame);
  } else if (req.params.Partion === "Application") {
    res.send(Application);
  } else if (req.params.Partion === "AndroidGame") {
    res.send(AndroidGame);
  }
});

router.post("/login", function (req, res) {
  let result = users.find((user) => user.name == req.body.name);

  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: "Successful login !!!",
      });
    } else {
      res.status(200).send({
        message: "Password Incorrent !!!",
      });
    }
  } else {
    res.status(200).send({
      message: "Name Not Found !!!",
    });
  }
});

module.exports = router;
