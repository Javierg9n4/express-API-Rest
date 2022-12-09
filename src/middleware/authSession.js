const isAuthBySession = (req, res, next) => {
  if (!req.session.isSessionSet) {
    res.status(403).json({message: "Session is not set"});
  }
  next();
};

module.exports = {
  isAuthBySession
}
