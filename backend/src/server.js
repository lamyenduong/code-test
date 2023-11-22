require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/database");
const apiRoute = require("./routes/api");
const app = express();

//server
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//
app.use(
  cors({
    origin: "http://localhost:4200",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config
apiRoute(app);

app.listen(port, hostname);
