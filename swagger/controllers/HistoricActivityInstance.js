'use strict';

var utils = require('../utils/writer.js');
var HistoricActivityInstance = require('../service/HistoricActivityInstanceService');

module.exports.getHistoricActivityInstance = function getHistoricActivityInstance (req, res, next, id) {
  HistoricActivityInstance.getHistoricActivityInstance(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHistoricActivityInstances = function getHistoricActivityInstances (req, res, next, sortBy, sortOrder, firstResult, maxResults, activityInstanceId, processInstanceId, processDefinitionId, executionId, activityId, activityName, activityType, taskAssignee, finished, unfinished, canceled, completeScope, startedBefore, startedAfter, finishedBefore, finishedAfter, tenantIdIn, withoutTenantId) {
  HistoricActivityInstance.getHistoricActivityInstances(sortBy, sortOrder, firstResult, maxResults, activityInstanceId, processInstanceId, processDefinitionId, executionId, activityId, activityName, activityType, taskAssignee, finished, unfinished, canceled, completeScope, startedBefore, startedAfter, finishedBefore, finishedAfter, tenantIdIn, withoutTenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHistoricActivityInstancesCount = function getHistoricActivityInstancesCount (req, res, next, activityInstanceId, processInstanceId, processDefinitionId, executionId, activityId, activityName, activityType, taskAssignee, finished, unfinished, canceled, completeScope, startedBefore, startedAfter, finishedBefore, finishedAfter, tenantIdIn, withoutTenantId) {
  HistoricActivityInstance.getHistoricActivityInstancesCount(activityInstanceId, processInstanceId, processDefinitionId, executionId, activityId, activityName, activityType, taskAssignee, finished, unfinished, canceled, completeScope, startedBefore, startedAfter, finishedBefore, finishedAfter, tenantIdIn, withoutTenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryHistoricActivityInstances = function queryHistoricActivityInstances (req, res, next, body, firstResult, maxResults) {
  HistoricActivityInstance.queryHistoricActivityInstances(body, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryHistoricActivityInstancesCount = function queryHistoricActivityInstancesCount (req, res, next, body) {
  HistoricActivityInstance.queryHistoricActivityInstancesCount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
