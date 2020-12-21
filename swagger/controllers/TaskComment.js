'use strict';

var utils = require('../utils/writer.js');
var TaskComment = require('../service/TaskCommentService');

module.exports.createComment = function createComment (req, res, next, body, id) {
  TaskComment.createComment(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getComment = function getComment (req, res, next, id, commentId) {
  TaskComment.getComment(id, commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getComments = function getComments (req, res, next, id) {
  TaskComment.getComments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
