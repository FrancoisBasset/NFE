var data = {};

data.incidentsIDs = 10;
data.interventionsIDs = 10;

data.types = [
    {name: 'panne', text: 'Panne de courant'},
    {name: 'compteur_casse', text: 'Compteur cassé'},
    {name: 'compteur_bugge', text: 'Compteur buggé'},
    {name: 'sous_voltage', text: 'Sous-voltage'},
    {name: 'sur_voltage', text: 'Sur-voltage'},
    {name: 'pylone_casse', text: 'Pylone cassé'}
];

data.incidents = [
  {
    id: 1,
    place: "Republique",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Jean",
      phone: "0123456789",
      mail: "jean@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },
  {
    id: 2,
    place: "Romorantin",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Jacques",
      phone: "0123456789",
      mail: "jacques@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },
  {
    id: 3,
    place: "Saint-Gervais",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "René",
      phone: "0123456789",
      mail: "rene@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },

  {
    id: 4,
    place: "Menton",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Edouard",
      phone: "0123456789",
      mail: "edouard@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },
  {
    id: 5,
    place: "Saint-Benoit",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Philippe",
      phone: "0123456789",
      mail: "philippe@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },
  {
    id: 6,
    place: "Strasbourg",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Pierre",
      phone: "0123456789",
      mail: "pierre@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },

  {
    id: 7,
    place: "Metz",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Denis",
      phone: "0123456789",
      mail: "denis@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },
  {
    id: 8,
    place: "Saint-Moret",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Marcel",
      phone: "0123456789",
      mail: "marcel@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  },
  {
    id: 9,
    place: "Reims",
    date: "2019-05-05",
    type: "panne",
    client: {
      name: "Vladimir",
      phone: "0123456789",
      mail: "vladimir@mail.fr",
      comment: "Ouais"
    },
    "validated": false
  }
];

data.interventions = [
    {
        id: 1,
        incident: {
            id: 1,
            place: "Republique",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Jean",
                phone: "0123456789",
                mail: "jean@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },
    {
        id: 2,
        incident: {
            id: 2,
            place: "Romorantin",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Jacques",
                phone: "0123456789",
                mail: "jacques@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },
    {
        id: 3,
        incident: {
            id: 3,
            place: "Saint-Gervais",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "René",
                phone: "0123456789",
                mail: "rene@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },  
    {
        id: 4,
        incident: {
            id: 4,
            place: "Menton",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Edouard",
                phone: "0123456789",
                mail: "edouard@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },
    {
        id: 5,
        incident: {
            id: 5,
            place: "Saint-Benoit",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Philippe",
                phone: "0123456789",
                mail: "philippe@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },
    {
        id: 6,
        incident: {
            id: 6,
            place: "Strasbourg",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Pierre",
                phone: "0123456789",
                mail: "pierre@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },  
    {
        id: 7,
        incident: {
            id: 7,
            place: "Metz",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Denis",
                phone: "0123456789",
                mail: "denis@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },
    {
        id: 8,
        incident: {
            id: 8,
            place: "Saint-Moret",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Marcel",
                phone: "0123456789",
                mail: "marcel@mail.fr",
                comment: "Ouais"
            },
            validated: false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    },
    {
        id: 9,
        incident: {
            id: 9,
            place: "Reims",
            date: "2019-05-05",
            type: "panne",
            client: {
                name: "Vladimir",
                phone: "0123456789",
                mail: "vladimir@mail.fr",
                comment: "Ouais"
            },
            "validated": false
        },
        hardwares: [

        ],
        beginning_date: "2019-05-08",
        end_date: "2019-05-08",
        enclosed: false
    }
  ];

data.hardwares = [
    { name: "pince", text: "Pince" },
    { name: "pile", text: "Pile" },
    { name: "batterie", text: "Batterie" },
    { name: "fils", text: "Fils" },
    { name: "amperemetre", text: "Ampèremetre" }
];

module.exports = data;
