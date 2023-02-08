const express = require('express');
const  ejsMate = require('ejs-mate');
const path = require ('path');

const app = express();
app.use(express.json);

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3001, () => {
    console.log('App is listening on port 3001');
})