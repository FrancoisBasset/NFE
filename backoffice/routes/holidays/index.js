const router = require('express').Router();
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use(require('../../utils/checkConnection'));
router.use('/:id', require('./holidays'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('table.ejs', {
        resources_type: 'holiday',
        elements: Global.HolidayHelper.GetAll(),
        columns: [
            'ID',
            'Agent',
            'Date de début',
            'Date de fin',
            'Type de congé',
            'Justificatif'
        ]
    });
});

module.exports = router;