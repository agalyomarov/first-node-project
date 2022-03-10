const Post = require("../../models/post.js");

const postUpdate = (req, res) => {
  const { title, author, text } = req.body;
  Post.findByIdAndUpdate(req.params.id, { title, author, text })
    .then(() => res.redirect(`/posts/${req.params.id}`))
    .catch((err) => console.error(err));
};

module.exports = postUpdate;
