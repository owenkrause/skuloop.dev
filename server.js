const express = require('express');
const app = express();

const port = process.env.PORT || 80;

app.use(express.static(__dirname))
app.set('view engine', 'html');
app.get('/', (req, res) => {
  res.sendFile(__dirname + './index.html');
})

app.listen(port, () => {
  console.log(`App up at port ${port}`);
});