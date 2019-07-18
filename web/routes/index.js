const express = require('express');
const router = express.Router();

router.use('/', express.static('./public'));
router.use('/declaration_incidents', require('./declaration_incidents'));

router.get('/', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;