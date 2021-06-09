const { json, request } = require('express');
const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
  response.json({
    message: "Hello, World!",
  });
}

// creates person
module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

// get all people
module.exports.getAllPeople = (request, response) => {
  Person.find({})
    .then((people) => { response.json(people) })
    .catch((err) => response.json(err));
};

// get one person
module.exports.getPerson = (request, response) => {
  Person.findOne({ _id: request.params.id })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

// get one and update
module.exports.updatePerson = (request, response) => {
  Person.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((err) => response.json(err));
};

// get one and delete
module.exports.deletePerson = (request, response) => {
  Person.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
