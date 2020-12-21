'use strict';


/**
 * Creates an attachment for a task.
 *
 * id String The id of the task to add the attachment to.
 * returns AttachmentDto
 **/
exports.addAttachment = function(id) {
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
 * Removes an attachment from a task by id.
 *
 * id String The id of the task.
 * attachmentId String The id of the attachment to be removed.
 * no response value expected for this operation
 **/
exports.deleteAttachment = function(id,attachmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a task attachment by task id and attachment id.
 *
 * id String The id of the task.
 * attachmentId String The id of the attachment to be retrieved.
 * returns AttachmentDto
 **/
exports.getAttachment = function(id,attachmentId) {
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
 * Retrieves the binary content of a task attachment by task id and attachment id.
 *
 * id String The id of the task.
 * attachmentId String The id of the attachment to be retrieved.
 * returns byte[]
 **/
exports.getAttachmentData = function(id,attachmentId) {
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
 * Gets the attachments for a task.
 *
 * id String The id of the task to retrieve the attachments for.
 * returns List
 **/
exports.getAttachments = function(id) {
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

