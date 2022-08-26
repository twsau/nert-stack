import express from "express";
import api from "./api";
import routes from "./routes";

class App {
  public server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.api();
    this.routes();
  }

  api() {
    this.server.use("/api", api);
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static("build/client"));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
