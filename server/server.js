const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const path = require("path");
const { SSL_OP_LEGACY_SERVER_CONNECT } = require("constants");

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//exporto io para usarlo en socket.js
module.exports.io = socketIO(server);

//tarigo socket.js para poder usarlo
require("./sockets/socket.js");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
