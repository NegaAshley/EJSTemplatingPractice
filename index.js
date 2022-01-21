const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));//Taking current directory name and taking that path and joining with /views.  Use directory name where index.js is located.

app.get('/', (req, res) => {
    res.render('home');//Don't need to make it views/ejs if we set view engine to be ejs.  EJS assumes that we're pulling from views and that it's of type EJS
});

app.get('/cats', (req, res) => {
    const cats = [
        'Meepo', 'Speckles', 'Kenshin', 'Yellow', 'Lucky', 'Frididare', 'Bitty Ittles', 'Zigzag', 'Racky', 'Teeney', 'Maddie', 'Rose', 'Angel', 'Batman', 'Benson'
    ];
    res.render('cats', { cats }); //Passing in the cats array to display in cats.ejs
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params; //Deconstructing subreddit
    res.render('subreddit', { subreddit }); //Passing subreddit variable to subreddit.ejs
});

app.get('/random', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);//Setting variable to send to template random.ejs
    res.render('random', { rand: randomNumber });//Passing the variable to the template
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});



