const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", require("./routes/sessions.routes"));
app.use("/api/users", require("./routes/users.routes"));

app.use(require("./middlewares/handleErrors"));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
