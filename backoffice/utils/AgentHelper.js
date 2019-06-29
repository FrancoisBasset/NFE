var data = require('./Data');
var Helper = require('./Helper');

module.exports = {
    GetAll: () => {
        return Helper.GetAll('agents');
    },

    GetById: id => {
        return Helper.GetById('agents', id);
    },

    GetInterventions: id => {
        return data["interventions"].filter(element => {
            return element.agents.includes(id) && !element.done;
        });
    }
}