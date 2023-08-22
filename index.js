const express = require('express');
const app = express();
const port = 8080;

// IMPORT PROVIDERS
const mangalivre = require('./providers/mangalivre');

const providers = [mangalivre];

app.set('views', './static/');
app.use(express.static('./public/'));
app.engine('html', require('ejs').renderFile);

// INIT METHODS
providers.forEach((provider) => {
  provider.init(app);
});

app.get('*', (req, res) => {
  res.status(401);
  res.render('html/401.html');
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
