var data = require('./Data');
var Helper = require('./Helper');

module.exports = {
    GetAll: () => {
        return Helper.GetAll('incidents');
    },

    GetById: id => {
        return Helper.GetById('incidents', id);
    },

    Add: body => {
        Helper.Add('incidents', {
            id: data.incidentsIDs,
            place: body.place,
            date: body.date,
            type: body.type,
            name: body.name,
            phone: body.phone,
            mail: body.mail,
            comment: body.comment,
            done: false
        });

        data.incidentsIDs++;
    },

    Validate: body => {
        var incident = module.exports.GetById(body.id);
        incident.done = true;
        incident.intervention_id = data.interventionsIDs;

        require('./InterventionHelper').Add(incident, body);
    },

    Modify: body => {
        var incident = module.exports.GetById(body.id);
        incident.place = body.place,
        incident.date = body.date,
        incident.type = body.type,
        incident.name = body.name;
        incident.phone = body.phone,
        incident.mail = body.mail,
        incident.comment = body.comment
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