const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const UserRoutes = require("./routes/userRoutes");
const Database = require("./data/config/database");

Database.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Connection error. ", err));

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/api/User", UserRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
