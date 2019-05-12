const express = require('express');
const router = express.Router();

router.use(require('../../utils/checkConnection'));

var data = require('../../utils/Data');

router.get('/', (req, res) => {
    res.render('interventions/index.ejs', { interventions: data.interventions });
});

module.exports = router;