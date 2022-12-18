const checkIfIsAdmin = (req, res, next) => {
  let userData;
  if (req.session.user) {
    userData = req.session.user;
  } else if (req.jwt) {
    userData = req.jwt;
  }

  if (userData && userData.userType === "admin") {
    next();
  } else {
    res.status(401).send({ error: 'Unauthorized, only admins can access this page' });
  }
};

const checkIfIsAdmin2 = (req, res, next) => {
  let userData;
  if (req.session.user) {
    userData = req.session.user;
  } else if (req.jwt) {
    userData = req.jwt;
  }
  req.userData = userData;

  if (userData && userData.userType === "admin") {
    res.status(200).redirect("/users");
  } else {
    next();
  }
};


module.exports = {
  checkIfIsAdmin,
  checkIfIsAdmin2
};
