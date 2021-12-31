// Referencias HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

// Conexion con el servidor
const socket = io();

// Listeners ON(para escuchar)

socket.on("connect", () => {
  //   console.log("Conectado al servidor");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  //   console.log("Desconectado del servidor");
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});

socket.on("enviar-mensaje", (payload) => {
  console.log("Mensaje recibido:", payload);
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: "ASD123",
    fecha: new Date().getTime(),
  };

  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el server:", id);
  });
});
