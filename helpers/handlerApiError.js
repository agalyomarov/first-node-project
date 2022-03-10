const handler = (res, err) => res.status(500).json(err.message);
module.exports = handler;
