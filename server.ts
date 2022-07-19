import express from "express";
import test from "./test";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(express.static("client"))

app.get("/", (req, res, next) => {
  res.sendFile("/index.html");
});

app.get("/api", (req, res, next) => {
  res.status(200).json(test);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
