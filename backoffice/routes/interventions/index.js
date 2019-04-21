const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('interventions/index.ejs');
});

module.exports = router;