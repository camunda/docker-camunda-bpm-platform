'use strict';


/**
 * Creates a comment for a task by id.
 *
 * body CommentDto **Note:** Only the `message` property will be used. Every other property passed to this endpoint will be ignored. (optional)
 * id String The id of the task to add the comment to.
 * returns CommentDto
 **/
exports.createComment = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a task comment by task id and comment id.
 *
 * id String The id of the task.
 * commentId String The id of the comment to be retrieved.
 * returns CommentDto
 **/
exports.getComment = function(id,commentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets the comments for a task by id.
 *
 * id String The id of the task to retrieve the comments for.
 * returns List
 **/
exports.getComments = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

