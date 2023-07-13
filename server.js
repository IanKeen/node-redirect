const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/slack', (req, res) => {
  const destination = 'auth-swift://oauth-callback' + req.originalUrl;
  console.log(`redirecting ${req} to ${destination}`);

  const html = '<!DOCTYPE html>' +
                '<html lang="en">' +
                '    <head>' +
                '      <meta http-equiv="refresh" content="0; url=' + destination + '">' +
                '    </head>' +
                '    <body>' +
                '        <div>' +
                '            Taking you back to app...' +
                '        </div>' +
                '        <script src="https://code.jquery.com/jquery-1.11.2.min.js" type="text/javascript"></script>' +
                '        <script type="text/javascript">' +
                '        $(function() {' +
                '            setTimeout(function() {' +
                '              window.location = "' + destination + '";' +
                '            }, 200);' +
                '        });' +
                '        </script>' +
                '    </body>' +
                '</html>';

  res.send(html);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
