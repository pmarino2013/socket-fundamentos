var socket = io();

//escuchando
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
//escuchando
socket.on("disconnect", () => {
  console.log("Perdimos la conexion con el servidor");
});

//enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Pablo",
    mensaje: "Estoy enviando info desde cliente",
  },
  function (resp) {
    console.log("Respuesta Server: ", resp);
  }
);

//recibiendo mensaje del servidor
socket.on("enviarMensaje", function (resp) {
  console.log(resp.usuario);
  console.log(resp.mensaje);
});
