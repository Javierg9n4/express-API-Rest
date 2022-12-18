const { app } = require("../src/index");
const request = require("supertest");

describe("Testing /api/user CRUD with no session or JWT", () => {
  test("should respond with status 401 when tryin to get all users", async () => {
    const res = await request(app).get("/api/user").send();
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when tryin to get user by id", async () => {
    const res = await request(app)
      .get("/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7")
      .send();
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to create a new user", async () => {
    const res = await request(app)
      .post("/api/user")
      .send({ email: "example@example.com", password: "1234" });
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to update a user", async () => {
    const res = await request(app)
      .put("/api/user")
      .send({ email: "user1Updated@example.com", password: "asdf" });
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to delete a user", async () => {
    const res = await request(app)
      .delete("/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7")
      .send();
    expect(res.status).toBe(401);
  });
});

describe("Testing /api/teacher CRUD with no session or JWT", () => {
  test("should respond with status 401 when tryin to get all teachers", async () => {
    const res = await request(app).get("/api/teacher").send();
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when tryin to get teacher by id", async () => {
    const res = await request(app)
      .get("/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0")
      .send();
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to create a new teacher", async () => {
    const res = await request(app).post("/api/teacher").send({
      id: "5e052f07-d7da-452e-b0a2-9ee607cb93b0",
      dni: "11111111A",
      name: "Teacher",
      last_name: "One",
      date_of_birth: "1996-05-25",
      UserId: "22fdbaac-5e36-40e1-87d0-ffb45146d7a7",
    });
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to update a teacher", async () => {
    const res = await request(app).put("/api/teacher").send({
      id: "5e052f07-d7da-452e-b0a2-9ee607cb93b0",
      dni: "11111111A",
      name: "Teacher",
      last_name: "OneUpdated",
      date_of_birth: "1996-05-25",
      UserId: "22fdbaac-5e36-40e1-87d0-ffb45146d7a7",
    });
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to delete a teacher", async () => {
    const res = await request(app)
      .delete("/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0")
      .send();
    expect(res.status).toBe(401);
  });
});

describe("Testing /api/student CRUD with no session or JWT", () => {
  test("should respond with status 401 when tryin to get all students", async () => {
    const res = await request(app).get("/api/student").send();
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when tryin to get student by id", async () => {
    const res = await request(app)
      .get("/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232")
      .send();
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to create a new student", async () => {
    const res = await request(app).post("/api/student").send({
      id: "9be30696-84bf-4faa-a6b8-6dafc6a7d232",
      dni: "00000001A",
      name: "Student",
      last_name: "One",
      date_of_birth: "1996-05-25",
      TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0",
    });
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to update a student", async () => {
    const res = await request(app).put("/api/student").send({
      id: "9be30696-84bf-4faa-a6b8-6dafc6a7d232",
      dni: "00000001A",
      name: "Student",
      last_name: "One",
      date_of_birth: "1996-05-25",
      TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0",
    });
    expect(res.status).toBe(401);
  });

  test("should respond with status 401 when trying to delete a student", async () => {
    const res = await request(app)
      .delete("/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232")
      .send();
    expect(res.status).toBe(401);
  });
});

describe("Testing /api/user CRUD whit session authorization", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user1@example.com", password: "asdf" });
    expect(res.status).toBe(302);
    token = res.headers.authorization;
  });

  test("GET /api/user should respond with an array of users", async () => {
    const res = await request(app)
      .get("/api/user")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual("All users found");
    expect(res.body.allUsers).toBeInstanceOf(Array);
    expect(res.body.allUsers.length).toBeGreaterThan(0);
  });

  test("GET /api/user/:id should respond with an object containing the user data", async () => {
    const res = await request(app)
      .get("/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a7")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User found");
    expect(res.body.userById).toHaveProperty(
      "id",
      "22fdbaac-5e36-40e1-87d0-ffb45146d7a7"
    );
  });

  test("POST /api/user should create a new user and return the new user object", async () => {
    const res = await request(app)
      .post("/api/user")
      .set("Authorization", token)
      .send({ email: "example101@example.com", password: "1234" });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User created succesfully");
    expect(res.body.newUser).toHaveProperty("email", "example101@example.com");
  });

  test("PUT /api/user/:id should update the user with the provided id", async () => {
    const res = await request(app)
      .put("/api/user/75112abd-e7aa-4bbd-af4a-3747e6f533c1")
      .set("Authorization", token)
      .send({ email: "user2Updated@example.com", password: "1234" });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User updated successfully");
    expect(res.body.updatedUser).toHaveProperty(
      "email",
      "user2Updated@example.com"
    );
  });

  test("DELETE /api/user/:id should delete the user with the provided id", async () => {
    const res = await request(app)
      .delete("/api/user/3c90241d-e28c-45a7-9d0b-a2456d1d2638")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual("User deleted successfully");
    console.log(res.body);
  });
});

describe("Testing /api/teacher CRUD whit session authorization", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user1@example.com", password: "asdf" });
    expect(res.status).toBe(302);
    token = res.headers.authorization;
  });

  test("GET /api/teacher should respond with an array of teachers", async () => {
    const res = await request(app)
      .get("/api/teacher")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual("All teachers found");
    expect(res.body.allTeachers).toBeInstanceOf(Array);
    expect(res.body.allTeachers.length).toBeGreaterThan(0);
  });

  test("GET /api/teacher/:id should respond with an object containing the teacher data", async () => {
    const res = await request(app)
      .get("/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Teacher by id found");
    expect(res.body.teacherById).toHaveProperty(
      "id",
      "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
    );
  });

  test("POST /api/teacher should create a new teacher and return the new teacher object", async () => {
    const res = await request(app)
      .post("/api/teacher")
      .set("Authorization", token)
      .send({
        dni: "12121212W",
        name: "Testing",
        last_name: "Teacher",
        date_of_birth: "2000-10-01",
        UserId: "651bf859-ef3d-4824-bdca-50dc937060a3",
      });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("New teacher created");
    expect(res.body.newTeacher).toHaveProperty("name", "Testing");
  });

  test("PUT /api/teacher/:id should update the teacher with the provided id", async () => {
    const res = await request(app)
      .put("/api/teacher/5e052f07-d7da-452e-b0a2-9ee607cb93b0")
      .set("Authorization", token)
      .send({
        dni: "11111111A",
        name: "TeacherUpdated",
        last_name: "One",
        date_of_birth: "1996-05-25",
        UserId: "22fdbaac-5e36-40e1-87d0-ffb45146d7a7",
      });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Teacher updated succesfully");
    expect(res.body.updatedTeacher).toHaveProperty("name", "TeacherUpdated");
  });
  
  test("DELETE /api/teacher/:id should delete the teacher with the provided id", async () => {
    const res = await request(app)
      .delete("/api/teacher/d864009c-d072-4a0d-b13c-e34b48f8ed01")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual("Teacher deleted successfully");
  });
});

describe("Testing /api/student CRUD whit session authorization", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user1@example.com", password: "asdf" });
    expect(res.status).toBe(302);
    token = res.headers.authorization;
  });

  test("GET /api/student should respond with an array of students", async () => {
    const res = await request(app)
      .get("/api/student")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual("All students found");
    expect(res.body.allStudents).toBeInstanceOf(Array);
    expect(res.body.allStudents.length).toBeGreaterThan(0);
  });
 
  test("GET /api/student/:id should respond with an object containing the student data", async () => {
    const res = await request(app)
      .get("/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Student by id found");
    expect(res.body.studentById).toHaveProperty(
      "id",
      "9be30696-84bf-4faa-a6b8-6dafc6a7d232"
    );
  });

  test("POST /api/student should create a new student and return the new student object", async () => {
    const res = await request(app)
      .post("/api/student")
      .set("Authorization", token)
      .send({
        dni: "21212121M",
        name: "Testing",
        last_name: "Student",
        date_of_birth: "2000-10-01",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0",
      });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("New student created");
    expect(res.body.newStudent).toHaveProperty("name", "Testing");
  });

  test("PUT /api/student/:id should update the student with the provided id", async () => {
    const res = await request(app)
      .put("/api/student/9be30696-84bf-4faa-a6b8-6dafc6a7d232")
      .set("Authorization", token)
      .send({
        dni: "00000001A",
        name: "StudentUpdated",
        last_name: "One",
        date_of_birth: "1996-05-25",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Student updated succesfully");
    expect(res.body.updatedStudent).toHaveProperty("name", "StudentUpdated");
  });

  test("DELETE /api/student/:id should delete the student with the provided id", async () => {
    const res = await request(app)
      .delete("/api/student/d03dd89d-ddba-44e4-83a0-1edf417a3eb3")
      .set("Authorization", token)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual("Student deleted successfully");
  }); 
});

describe("Testing /api/user CRUD with wrong or missing parameters", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user1@example.com", password: "asdf" });
    expect(res.status).toBe(302);
    token = res.headers.authorization;
  });

  test("GET /api/user:id should throw an error when user id does not exists", async () => {
    const res = await request(app).get("/api/user/22fdbaac-5e36-40e1-87d0-ffb45146d7a6").set("Authorization", token).send();
    expect(res.status).toBe(404);
    expect(res.body.error).toEqual("User not found for provided user id");
  })

  


})


/* desccribe("Testing password encryption", () => {
  test("Should throw an error when trying to get a user with ")



}); */