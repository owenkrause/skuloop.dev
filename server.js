const express = require('express');
const app = express();

const port = process.env.PORT || 80;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.get('', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`App up at port ${port}`);
});