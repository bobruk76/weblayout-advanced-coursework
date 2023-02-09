const express = require('express')
const app = express()

app.use(express.static('dist'))


app.get('/', function(req, res) {
  res.sendfile('dist/home.html')
})
app.get('/catalog', function(req, res) {
  res.sendfile('dist/catalog.html')
})

app.get('/product', function(req, res) {
  res.sendfile('dist/product.html');
})

app.get('/cooperation', function(req, res) {
  res.sendfile('dist/cooperation.html');
})

app.get('/contacts', function(req, res) {
  res.sendfile('dist/contacts.html');
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
