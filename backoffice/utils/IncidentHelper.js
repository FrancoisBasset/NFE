var data = require('./Data');
var Helper = require('./Helper');

module.exports = {
    GetAll: () => {
        return Helper.GetAll('incidents');
    },

    GetById: id => {
        return Helper.GetById('incidents', id)
    },

    Add: body => {
        var incident = {};
        incident.id = data.incidentsIDs;

        Object.assign(incident, body);
        incident.done = false;

        data.incidentsIDs++;
        Helper.Add('incidents', incident);
    },

    Validate: body => {
        var incident = module.exports.GetById(body.id);
        incident.done = true;

        require('./InterventionHelper').Add(incident, body);
    },

    Modify: incident => {
        module.exports.Delete(incident.id);
        module.exports.Add(incident);
    },

    Delete: id => {
        Helper.Delete('incidents', id);
    },

    DeleteAll: ids => {
        Helper.DeleteAll('incidents', ids);
    },

    IsFilled: body => {
        if (body.place.trim() == '' ||
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
};