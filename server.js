require('dotenv').config()

const express = require('express')
const taskRoutes = require('..\backend\routes\tache.js');
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/tache',taskRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

    


// Listen for requests

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
});



