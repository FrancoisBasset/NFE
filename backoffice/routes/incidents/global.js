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

module.exports = global;