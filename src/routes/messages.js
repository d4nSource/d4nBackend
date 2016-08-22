var express = require('express');
var router = express.Router();
var file = require('fs');

router.get('/', function(req, res, next){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify([
                {
                    "id": "1",
                    "content": "my page"
                },
                {
                    "id": "2",
                    "content" : "2. Nachricht ;-)"
                }
        ]));
});

module.exports = router;

/*
var usersFilePath = path.join(__dirname, 'users.min.json');

apiRouter.get('/users', function(req, res){
    var readable = fs.createReadStream(usersFilePath);
    readable.pipe(res);
});
*/