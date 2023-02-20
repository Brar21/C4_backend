const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middleware/Authentication");
const { UserRoutes } = require("./Routes/User.Routes");
const { PostRoutes } = require("./Routes/Posts.Routes");
require("dotenv").config()
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});
app.use("/users", UserRoutes);
app.use(authentication);
app.use("/posts", PostRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Server is running on port 4500");
  } catch (err) {
    console.log({ error: err.message });
  }
});
