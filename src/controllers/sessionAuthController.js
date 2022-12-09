const setSession = (req, res) => {
  req.session.isSessionSet = true;
  console.log(req.session);
  res.send("Session is set");
};

const deleteSession = (req, res) => {
  delete req.session.isSessionSet;
  console.log(req.session);
  res.send("Session variable removed");
};


module.exports = {
  setSession,
  deleteSession,
}
