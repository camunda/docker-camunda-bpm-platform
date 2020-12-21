'use strict';

var utils = require('../utils/writer.js');
var TaskLocalVariable = require('../service/TaskLocalVariableService');

module.exports.deleteTaskLocalVariable = function deleteTaskLocalVariable (req, res, next, id, varName) {
  TaskLocalVariable.deleteTaskLocalVariable(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskLocalVariable = function getTaskLocalVariable (req, res, next, id, varName, deserializeValue) {
  TaskLocalVariable.getTaskLocalVariable(id, varName, deserializeValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskLocalVariableBinary = function getTaskLocalVariableBinary (req, res, next, id, varName) {
  TaskLocalVariable.getTaskLocalVariableBinary(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskLocalVariables = function getTaskLocalVariables (req, res, next, id, deserializeValues) {
  TaskLocalVariable.getTaskLocalVariables(id, deserializeValues)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyTaskLocalVariables = function modifyTaskLocalVariables (req, res, next, body, id) {
  TaskLocalVariable.modifyTaskLocalVariables(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTaskLocalVariable = function putTaskLocalVariable (req, res, next, body, id, varName) {
  TaskLocalVariable.putTaskLocalVariable(body, id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setBinaryTaskLocalVariable = function setBinaryTaskLocalVariable (req, res, next, id, varName) {
  TaskLocalVariable.setBinaryTaskLocalVariable(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
