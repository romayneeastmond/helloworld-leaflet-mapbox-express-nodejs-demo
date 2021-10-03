import express from 'express';

(async () => {
    const app = express();
    const router = express.Router();
    const path = require('path');

    router.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.use('/', router);
    app.use(express.static('public'));
    app.set('port', process.env.PORT || 3001);

    app.listen(app.get('port'), () => {
        console.log(`Express server started http://localhost:${app.get('port')}`);
    })
})();