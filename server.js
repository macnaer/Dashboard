const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const UserRoutes = require("./routes/userRoutes");
const CategoryRoutes = require("./routes/categoryRoutes");
const PostRoutes = require("./routes/postRoutes");
const Database = require("./data/config/database");

Database.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Connection error. ", err));

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/api/User", UserRoutes);
app.use("/api/Category", CategoryRoutes);
app.use("/api/Post", PostRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
