const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');//don't need to make it views/ejs.  EJS assumes that we're pulling from views and that it's of type EJS
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});



