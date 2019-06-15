const express = require('express');
const router = express.Router({ mergeParams: true });
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use('/', express.static('./public'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    const intervention = Global.InterventionHelper.GetById(req.params.id);

    if (intervention) {
        Render(res, intervention);
    } else {
        res.render('notfound.ejs', {
            resource_type: 'intervention',
            id: req.params.id,
        });
    }
});

router.post('/', (req, res) => {    
    if (req.body.modify) {
        Global.InterventionHelper.Modify(req.body);
        
        Render(res, Global.InterventionHelper.GetById(req.body.id));
        return;
    }

    if (req.body.close) {
        //Global.InterventionHelper.Close(req.body.id);
    }

    res.redirect('back');
})

function Render(res, intervention) {
    res.render('interventions/intervention.ejs', {
        intervention: intervention,
        hardwares: Global.Helper.GetAll('hardwares'),
        types: Global.Helper.GetAll('types'),        
        priorities: Global.Helper.GetAll('priorities'),
        agents: Global.Helper.GetAll('agents')
    });
}

module.exports = router;