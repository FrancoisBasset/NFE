const express = require('express');
const router = express.Router({ mergeParams: true });
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use('/', express.static('./public'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
    if (req.params.id == 'new') {
        next();
        return;
    }

    const holiday = Global.HolidayHelper.GetById(req.params.id);

    if (holiday) {
        res.render('holidays/holidays.ejs', {
            holiday: holiday
        });
    } else {
        res.render('notfound.ejs', {
            resource_type: 'holiday',
            id: req.params.id
        });
    }
});

router.get('/', (req, res) => {
    res.render('new.ejs', {
        items: Global.Helper.GetAll('holidays_form')
    });
});

router.post('/', (req, res) => {
    if (req.body.refuse) {
        Global.HolidayHelper.Refuse(req.body.id);
    }

    if (req.body.accept) {
        Global.HolidayHelper.Accept(req.body.id);
    }

    res.redirect('/holidays');
});

module.exports = router;