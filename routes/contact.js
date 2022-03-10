const express = require("express");
const contactIndex = require("../controllers/contact/index");
const router = express.Router();

router.get("/contacts", contactIndex);

module.exports = router;
