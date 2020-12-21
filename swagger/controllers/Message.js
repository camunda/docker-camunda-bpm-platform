'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.deliverMessage = function deliverMessage (req, res, next, body) {
  Message.deliverMessage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
