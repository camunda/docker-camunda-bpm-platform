'use strict';

var utils = require('../utils/writer.js');
var TaskVariable = require('../service/TaskVariableService');

module.exports.deleteTaskVariable = function deleteTaskVariable (req, res, next, id, varName) {
  TaskVariable.deleteTaskVariable(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskVariable = function getTaskVariable (req, res, next, id, varName, deserializeValue) {
  TaskVariable.getTaskVariable(id, varName, deserializeValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskVariableBinary = function getTaskVariableBinary (req, res, next, id, varName) {
  TaskVariable.getTaskVariableBinary(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskVariables = function getTaskVariables (req, res, next, id, deserializeValue) {
  TaskVariable.getTaskVariables(id, deserializeValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyTaskVariables = function modifyTaskVariables (req, res, next, body, id) {
  TaskVariable.modifyTaskVariables(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTaskVariable = function putTaskVariable (req, res, next, body, id, varName) {
  TaskVariable.putTaskVariable(body, id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setBinaryTaskVariable = function setBinaryTaskVariable (req, res, next, id, varName) {
  TaskVariable.setBinaryTaskVariable(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
