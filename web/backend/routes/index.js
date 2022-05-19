var express = require("express");
var router = express.Router();
const Animation = require("./../JSON/Animation.json");

/* GET home page. */
router.get("/", function (req, res) {
  res.send("Wellcome to Back-End Server");
});

router.get("/login", function (req, res) {
  res.send(Animation);
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
