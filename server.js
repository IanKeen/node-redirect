const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/slack', (req, res) => {
    const destination = 'auth-swift://oauth-callback' + req.originalUrl;
    console.log(`redirecting ${req} to ${destination}`);

    const html = '<!DOCTYPE html>' +
                 '<html lang="en">' +
                 '    <head>' +
                 '    </head>' +
                 '    <body>' +
                 '        <div>' +
                 '            Taking you back to app...' +
                 '        </div>' +
                 '        <script type="text/javascript">' +
                 '        window.webkit.messageHandlers.bridge.postMessage({ url: "' + destination + '" });' +
                 '        </script>' +
                 '    </body>' +
                 '</html>';

    res.send(html);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
