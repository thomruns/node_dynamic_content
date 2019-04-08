const path = require('path'); // node core module

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// add ejs as the view engine and set the views path
app.set('view engine', 'ejs');
app.set('views', 'views');

const port = 3000;

// this is now imported as an object since multiple properties 
// are being exported by the admin module
const adminRoutes = require('./routes/admin');  //exported object
const shopRoutes = require('./routes/shop'); // exported function
const errorRoutes = require('./routes/error404'); // exported function
// use body parser
app.use(bodyParser.urlencoded({extended: false}));
// base directory path for all static files
app.use(express.static(path.join(__dirname, 'public')));

// use these routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(port);
