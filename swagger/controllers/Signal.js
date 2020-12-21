'use strict';

var utils = require('../utils/writer.js');
var Signal = require('../service/SignalService');

module.exports.throwSignal = function throwSignal (req, res, next, body) {
  Signal.throwSignal(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
