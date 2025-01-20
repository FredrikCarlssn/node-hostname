var express = require("express");
var router = express.Router();
var os = require("os");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({
    hostname: os.hostname(),
    version: process.env.npm_package_version,
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
