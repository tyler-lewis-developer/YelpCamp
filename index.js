const express = require('express');
const app = express();
const path = require('path');


// setup for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));






app.get('/', (req, res) =>{
    res.render('home');
});






app.listen(3000, () => {
    console.log('Serving on port 3000');
});