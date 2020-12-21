'use strict';


/**
 * Adds an identity link to a task by id. Can be used to link any user or group to a task and specify a relation.
 *
 * body IdentityLinkDto  (optional)
 * id String The id of the task to add a link to.
 * no response value expected for this operation
 **/
exports.addIdentityLink = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Removes an identity link from a task by id
 *
 * body IdentityLinkDto  (optional)
 * id String The id of the task to remove a link from.
 * no response value expected for this operation
 **/
exports.deleteIdentityLink = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets the identity links for a task by id, which are the users and groups that are in *some* relation to it (including assignee and owner).
 *
 * id String The id of the task to retrieve the identity links for.
 * type String Filter by the type of links to include. (optional)
 * returns List
 **/
exports.getIdentityLinks = function(id,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "groupId" : "groupId",
  "type" : "type",
  "userId" : "userId"
}, {
  "groupId" : "groupId",
  "type" : "type",
  "userId" : "userId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

