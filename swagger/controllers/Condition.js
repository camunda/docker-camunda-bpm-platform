'use strict';

var utils = require('../utils/writer.js');
var Condition = require('../service/ConditionService');

module.exports.evaluateCondition = function evaluateCondition (req, res, next, body) {
  Condition.evaluateCondition(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
