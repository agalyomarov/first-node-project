const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const homeRouter = require("./routes/home");
const postRouter = require("./routes/post");
const postApiRouter = require("./routes/api/post");
const contactRouter = require("./routes/contact");
const createPath = require("./helpers/createPath.js");
require("dotenv").config();

const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.bgKeyword("green").white;

const app = express();
app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log(successMsg("Connect to DB"));
  })
  .catch((err) => {
    console.error(errorMsg(err));
  });

app.listen(process.env.PORT, (err) => {
  err
    ? console.error(errorMsg(err))
    : console.log(successMsg(`listing post ${process.env.PORT}`));
});

app.use("/styles", express.static(__dirname + "/styles"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(homeRouter);
app.use(postRouter);
app.use(contactRouter);
app.use(postApiRouter);

app.get("/about", (req, res) => {
  const title = "About";
  res.redirect("/contacts", { title });
});

app.use((req, res) => {
  const title = "Error";
  res.status(404).render(createPath("error"), { title });
});
