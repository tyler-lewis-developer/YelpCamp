const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


mongoose.connection.on("error", console.error.bind(console, "connection error: "));
mongoose.connection.once("open", () => {
    console.log("Database connected");
});

const app = express();



// setup for ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));






app.get('/', (req, res) =>{
    res.render('home');
});



app.get('/makecampground', async (req, res) =>{
    const camp = new Campground({
        title: 'My Backyard',
        description: 'Cheap camping',
    });
    await camp.save();
    res.send(camp);
});






app.listen(3000, () => {
    console.log('Serving on port 3000');
});