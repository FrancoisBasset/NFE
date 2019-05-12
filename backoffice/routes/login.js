const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const session = require('express-session');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/', express.static('./public'));

router.use(session({secret: "secret", resave: true, saveUninitialized: true, cookie: {}}));

router.get('/', (req, res) => {
    if (req.session.connection) {
        res.redirect('/');
    } else {
        res.render('login.ejs');
    }
});

router.post('/', (req, res) => {
    if (req.body.id == 'secret' && req.body.password == 'secret') {
        req.session.connection = true;
        res.redirect('back');
    } else {
        req.body.error = 'NFEID / Mot de passe incorrects';

        res.render('login.ejs', req.body);
    }
});

module.exports = router;