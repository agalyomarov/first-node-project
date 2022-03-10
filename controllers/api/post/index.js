const Post = require("../../../models/post.js");
const handlerApiError = require("../../../helpers/handlerApiError");

const postIndex = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => handlerApiError(res, err));
};

module.exports = postIndex;
