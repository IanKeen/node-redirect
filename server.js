const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/slack', (req, res) => {
  const destination = 'auth-swift://oauth-callback' + req.originalUrl;
  console.log(`redirecting ${req} to ${destination}`);

  const html = 'hello';
  res.send(html);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
