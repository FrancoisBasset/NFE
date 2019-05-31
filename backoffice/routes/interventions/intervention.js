const express = require('express');
const router = express.Router({ mergeParams: true });
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use('/', express.static('./public'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {    
    res.render('interventions/intervention.ejs', {
        types: Global.Helper.GetAll('types'),
        intervention: Global.InterventionHelper.GetById(req.params.id),
        priorities: Global.Helper.GetAll('priorities')
    });
});

router.post('/', (req, res) => {    
    if (req.body.modify) {
        //Global.InterventionHelper.Modify(req.body);
    }

    if (req.body.close) {
        //Global.InterventionHelper.Close(req.body.id);
    }

    res.redirect('back');
})

module.exports = router;