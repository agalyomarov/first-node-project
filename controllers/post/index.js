const createPath = require("../../helpers/createPath.js");
const Post = require("../../models/post.js");

const postIndex = (req, res) => {
  const title = "Posts";
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath("posts"), { title, posts }))
    .catch((err) => console.error(err));
};

module.exports = postIndex;
