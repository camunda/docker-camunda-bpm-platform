'use strict';

var utils = require('../utils/writer.js');
var Telemetry = require('../service/TelemetryService');

module.exports.configureTelemetry = function configureTelemetry (req, res, next, body) {
  Telemetry.configureTelemetry(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTelemetryConfiguration = function getTelemetryConfiguration (req, res, next) {
  Telemetry.getTelemetryConfiguration()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
