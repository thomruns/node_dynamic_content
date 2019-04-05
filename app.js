const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars'); // require handlebars

const app = express();

app.engine('hbs', expressHbs()); // make handlebars available as view engine
app.set('view engine', 'hbs'); // set handlebars as view engine
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
    res.status(404).render('404', {pageTitle: '404 - Page Not Found'});
});

app.listen(port);
