const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
//--------------------------------------Handle-------------------------------
const onlineUser = {};
const connectedSockets = new Set();
io.on("connection", (socket) => {
  connectedSockets.add(socket.id);
  console.log(
    `User connected ! ------------ ${io.engine.clientsCount} ---------------: \n`,
    connectedSockets
  );
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    connectedSockets.delete(socket.id);
    console.log(
      `User connected AFTER disconect ! ------------ ${io.engine.clientsCount} ---------------: \n`,
      connectedSockets
    );
  });
  //------------------On from client--------------
  socket.on("logged", (userId) => {
    onlineUser[userId] = true;
    console.log(userId + " đang online");
  });
  socket.on("loggout", (userId) => {
    delete onlineUser[userId];
  });
  socket.on("getOnlineFriend-client", (friends) => {
    const onlineFriends = friends.filter((friend) => onlineUser[friend]);
    socket.emit("getOnlineFriend-server", onlineFriends);
    console.log(onlineFriends);
  });
});
//--------------------------------------Connect server to port-------------------------------
var runServer = server.listen(8900, "localhost", () => {
  var host = runServer.address().address;
  var port = runServer.address().port;
  console.log("START SERVER", "http://" + host + ":" + port);
});

// server.listen(8900, () => {
//   console.log("START SERVER !");
// });
