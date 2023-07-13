const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect('auth-swift://oauth-callback/slack' + req.originalUrl);
});

app.listen(port, () => console.log(`listening on port ${port}!`))

