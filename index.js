const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));//Taking current directory name and taking that path and joining with /views.  Use directory name where index.js is located.

app.get('/', (req, res) => {
    res.render('home');//Don't need to make it views/ejs if we set view engine to be ejs.  EJS assumes that we're pulling from views and that it's of type EJS
});

app.get('/random', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);//Setting variable to send to template random.ejs
    res.render('random', { rand: randomNumber });//Passing the variable to the template
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});



