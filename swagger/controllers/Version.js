'use strict';

var utils = require('../utils/writer.js');
var Version = require('../service/VersionService');

module.exports.getRestAPIVersion = function getRestAPIVersion (req, res, next) {
  Version.getRestAPIVersion()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
