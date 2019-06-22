const router = require('express').Router();
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use(require('../../utils/checkConnection'));
router.use('/:id', require('./agent'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/:id', require('./agent'));

router.get('/', (req, res) => {
    res.render('table.ejs', {
        resources_type: 'agent',
        elements: Global.AgentHelper.GetAll(),
        columns: [
            'ID',
            'Prénom',
            'Nom'
        ]
    });
});

module.exports = router;