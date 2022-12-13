const express = require("express");
const app = express();
const PORT = 443;
const fs = require("fs");
const https = require("https");
const path = require("path");
const session = require("express-session");
const mustacheExpress = require("mustache-express")
const env = require("dotenv").config({path: path.resolve(__dirname, "../", ".env")}).parsed;
const v1SessionRouter = require("./routes/sessionAuthRoutes");
const v1JwtAuthRouter = require("./routes/jwtAuthRoutes");
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");

app.engine("html", mustacheExpress());

app.set("view engine", "html");
app.set("views", __dirname + "/views");


app.use(express.json());
app.use(session({
  secret : `"${env.SESSION_SECRET}"`,
  resave: false,
  saveUninitialized: false
}));

app.get("/login", (req, res) => {
  res.render("login");
})
app.post("/login", (req, res) => {
  res.send(req.body)

});

app.use("/api/session", v1SessionRouter)
app.use("/api/jwt", v1JwtAuthRouter)
app.use("/api/users", v1UserRouter);
app.use("/api/teachers", v1TeacherRouter);
app.use("/api/students", v1StudentRouter);


https.createServer({
  cert: fs.readFileSync(path.join(__dirname, '..', 'certs', 'cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '..', 'certs', 'key.pem'))
}, app).listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})

