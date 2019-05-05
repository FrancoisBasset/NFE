var global = {}

var data = require('../../Data');

global.data = data;

global.getIncidentById = id => {
    return data.incidents.filter(incident => {
        return incident.id == id;
    })[0];
};

global.validateIncident = id => {
    var incident = getIncidentById(id);

    data.interventions.push(incident);
};

global.removeIncident = id => {
    data.incidents = data.incidents.filter(incident => {
        return incident.id != id;
    });
};

module.exports = global;