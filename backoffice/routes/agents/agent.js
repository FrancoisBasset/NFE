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

    const agent = Global.AgentHelper.GetById(req.params.id);

    var clone = [];

    for (var intervention of Global.AgentHelper.GetInterventions(agent.id)) {
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

    const holidays = Global.HolidayHelper.GetByAgent(agent.id);    

    if (agent) {
        res.render('agents/agent.ejs', {
            agent: agent,
            interventions: clone,
            holidays: holidays,
            interventions_columns: [
                'ID',
                'Lieu',
                'Type d\'intervention',
                'Date de début',
                'Date de fin',
                'Priorité',
                'Clôturé'
            ],
            holidays_columns: [
                'ID',
                'Agent',
                'Date de début',
                'Date de fin',
                'Type de congé',
                'Justificatif',
                'Traité'
            ]
        });
    } else {
        res.render('notfound.ejs', {
            resource_type: 'agent',
            id: req.params.id
        });
    }
});

router.get('/', (req, res) => {
    res.render('agents/new_agent.ejs', {
        /*types: Global.Helper.GetAll('types'),
        hardwares: Global.Helper.GetAll('hardwares'),
        priorities: Global.Helper.GetAll('priorities'),
        agents: Global.AgentHelper.GetAll()*/
    });
});

module.exports = router;