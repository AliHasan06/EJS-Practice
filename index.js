const express = require("express");
const app = express();
const path = require("path");

app.set("view", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("chal rha hai");
});

app.listen(3000);
