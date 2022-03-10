const express = require("express");
const app = express();
require("./lib/polyfills");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/sessions", require("./routes/sessions.routes"));
app.use("/api/channels", require("./routes/channels.routes"));
app.use("/api/messages", require("./routes/messages.routes"));
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/chats", require("./routes/chats.routes"));

app.use(require("./middlewares/handleErrors"));

module.exports = app;
