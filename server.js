const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

//Views setup
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, "views"))
hbs.registerPartials(path.join(__dirname, "/views/partials"))

app.use(express.static(path.join(__dirname, "public")))


app.get('/', (req, res) => {
  res.render('./index.hbs', {
    foods: [
      {
        name: 'pasta',
        country: 'italy'
      },
      {
        name: 'sushi',
        country: 'japan'
      }
    ]  
  })
})

app.get('/about', (req, res) => {
  res.send("about route");
})


app.listen(3000, () => {
  console.log('listening on port 3000');
})
