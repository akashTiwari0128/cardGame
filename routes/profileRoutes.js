function test(app) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Kamla@123321',
        database: 'akashdev'
    });

    var path = require('path');
    var http = require('http');
    var multer = require('multer');
    var storage = multer.diskStorage({
        destination: './uploads/',
        filename: function (req, file, cb) {
            cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
        }
    })
    var upload = multer({ storage: storage })


    app.post('/savedata', upload.single('file'), function (req, res, next) {
        //console.log('Uploade Successful ', req.file, req.body);

        /*connection.connect();
        connection.query('SELECT * from profiletable', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0]);
        });
        connection.end();*/

        var post = {
            name: name,
            age: age,
            skills:skills,
            imagePath:imagepath
            
        };

        connection.query('INSERT INTO profiletable VALUES ?', post, function (err, result) {
            // ...
        });




    });


    app.get('/profileUpdate', function (req, res) {
        res.send('Link working properly')
    })
}

module.exports = test