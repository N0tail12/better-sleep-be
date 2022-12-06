const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressJwt = require("express-jwt");
const errorHandling = require("./middleware/error");
require("pretty-error").start();
if (!process.env.PORT) require("dotenv-flow").config({ path: "environments/" });

// Middleware
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested, Content-Type, Accept Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(
  expressJwt({ secret: process.env.JWT_SECRET }).unless({
    path: [
      "/api/login"
      // "/api/password/forgot",
      // "/api/password/reset",
      // "/api/asset-management/asset/bind-confirm",
      // "/api/v2/jira-project/projects",
      // "/api/v2/timesheet",
      // /^\/api\/v2\/files\/.*/
    ]
  })
);

// Router
app.use(require("./routes"));

// Error handler, send stacktrace only during development
app.use(errorHandling);

// Run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
