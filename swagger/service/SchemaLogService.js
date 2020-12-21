'use strict';


/**
 * Queries for schema log entries that fulfill given parameters.
 *
 * version String Only return schema log entries with a specific version. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getSchemaLog = function(version,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "version" : "version",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "id" : "id",
  "version" : "version",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for schema log entries that fulfill given parameters.
 *
 * body SchemaLogQueryDto  (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.querySchemaLog = function(body,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "version" : "version",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "id" : "id",
  "version" : "version",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

