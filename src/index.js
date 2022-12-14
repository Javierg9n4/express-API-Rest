const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const v1UserRouter = require("./routes/userRoutes");
const v1TeacherRouter = require("./routes/teacherRoutes");
const v1StudentRouter = require("./routes/studentRoutes");

app.use(express.json());

app.use("/user", v1UserRouter);
app.use("/teacher", v1TeacherRouter);
app.use("/student", v1StudentRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
