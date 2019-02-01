const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/api', (req, res) => res.send('This is an API? Really?'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  // res.send('hewwo')
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
