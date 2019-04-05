const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// use pug as the view engine
app.set('view engine', 'pug');
// not really necessary, shown for completeness in case another directory holds views instead
app.set('views', 'views'); 

const port = 3000;

// this is now exported as an object since additional properties 
// are being exported by the admin module
const adminObj = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminObj.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(port);
