const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");

app.use(express.json());

app.use("/v1/users", v1UserRouter);
app.use("/v1/teachers", v1TeacherRouter);
app.use("/v1/students", v1StudentRouter);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

//testing new branch