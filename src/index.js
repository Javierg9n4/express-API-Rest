const express = require("express");
const app = express();
const PORT = 443;
const fs = require("fs");
const https = require("https");
const path = require("path");
const v1JwtAuthRouter = require("./routes/jwtAuthRoutes")
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");

app.use(express.json());

const jwt = require("jsonwebtoken");
const env = require("dotenv").config({
  path: path.resolve(__dirname, "../", ".env"),
}).parsed;

const JWT_SECRET = `"${env.JWT_SECRET}"`;

app.get("/api/jwt/set", (req, res) => {
  const token = jwt.sign({data: "jwt value"}, JWT_SECRET, {expiresIn: "24h"});
  res.json({token: token});
})




//app.use("api/jwt", v1JwtAuthRouter)
app.use("/api/users", v1UserRouter);
app.use("/api/teachers", v1TeacherRouter);
app.use("/api/students", v1StudentRouter);


https.createServer({
  cert: fs.readFileSync(path.join(__dirname, '..', 'certs', 'cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '..', 'certs', 'key.pem'))
}, app).listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})

/* app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
} */

//testing new branch