const express = require('express')
const hbs = require ('hbs')
const app =  express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('home', {
    title : "Welcome!",
    css : ['home'],
  })
})


app.get('/about', (req, res) => {
  res.render('about', {
    title : "About the artist",
    css : ['about'],
  })
})


app.get('/works', (req, res) => {
  res.render('works', {
    title : "Works done",
    css : ['works'],
  })
})


// app.get('/gallery', (req, res) => {
//   res.render('gallery', {
//     title : "Photo gallery",
//     css : ['photo-gallery'],
//   })
// })


app.listen(7000, () => {
  console.log('http://localhost:7000')
})