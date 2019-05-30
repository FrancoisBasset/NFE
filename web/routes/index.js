const express = require('express');
const router = express.Router();
const request = require('request');
const Global = require('../utils/global');

router.use('/', express.static('./public'));
router.use('/declaration_incidents', require('./declaration_incidents'));

router.get('/', (req, res) => {
    var host = Global.GetHost(req.headers.host);

    request.get(host, (e, r) => {
        var host = Global.GetHost(req.headers.host, true);
        
        res.render('index.ejs', {
            host: host,
            back_office: !e
        });
    });
});

module.exports = router;