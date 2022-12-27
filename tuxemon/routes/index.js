var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", { title: "Tuxemon", page_name: "index" });
});

router.get("/about.html", function (req, res) {
  res.render("pages/about", { title: "Tuxemon | About", page_name: "about" });
});

router.get("/download.html", function (req, res) {
  res.render("pages/download", {
    title: "Tuxemon | Download",
    page_name: "download",
  });
});

router.get("/linux-install.html", function (req, res) {
  res.render("pages/linux-install", {
    title: "Tuxemon | Linux Instructions",
    page_name: "linux",
  });
});

router.get("/donate.html", function (req, res) {
  res.render("pages/donate", {
    title: "Tuxemon | Donations",
    page_name: "donate",
  });
});

module.exports = router;
