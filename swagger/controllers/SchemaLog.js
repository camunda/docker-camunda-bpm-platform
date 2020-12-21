'use strict';

var utils = require('../utils/writer.js');
var SchemaLog = require('../service/SchemaLogService');

module.exports.getSchemaLog = function getSchemaLog (req, res, next, version, firstResult, maxResults) {
  SchemaLog.getSchemaLog(version, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.querySchemaLog = function querySchemaLog (req, res, next, body, firstResult, maxResults) {
  SchemaLog.querySchemaLog(body, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
