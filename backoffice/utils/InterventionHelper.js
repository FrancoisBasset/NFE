var data = require('./Data');
var Helper = require('./Helper');

module.exports = {
    GetAll: () => {
        return Helper.GetAll('interventions');
    },

    GetById: id => {
        return Helper.GetById('interventions', id);
    },

    Add: (incident, body) => {
        var intervention = {};
        
        intervention.incident = incident;

        intervention.id = data.interventionsIDs;
        data.interventionsIDs++;

        intervention.hardwares = body.hardwares;
        intervention.priority = body.priority;
        intervention.beginning_date = body.beginning_date;
        intervention.end_date = body.end_date;
        intervention.agents = body.agents;
        intervention.done = false;

        Helper.Add('interventions', intervention);
    },

    IsFilled: body => {
        if (body.hardwares.length == 0 ||
            body.priority == '' ||
            body.beginning_date.trim() == '' ||
            body.end_date.trim() == '' ||
            body.agents.length == 0
        ) {
            return false;
        }
    
        return true;
    },

    Close: id => {
        module.exports.GetById(id).done = true;
    },

    CloseAll: ids => {
        for (var id of ids) {
            module.exports.Close(id);
        }
    }
};