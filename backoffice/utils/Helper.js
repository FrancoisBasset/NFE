var data = require('./Data');

module.exports = {
    GetAll: (type) => {
        return data[type];
    },

    GetById: (type, id) => {
        return data[type].filter(element => {
            return element.id == id;
        })[0];
    },

    Add: (type, element) => {
        data[type].push(element);
    },

    Delete: (type, id) => {
        data[type] = data[type].filter(element => {
            return element.id != id;
        });
    },

    DeleteAll: (type, ids) => {
        for (var id of ids) {
            module.exports.Delete(type, id);
        }
    }
};