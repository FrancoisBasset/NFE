const router = require('express').Router();
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use(require('../../utils/checkConnection'));
router.use('/:id', require('./intervention'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    var clone = [];

    for (var intervention of Global.InterventionHelper.GetAll()) {
        clone.push({
            id: intervention.id,
            place: intervention.place,
            type: intervention.type,
            beginning_date: intervention.beginning_date,
            end_date: intervention.end_date,
            priority: intervention.priority,
            done: intervention.done
        });
    }

    res.render('table.ejs', {
        elements: clone,
        resources_type: 'intervention',
        columns: [
            'ID',
            'Lieu',
            'Type d\'intervention',
            'Date de début',
            'Date de fin',
            'Priorité',
            'Clôturé',
            'Bouton de clôturation'
        ],
        action: 'Clôturer'
    });
});

router.post('/', (req, res) => {
    if (req.body.action_all) {
        if (req.body.elements) {
            Global.InterventionHelper.CloseAll(req.body.elements);
        }
    }

    if (req.body.action) {
        Global.InterventionHelper.Close(req.body.id);
    }

    res.redirect('back');
});

module.exports = router;