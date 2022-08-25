import { Router } from "express";

const api = Router();

api.get("/hello-world", (req, res) =>
  res.status(200).json({ message: "Hello World!" })
);

export default api;
