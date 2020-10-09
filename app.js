/* A minimalistic Express Application */

// a web framework for node
const express = require('express')
// a simple logger package for node
const morgan = require('morgan')
// a modeling tool to design collections for MongoDB
const mongoose = require('mongoose')
// a template engine for javascript
const { render } = require('ejs')

/* Settings for the database and env files */
require('dotenv').config()
let mongoDB = process.env.MANGO_DB

/* Creating an express app and connecting to MongoDB */
const app = express() // create the express app
const PORT = process.env.PORT || 3000 // check if the port is local or remote

// using mongoose to connect to mongoDB atlas - async, so it returns a promise.
// 'models' folder for mongoose schema
mongoose.connect(process.env.MONGODB_URI || mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT)) // listen to request as soon connection is made.
  .catch((err) => console.log(err)) // display an error in case connection isn't made.

/* Setting up engine for template views */
// 'views' folder for ejs
app.set('view engine', 'ejs') // the template engine is ejs <% %>

/* Middleware for the application */
// express middlewares
app.use(express.urlencoded({ extended: true })) // middleware to encode to json format *IMPORTANT*
app.use(express.static('public')) // make the folder public available for images, css, etc...
// morgan middleware to display a simple logger on node
app.use(morgan('tiny'))

/** Routers for the application **/
/* The best way is require a file coming from routes and then use a middleware to access it. A simple example
 -> at the top of the page: const blogRoutes = require('./routes/blogRoutes')
 -> app.use(blogRoutes)
*/

// index router
app.get('/', (req,res) => {
  res.render('index', {title: 'Express App is here'})
})