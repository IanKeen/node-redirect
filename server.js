const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.all('*', (req, res) => {
  console.log('redirecting ${req}');
  res.redirect('auth-swift://oauth-callback/slack' + req.originalUrl);
});

app.listen(port, () => console.log(`listening on port ${port}!`))

