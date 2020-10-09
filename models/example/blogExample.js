const mongoose = require('mongoose')
// create an variable to access the Schema property.
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true })

// Create the model to provide the interface.
const Blog = mongoose.model('Blog', blogSchema)
// export the module to be used elsewhere
module.exports = Blog
