'use strict';

var utils = require('../utils/writer.js');
var TaskAttachment = require('../service/TaskAttachmentService');

module.exports.addAttachment = function addAttachment (req, res, next, id) {
  TaskAttachment.addAttachment(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAttachment = function deleteAttachment (req, res, next, id, attachmentId) {
  TaskAttachment.deleteAttachment(id, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAttachment = function getAttachment (req, res, next, id, attachmentId) {
  TaskAttachment.getAttachment(id, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAttachmentData = function getAttachmentData (req, res, next, id, attachmentId) {
  TaskAttachment.getAttachmentData(id, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAttachments = function getAttachments (req, res, next, id) {
  TaskAttachment.getAttachments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
