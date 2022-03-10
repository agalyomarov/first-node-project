const Post = require("../../models/post.js");
const createPath = require("../../helpers/createPath.js");

const postStore = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((result) => {
      res.redirect("/posts");
    })
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"), { title: "Error" });
    });
};

module.exports = postStore;
