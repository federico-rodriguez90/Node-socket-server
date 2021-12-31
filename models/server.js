const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {};

    //Middlewares
    this.middlewares();

    //Rutas de mi app
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}!`);
    });
  }
}

module.exports = Server;
