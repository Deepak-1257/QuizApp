const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
require("dotenv").config();

connectToMongo();
const app = express()
const port = 5000;
const corsOptions={
  origin:"https://quizapp-0hdi.onrender.com" 
}
app.use(cors(corsOptions))
app.use(express.json())
//available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/Participent',require('./routes/Participent'))
app.listen(port, () => {
  console.log(`Quiz App backend listening at ${port}`)
})
