const express = require('express');
const router = express.Router({ mergeParams: true });
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use('/', express.static('./public'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    const agent = Global.AgentHelper.GetById(req.params.id);

    if (agent) {
        res.json(agent);
    } else {
        res.render('notfound.ejs', {
            resource_type: 'agent',
            id: req.params.id
        });
    }
});

module.exports = router;