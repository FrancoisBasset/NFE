const express = require('express');
const router = express.Router();
const request = require('request');
const global = require('../utils/global');

router.use('/', express.static('./public'));
router.use('/declaration_incidents', require('./declaration_incidents'));

router.get('/', (req, res) => {
    var host = global.getHost(req.headers.host);

    request.get(host, (e, r) => {
        res.render('index.ejs', { host: host, back_office: !e});
    });
});

module.exports = router;