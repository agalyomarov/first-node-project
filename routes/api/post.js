const postIndex = require("../../controllers/api/post/index");
const postStore = require("../../controllers/api/post/store");
const postShow = require("../../controllers/api/post/show");
const postUpdate = require("../../controllers/api/post/update");
const postDelete = require("../../controllers/api/post/delete");

const express = require("express");
const router = express.Router();

router.get("/api/posts", postIndex);
router.post("/api/post", postStore);
router.get("/api/post/:id", postShow);
router.put("/api/post/:id", postUpdate);
router.delete("/api/post/:id", postDelete);

module.exports = router;
