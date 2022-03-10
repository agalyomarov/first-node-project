const Post = require("../../../models/post.js");
const handlerApiError = require("../../../helpers/handlerApiError");

const postUpdate = (req, res) => {
  const { title, author, text } = req.body;
  Post.findByIdAndUpdate(req.params.id, { title, author, text }, { new: true })
    .then((post) => res.status(200).json(post))
    .catch((err) => handlerApiError(res, err));
};

module.exports = postUpdate;
