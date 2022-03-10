const postIndex = require("../controllers/post/index");
const postCreate = require("../controllers/post/create");
const postStore = require("../controllers/post/store");
const postShow = require("../controllers/post/show");
const postEdit = require("../controllers/post/edit");
const postUpdate = require("../controllers/post/update");
const postDelete = require("../controllers/post/delete");

const express = require("express");
const router = express.Router();

router.get("/posts", postIndex);
router.get("/add-post", postCreate);
router.post("/add-post", postStore);
router.get("/posts/:id", postShow);
router.get("/edit/:id", postEdit);
router.put("/edit/:id", postUpdate);
router.delete("/posts/:id", postDelete);

module.exports = router;
