const createPath = require("../../helpers/createPath.js");

const postCreate = (req, res) => {
  const title = "Add post";
  res.render(createPath("create"), { title });
};

module.exports = postCreate;
