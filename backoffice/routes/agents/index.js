const express = require('express');
const router = express.Router();

router.use(require('../../utils/checkConnection'));

router.get('/', (req, res) => {
    res.render('agents/index.ejs');
})

module.exports = router;