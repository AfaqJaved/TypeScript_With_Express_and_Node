import express from "express";
import bodyParser from "body-parser";

class App {
  private app = express();

  constructor() {
    this.setMiddlewares();
    this.setRoutes();
    this.startServer();
  }

  setMiddlewares() {
    //This will be the place where all the middlwares will go
    this.app.use(bodyParser.json());
  }

  setRoutes() {
    //This will be the place where all the routes will go
    this.app.get("/", (req, res) => {
      res.send("Hello World From Express");
    });
  }

  startServer() {
    //will start the server here
    this.app.listen(3000, () => {
      console.log("server is started at port 3000");
    });
  }
}

const app = new App();
