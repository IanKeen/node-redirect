const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/slack', (req, res) => {
  console.log(`redirecting ${req} to auth-swift://oauth-callback${req.originalUrl}`);
  res.redirect("auth-swift://oauth-callback" + req.originalUrl);
});

app.listen(port, () => console.log(`listening on port ${port}!`))

