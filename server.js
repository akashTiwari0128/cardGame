const express = require('express');
const app = require('express')();
require('./routes/index')(app);
app.use(express.static(__dirname));



app.get('/', function (req, res) {
    res.sendFile('/public/views/index.html', {
        root: __dirname,
    });
});

app.get('/profile', function (req, res) {
    res.sendFile('/public/views/profile.html', {
        root: __dirname,
    });
});


let port = process.env.PORT || 8080;
// app.set('port', process.env.PORT || 3000);
let server = app.listen(port, function (req, res) {
    console.log('Url >>  http://localhost:' + port);
});