import express from "express";
import test from "./test";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "api is running!",
  });
});

app.get("/api", (req, res, next) => {
  res.status(200).json(test);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
