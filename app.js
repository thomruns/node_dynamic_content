const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// add view as the view engine and set the views path
app.set('view engine', 'ejs');
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
    res.status(404).render('404', { pageTitle: '404 - Page Not Found' });
});

app.listen(port);
