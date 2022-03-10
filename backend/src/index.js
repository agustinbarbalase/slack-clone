const app = require("./app");
const { createServer } = require("http");
const socket = require("./socket");

const PORT = process.env.PORT || 3001;

const httpServer = createServer(app);
socket(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
