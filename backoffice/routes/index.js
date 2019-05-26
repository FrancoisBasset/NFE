const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use('/', express.static('./public'));
router.use(session({secret: 'secret', resave: true, saveUninitialized: true, cookie: {}}));

router.get('/', (req, res) => {
    //if (req.session.connection) {
        res.render('index.ejs');
    /*} else {
        res.redirect('/login');
    }*/
});

module.exports = router;