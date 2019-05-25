const router = require('express').Router();
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

//router.use(require('../../utils/checkConnection'));
router.use('/:id', require('./intervention'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    var clone = [];

    for (var intervention of Global.InterventionHelper.GetAll()) {
        clone.push({
            id: intervention.id,
            place: intervention.incident.place,
            type: intervention.incident.type,
            comment: intervention.incident.client.comment,
            beginning_date: intervention.beginning_date,
            end_date: intervention.end_date,
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
            'Commentaire',
            'Date de début',
            'Date de fin',
            'Cloturé',
            'Bouton de suppression'
        ]
    });
});

router.post('/', (req, res) => {
    if (req.body.delete_all) {
        if (req.body.elements) {
            Global.InterventionHelper.DeleteAll(req.body.elements);
        }
    }

    if (req.body.delete) {
        Global.InterventionHelper.Delete(req.body.id);
    }

    res.redirect('back');
});

module.exports = router;