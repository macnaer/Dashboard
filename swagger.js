const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./routes/userRoutes.js",
  "./routes/postRoutes.js",
  "./routes/categoryRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles);
