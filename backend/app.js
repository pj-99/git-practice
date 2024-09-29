const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})