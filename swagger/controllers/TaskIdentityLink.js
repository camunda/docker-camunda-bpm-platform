'use strict';

var utils = require('../utils/writer.js');
var TaskIdentityLink = require('../service/TaskIdentityLinkService');

module.exports.addIdentityLink = function addIdentityLink (req, res, next, body, id) {
  TaskIdentityLink.addIdentityLink(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIdentityLink = function deleteIdentityLink (req, res, next, body, id) {
  TaskIdentityLink.deleteIdentityLink(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIdentityLinks = function getIdentityLinks (req, res, next, id, type) {
  TaskIdentityLink.getIdentityLinks(id, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
