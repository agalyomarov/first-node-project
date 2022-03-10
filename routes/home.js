const postIndex = require("../controllers/home/index");

const express = require("express");
const router = express.Router();

router.get("/", postIndex);

module.exports = router;
