const loginService = require("../services/loginService");
const authorizationService = require("../services/authorizationService");
const userService = require("../services/userService");
const teacherService = require("../services/teacherService");

const showLoginPage = (req, res) => {
  try {
    res.status(200).render("login");
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const loginUser = async (req, res) => {
  const userData = {
    email: req.body.username,
    password: req.body.password,
  };

  try {
    const logedUser = await loginService.loginUser(userData);
    const logedUserData = {
      userId: logedUser.id,
      userMail: logedUser.email,
      isActive: logedUser.active,
      userType: logedUser.type,
    };

    authorizationService.setSession(req, logedUserData);

    const token = authorizationService.createJWT(logedUserData);

    res
      .status(200)
      .header("Authorization", "Bearer " + token)
      .redirect("/home");
  } catch (error) {
    console.log({ error: error?.message || error });
    res.status(error?.status || 500).render("error-login");
  }
};

const logOut = async (req, res) => {
  try {
    authorizationService.deleteSession(req);
    res.status(200).redirect("/login");
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const loginUserToken = async (req, res) => {
  console.log(req.body);
  const userData = {
    email: req.body.username,
    password: req.body.password,
  };

  try {
    const logedUser = await loginService.loginUser(userData);
    const logedUserName = logedUser.email;

    const token2 = authorizationService.createJWT2(logedUserName);

    res.status(200).json({ token: token2 });
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const signUp = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const newUser = await userService.createNewUserTypeTeacher(userData);

    const teacherData = {
      dni: req.body.dni,
      name: req.body.name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      UserId: newUser.id,
    };

    const newTeacher = await teacherService.createNewTeacherOrDeleteUser(teacherData);

    res.status(200).json({statuscode: 200, user:{id: newUser.id, email: newUser.email, active: newUser.active, type: newUser.type}})
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const home = async (req, res) => {
  res.render("home");
};

module.exports = {
  showLoginPage,
  loginUser,
  loginUserToken,
  signUp,
  logOut,
  home,
};
