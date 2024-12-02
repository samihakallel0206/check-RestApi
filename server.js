// require express
const express = require("express");
//require dotenv
require("dotenv").config();

//instance app
const app = express();
//middelware  bodyparser
app.use(express.json())
//connect to DB
const connectDB = require("./config/connectDB");
connectDB();

// routes
// app.get('/test', (req, res) => {
//     res.end('THIS is A TEST!!!')
// })

app.use('/api/contact', require('./routes/contact'))

//PORT
const PORT = process.env.PORT || 2500;

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on PORT : http://localhost:${PORT}`);
});
