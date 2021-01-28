const { io } = require("../server"); //importo io

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  //Recibiendo info del cliente
  client.on("enviarMensaje", (datos, callback) => {
    console.log(datos);

    client.broadcast.emit("enviarMensaje", datos);
    // if (datos.usuario) {
    //   callback({
    //     mensaje: "Salio todo bien",
    //   });
    // } else {
    //   callback({
    //     mensaje: "SALIO TODO MAL!",
    //   });
    // }
  });

  //enviando info al cliente
  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido al chat de RollingCode",
  });
});
