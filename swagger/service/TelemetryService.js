'use strict';


/**
 * Configure Telemetry
 * Configures whether Camunda receives data collection of the process engine setup and usage.
 *
 * body TelemetryConfigurationDto  (optional)
 * no response value expected for this operation
 **/
exports.configureTelemetry = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch Telemetry Configuration
 * Fetches Telemetry Configuration.
 *
 * returns TelemetryConfigurationDto
 **/
exports.getTelemetryConfiguration = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enableTelemetry" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

