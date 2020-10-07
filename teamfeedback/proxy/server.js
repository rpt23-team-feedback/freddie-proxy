const express = require('express');
const app = express();
const port = 3202;
const path = require('path');

app.use(express.static('public'));

// client will make a GET request to proxy server, proxy server serves html file which has script tags for all the modules.
// Proxy server will then be served code from all the module's servers


app.listen(port, () => {
  `App listening at http://localhost:${port}`
});