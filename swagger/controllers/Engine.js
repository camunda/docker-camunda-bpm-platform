'use strict';

var utils = require('../utils/writer.js');
var Engine = require('../service/EngineService');

module.exports.getProcessEngineNames = function getProcessEngineNames (req, res, next) {
  Engine.getProcessEngineNames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
