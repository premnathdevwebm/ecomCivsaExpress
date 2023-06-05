require("dotenv").config()
const express = require('express');
const cors = require("cors")
const path = require('path');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();
const port = 3000; 

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/ccav', exampleRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});