'use strict';

var utils = require('../utils/writer.js');
var Metrics = require('../service/MetricsService');

module.exports.getMetrics = function getMetrics (req, res, next, metricsName, startDate, endDate) {
  Metrics.getMetrics(metricsName, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.interval = function interval (req, res, next, name, reporter, startDate, endDate, firstResult, maxResults, interval, aggregateByReporter) {
  Metrics.interval(name, reporter, startDate, endDate, firstResult, maxResults, interval, aggregateByReporter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
