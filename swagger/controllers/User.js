'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.availableOperations = function availableOperations (req, res, next) {
  User.availableOperations()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.availableUserOperations = function availableUserOperations (req, res, next, id) {
  User.availableUserOperations(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createUser = function createUser (req, res, next, body) {
  User.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next, id) {
  User.deleteUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserCount = function getUserCount (req, res, next, id, idIn, firstName, firstNameLike, lastName, lastNameLike, email, emailLike, memberOfGroup, memberOfTenant, potentialStarter) {
  User.getUserCount(id, idIn, firstName, firstNameLike, lastName, lastNameLike, email, emailLike, memberOfGroup, memberOfTenant, potentialStarter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserProfile = function getUserProfile (req, res, next, id) {
  User.getUserProfile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next, id, idIn, firstName, firstNameLike, lastName, lastNameLike, email, emailLike, memberOfGroup, memberOfTenant, potentialStarter, sortBy, sortOrder, firstResult, maxResults) {
  User.getUsers(id, idIn, firstName, firstNameLike, lastName, lastNameLike, email, emailLike, memberOfGroup, memberOfTenant, potentialStarter, sortBy, sortOrder, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unlockUser = function unlockUser (req, res, next, id) {
  User.unlockUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCredentials = function updateCredentials (req, res, next, body, password, authenticatedUserPassword, id) {
  User.updateCredentials(body, password, authenticatedUserPassword, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
