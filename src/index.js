const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");

app.use(express.json());

app.use("/api/users", v1UserRouter);
app.use("/api/teachers", v1TeacherRouter);
app.use("/api/students", v1StudentRouter);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
