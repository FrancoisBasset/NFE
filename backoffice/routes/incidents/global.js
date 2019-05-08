var global = {}

var data = require('../../Data');

global.data = data;

global.getIncidentById = id => {
    return data.incidents.filter(incident => {
        return incident.id == id;
    })[0];
};

global.validateIncident = req => {
    var incident = global.getIncidentById(req.body.id);
    incident.validated = true;

    var intervention = {};
    
    intervention.incident = incident;

    intervention.id = global.data.interventionsIDs;
    global.data.interventionsIDs++;

    intervention.hardwares = req.body.hardwares;
    intervention.priority = req.body.priority;
    intervention.beginning_date = req.body.beginning_date;
    intervention.end_date = req.body.end_date;
    intervention.agents = req.body.agents;

    console.log("Intervention");
    console.log(intervention);
    data.interventions.push(intervention);
};

global.modifyIncident = incident => {
    global.removeIncident(incident.id);
    data.incidents.push(incident);
};

global.removeIncident = id => {
    data.incidents = data.incidents.filter(incident => {
        return incident.id != id;
    });
};

global.incidentIsFilled = body => {
    if (
        body.place.trim() == '' ||
        body.date.trim() == '' ||
        body.type.trim() == '' ||
        body.name.trim() == '' ||
        body.phone.trim() == '' || isNaN(body.phone.trim()) || body.phone.length != 10 ||
        body.mail.trim() == ''
    ) {
        return false;
    }

    return true;
}

global.interventionIsFilled = body => {
    if (
        body.hardwares.length == 0 ||
        body.priority == '' ||
        body.beginning_date.trim() == '' ||
        body.end_date.trim() == '' ||
        body.agents.length == 0
    ) {
        return false;
    }

    return true;
}

module.exports = global;