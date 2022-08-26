import { Router } from "express";

const routes = Router();

if (process.env.NODE_ENV === "development") {
  routes.get("/", (req, res) => res.redirect("http://localhost:3000"));
} else {
  routes.get("/", (req, res) => res.sendFile("/index.html"));
}

routes.get("*", (req, res) =>
  res.status(404).send("error 404: page not found")
);

export default routes;
