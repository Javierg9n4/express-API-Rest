const express = require("express");
const app = express();
const PORT = 443;
const fs = require("fs");
const https = require("https");
const path = require("path");
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");

app.use(express.json());

app.use("/v1/users", v1UserRouter);
app.use("/v1/teachers", v1TeacherRouter);
app.use("/v1/students", v1StudentRouter);


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