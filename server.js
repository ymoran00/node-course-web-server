const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 80; // Need to set back to 3000!

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public', {
  extensions: ['html', 'htm'], 
}));

app.use((req, res, next) => {
  var now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to log file');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// })

app.get('/', (req, res) => {
  res.send('Hello express');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'BAD_URL'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
