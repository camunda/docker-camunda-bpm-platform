'use strict';


/**
 * Retrieves the version of the Rest API.
 *
 * returns VersionDto
 **/
exports.getRestAPIVersion = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

