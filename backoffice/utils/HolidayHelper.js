var data = require('./Data');
var Helper = require('./Helper');
var AgentHelper = require('./AgentHelper');

module.exports = {
    GetAll: () => {
        const holidays = Helper.GetAll('holidays').filter(element => {
            return element.done == null;
        });

        var clone = [];

        for (var holiday of holidays) {
            var agent = AgentHelper.GetById(holiday.agent);

            clone.push({
                id: holiday.id,
                agent: agent.firstname + ' ' + agent.lastname,
                beginning_date: holiday.beginning_date,
                end_date: holiday.end_date,
                type: holiday.type,
                document: holiday.document
            });
        }

        return clone;
    },

    GetById: id => {
        const holiday = Helper.GetById('holidays', id);

        if (!holiday) {
            return null;
        }

        const agent = AgentHelper.GetById(holiday.agent);

        return {
            id: holiday.id,
            agent: agent.firstname + ' ' + agent.lastname,
            beginning_date: holiday.beginning_date,
            end_date: holiday.end_date,
            type: holiday.type,
            document: holiday.document,
            done: holiday.done
        };
    },

    GetByAgent: id => {
        const holidays = Helper.GetAll('holidays').filter(element => {
            return element.agent == id;
        });

        var clone = [];

        for (var holiday of holidays) {
            var agent = AgentHelper.GetById(holiday.agent);

            clone.push({
                id: holiday.id,
                agent: agent.firstname + ' ' + agent.lastname,
                beginning_date: holiday.beginning_date,
                end_date: holiday.end_date,
                type: holiday.type,
                document: holiday.document,
                done: holiday.done != null
            });
        }

        return clone;
    },

    Refuse: id => {
        const holiday = Helper.GetById('holidays', id);

        holiday.done = false;
    },

    Accept: id => {
        const holiday = Helper.GetById('holidays', id);

        holiday.done = true;
    }
}