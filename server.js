const app = require('express')();

const port = process.env.PORT || 80;

app.get('', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`App up at port ${port}`);
});