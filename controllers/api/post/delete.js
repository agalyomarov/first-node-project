const Post = require("../../../models/post.js");
const handlerApiError = require("../../../helpers/handlerApiError");

const postDelete = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => handlerApiError(res, err));
};

module.exports = postDelete;
