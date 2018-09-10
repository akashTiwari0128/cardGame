function test(app) {
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
    var multer = require('multer');
    var storage = multer.diskStorage({
        destination: './uploads/',
        filename: function (req, file, cb) {
            fileName = file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname);
            cb(null, fileName);
        }
    })
    var upload = multer({ storage: storage })


    app.post('/savedata', upload.single('file'), function (req, res, next) {
        console.log('Uploade Successful ', req.file, JSON.stringify(req.body));

        var profileData = JSON.parse(req.body.data);

        //connection.connect();
        var insertQuery = 'INSERT INTO profile_master (`full_name`,`image_path_1`,`image_path_2`,`skills`) VALUES ("'+profileData.name+'","'+profileData.age+'","'+fileName+'","'+profileData.skills+'")'
        console.log(insertQuery);
        connection.query(insertQuery, function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results, fields);
            if(results) return 'success';
        });
        //connection.end();

    });

    app.get('/getProfile', function (req, res, next) {
        console.log(req.param);
        //var userid = JSON.parse(req.body);
        //connection.connect();
        var getQuery = 'SELECT * FROM profile_master WHERE id=11'//+userid.id+'';
        console.log(getQuery);
        connection.query(getQuery, function (error, result, fields) {
            if (error) throw error;
            console.log('The solution is: ', result[0]);
            if(result) return res.json(result[0]);
        });
        //connection.end();
    });

    app.get('/profileUpdate', function (req, res) {
        res.send('Link working properly')
    });

    app.post('/authenticate', upload.single('file'), function (req, res, next) {
        console.log('In authenticate ',req.body);

        var data = JSON.parse(req.body.data);

        //connection.connect();
        var query = 'SELECT * FROM user_master WHERE username = "'+data.username+'" AND password = "'+data.password+'"';
        console.log(query);
        connection.query(query, function (error, result) {
            if (error) throw error;
            console.log('The solution is: ', result[0]);
            if(result) return res.json(result[0]);
        });
        //connection.end();

    });
    
}

module.exports = test
