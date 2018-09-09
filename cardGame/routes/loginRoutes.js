function login(app) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'cardgame'
    });
    var fileName = '';
    var path = require('path');
    var http = require('http');
    
    app.post('/authenticate', function (req, res, next) {
        console.log('In authenticate ',JSON.stringify(req.body));

        var data = JSON.parse(req.body.data);

        //connection.connect();
        var query = 'SELECT * FROM user_master WHERE username = "'+data.username+'" AND password = "'+data.password+'"';
        console.log(query);
        connection.query(query, function (error, result) {
            if (error) throw error;
            console.log('The solution is: ', result);
            if(result) return result[0];
        });
        //connection.end();

    });
}

module.exports = login
