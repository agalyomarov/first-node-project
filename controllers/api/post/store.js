const Post = require("../../../models/post.js");
const handlerApiError = require("../../../helpers/handlerApiError");

const postStore = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((result) => res.status(200).json(result))

    .catch((err) => handlerApiError(res, err));
};

module.exports = postStore;
