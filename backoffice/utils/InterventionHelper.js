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
        Helper.Add('interventions', {
            id: data.interventionsIDs,
            incident_id: incident.id,
            type: incident.type,
            place: incident.place,
            hardwares: body.hardwares,
            priority: body.priority,
            beginning_date: body.beginning_date,
            end_date: body.end_date,
            agents: body.agents,
            done: false
        });

        data.interventionsIDs++;        
    },

    Modify: body => {
        var intervention = module.exports.GetById(body.id);
        intervention.place = body.place;
        intervention.type = body.type;
        intervention.beginning_date = body.beginning_date;
        intervention.end_date = body.end_date;
        intervention.hardwares = body.hardwares;
        intervention.priority = body.priority;
        intervention.agents = body.agents;
    },

    IsFilled: body => {
        if (body.hardwares.length == 0 || body.hardwares[0] == '' ||
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