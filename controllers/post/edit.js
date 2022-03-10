const Post = require("../../models/post.js");
const createPath = require("../../helpers/createPath.js");

const postEdit = (req, res) => {
  const title = `Post edit ${req.params.id}`;
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("edit"), { title, post }))
    .catch((err) => console.error(err));
};

module.exports = postEdit;
