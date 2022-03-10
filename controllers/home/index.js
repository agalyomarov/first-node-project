const createPath = require("../../helpers/createPath.js");

const homeIndex = (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
};

module.exports = homeIndex;
