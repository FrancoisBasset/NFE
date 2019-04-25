const express = require('express')
const router = express.Router();
var data = require('../../Data');

router.get('/', (req, res) => {
    res.render('interventions/index.ejs', { interventions: data.interventions });
});

module.exports = router;