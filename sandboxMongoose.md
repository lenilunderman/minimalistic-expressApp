
/* sandbox for mongoose and mongodb database */
// const Blog = require('../models/example/blogExample')

//   // create a new instance and save to the blog collection
//   const blog = new Blog({
//     title: 'gene',
//     snippet: 'the blog about bears',
//     body: 'more information soon'
//   })

//   blog.save()  // since it takes some time, it retuns a promise.
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })

// })

// // get all blogs
// app.get('/all-blogs', (req, res) => {
//   //name of the collection . find() to list all.
//   Blog.find()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// // get single post
// app.get('/single-blog', (req, res) => {
//   //name of the collection . find() to list all.
//   Blog.findById('5f7e91df94695b5f69b5ebbc')
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })

// 404 pages...
// app.use((req, res) => {
// res.status(404).render('404', { title: '404' })
// })