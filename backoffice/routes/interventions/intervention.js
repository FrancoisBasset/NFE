const express = require('express');
const router = express.Router({ mergeParams: true });
const Global = require('../../utils/global');

//router.use(require('../../utils/checkConnection'));
router.use('/', express.static('./public'));

router.get('/', (req, res) => {    
    res.render('interventions/intervention.ejs', {
        types: Global.Helper.GetAll('types'),
        intervention: Global.InterventionHelper.GetById(req.params.id)
    });
});

module.exports = router;