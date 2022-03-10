const { Server } = require("socket.io");
const isAutheticated = require("./middlewares/isAuthenticated");
const { isMember } = require("./middlewares/isAuthorizated");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: ["*"],
  });

  io.engine.on("headers", (headers, req) => {
    headers["autorization"] = req.handshake.auth.token;
  });

  io.use((socket, next) => {
    isAutheticated(socket, {}, next);
  }).use((socket, next) => {
    isMember(socket.request, {}, next, chat)
  }).on("connection", (socket) => {
    // console.log(socket);
    socket.emit("read:message", "1");
  });
};
