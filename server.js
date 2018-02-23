const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

//Views setup
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, "views"))
hbs.registerPartials(path.join(__dirname, "/views/partials"))

app.use(express.static(path.join(__dirname, "public")))

//View helpers
hbs.registerHelper('log', word => console.log(word))
hbs.registerHelper('capitalize', word => {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
})

app.get('/', (req, res) => {
  res.redirect('/animal');
})
app.get('/animals', (req, res) => {
  let animal = 'crocodile'
  if (req.query.animal) {
    animal = req.query.animal;
  }
  res.render('./index.hbs', {
    animal: animal
  })
})

app.get('/about', (req, res) => {
  res.send("about route");
})


app.listen(3000, () => {
  console.log('listening on port 3000');
})
