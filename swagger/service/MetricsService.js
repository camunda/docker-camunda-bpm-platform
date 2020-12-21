'use strict';


/**
 * Retrieves the `sum` (count) for a given metric.
 *
 * metricsName String The name of the metric.
 * startDate Date The start date (inclusive). (optional)
 * endDate Date The end date (exclusive). (optional)
 * returns MetricsResultDto
 **/
exports.getMetrics = function(metricsName,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a list of metrics, aggregated for a given interval.
 *
 * name String The name of the metric. (optional)
 * reporter String The name of the reporter (host), on which the metrics was logged. This will have value provided by the [hostname configuration property](https://docs.camunda.org/manual/7.14/reference/deployment-descriptors/tags/process-engine/#hostname). (optional)
 * startDate Date The start date (inclusive). (optional)
 * endDate Date The end date (exclusive). (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * interval String The interval for which the metrics should be aggregated. Time unit is seconds. Default: The interval is set to 15 minutes (900 seconds). (optional)
 * aggregateByReporter String Aggregate metrics by reporter. (optional)
 * returns List
 **/
exports.interval = function(name,reporter,startDate,endDate,firstResult,maxResults,interval,aggregateByReporter) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "reporter" : "reporter",
  "value" : 0,
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "name" : "name",
  "reporter" : "reporter",
  "value" : 0,
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

