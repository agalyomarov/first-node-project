const Post = require("../../models/post.js");
const postDelete = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
};

module.exports = postDelete;
