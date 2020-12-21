'use strict';


/**
 * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
 *
 * returns List
 **/
exports.getProcessEngineNames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name"
}, {
  "name" : "name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

