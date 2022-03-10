const Post = require("../../models/post.js");
const createPath = require("../../helpers/createPath.js");

const postShow = (req, res) => {
  const title = `Post ${req.params.id}`;
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("post"), { title, post }))
    .catch((err) => console.error(err));
};

module.exports = postShow;
