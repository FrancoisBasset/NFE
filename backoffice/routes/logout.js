const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    delete req.session.connection;
    res.redirect('/');
});

module.exports = router;