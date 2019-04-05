const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port);
