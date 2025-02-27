// Create web server
// Create a route for comments
// Create a form for comments
// Create a route to handle the form

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.send('<form action="/comments" method="POST"><input type="text" name="comment"><input type="submit"></form>');
});

app.post('/comments', (req, res) => {
  res.send(`Thanks for your comment: ${req.body.comment}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Example: Handling form data