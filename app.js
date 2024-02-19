const express = require('express');
const app = express();
const port = 3400;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
