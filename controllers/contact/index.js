const Contact = require("../../models/contact.js");
const createPath = require("../../helpers/createPath.js");

const contactIndex = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => res.render(createPath("contacts"), { title, contacts }))
    .catch((err) => console.error(err));
};

module.exports = contactIndex;
