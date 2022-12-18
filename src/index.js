const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const mustacheExpress = require("mustache-express");
const env = require("dotenv").config({
  path: path.resolve(__dirname, "../", ".env"),
}).parsed;
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");
const v1LoginRouter = require("./routes/loginRoutes");
const v1AdminRouter = require("./routes/adminRoutes");
const {
  isAuthBySessionOrJwt,
  isLogedIn,
} = require("./middlewares/authMiddleware");
const {
  checkIfIsAdmin,
  checkIfIsAdmin2,
} = require("./middlewares/checkIfIsAdmin");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: `"${env.SESSION_SECRET}"`,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api/user", isAuthBySessionOrJwt, v1UserRouter);
app.use("/api/teacher", isAuthBySessionOrJwt, v1TeacherRouter);
app.use("/api/student", isAuthBySessionOrJwt, v1StudentRouter);
app.use("/", v1LoginRouter);
app.get("/users", isAuthBySessionOrJwt, checkIfIsAdmin, v1AdminRouter);
app.get("/home", isLogedIn, checkIfIsAdmin2, v1AdminRouter);

module.exports = {
  app,
};