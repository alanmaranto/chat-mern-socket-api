const { verifyJWT } = require("../helpers/jwt");
const { userConnected, userDisconnected } = require('../controllers/socket.js')
class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const [isValid, uid] = verifyJWT(socket.handshake.query["x-token"]);

      if (!isValid) {
        console.log("socket no identificado");
        return socket.disconnect();
      }
      console.log("cliente conectado", uid);

      await userConnected(uid)

      socket.on("disconnect", async () => {
        console.log("cliente desconectado", uid);
        await userDisconnected(uid)
      });
    });
  }
}

module.exports = Sockets;
