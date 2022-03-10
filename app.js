const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const create_path = (page) => {
  return path.resolve(__dirname, "views", `${page}.html`);
};
const server = http.createServer((req, res) => {
  console.log("Server started");
  console.log("Just for tes");
  res.setHeader("Content-Type", "text/html");
  let base_path = "";
  switch (req.url) {
    case "/index":
    case "/":
      res.statusCode = 200;
      base_path = create_path("index");
      break;
    case "/about":
      res.statusCode = 301;
      res.setHeader("Location", "/contacts");
      res.end();
      break;
    case "/contacts":
      res.statusCode = 200;
      base_path = create_path("contacts");
      break;
    default:
      res.statusCode = 404;
      base_path = create_path("error");
      break;
  }
  fs.readFile(base_path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(PORT, "localhost", (err) => {
  err ? console.error(err) : console.log(`listing post ${PORT}`);
});
