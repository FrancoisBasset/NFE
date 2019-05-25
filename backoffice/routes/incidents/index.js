const router = require('express').Router();
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

//router.use(require('../../utils/checkConnection'));
router.use('/:id', require('./incident'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('table.ejs', {
        resources_type: 'incident',
        elements: Global.IncidentHelper.GetAll(),
        columns: [
            'ID',
            'Lieu',
            'Date d\'apparition',
            'Type d\'incident',
            'Nom du client',
            'Numéro de téléphone',
            'Adresse mail',
            'Commentaire',
            'Validé',
            'Bouton de suppression'
        ]
    });
});

router.post('/', (req, res) => {
    if (req.body.delete_all) {
        if (req.body.elements) {
            Global.IncidentHelper.DeleteAll(req.body.elements);
        }
    }
     
    if (req.body.delete) {
        Global.IncidentHelper.Delete(req.body.id);
    }    
    
    res.redirect('back');
});

module.exports = router;