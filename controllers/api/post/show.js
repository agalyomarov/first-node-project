const Post = require("../../../models/post.js");
const handlerApiError = require("../../../helpers/handlerApiError");

const postShow = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => handlerApiError(res, err));
};

module.exports = postShow;
