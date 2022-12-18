const { app } = require("./src/index");
const PORT = 443;
const fs = require("fs");
const https = require("https");
const path = require("path");

https
  .createServer(
    {
      cert: fs.readFileSync(path.join(__dirname, ".", "certs", "cert.pem")),
      key: fs.readFileSync(path.join(__dirname, ".", "certs", "key.pem")),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
