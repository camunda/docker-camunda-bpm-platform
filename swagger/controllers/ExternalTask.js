'use strict';

var utils = require('../utils/writer.js');
var ExternalTask = require('../service/ExternalTaskService');

module.exports.completeExternalTaskResource = function completeExternalTaskResource (req, res, next, body, id) {
  ExternalTask.completeExternalTaskResource(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.extendLock = function extendLock (req, res, next, body, id) {
  ExternalTask.extendLock(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetchAndLock = function fetchAndLock (req, res, next, body) {
  ExternalTask.fetchAndLock(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExternalTask = function getExternalTask (req, res, next, id) {
  ExternalTask.getExternalTask(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExternalTaskErrorDetails = function getExternalTaskErrorDetails (req, res, next, id) {
  ExternalTask.getExternalTaskErrorDetails(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExternalTasks = function getExternalTasks (req, res, next, externalTaskId, externalTaskIdIn, topicName, workerId, locked, notLocked, withRetriesLeft, noRetriesLeft, lockExpirationAfter, lockExpirationBefore, activityId, activityIdIn, executionId, processInstanceId, processInstanceIdIn, processDefinitionId, tenantIdIn, active, suspended, priorityHigherThanOrEquals, priorityLowerThanOrEquals, sortBy, sortOrder, firstResult, maxResults) {
  ExternalTask.getExternalTasks(externalTaskId, externalTaskIdIn, topicName, workerId, locked, notLocked, withRetriesLeft, noRetriesLeft, lockExpirationAfter, lockExpirationBefore, activityId, activityIdIn, executionId, processInstanceId, processInstanceIdIn, processDefinitionId, tenantIdIn, active, suspended, priorityHigherThanOrEquals, priorityLowerThanOrEquals, sortBy, sortOrder, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExternalTasksCount = function getExternalTasksCount (req, res, next, externalTaskId, externalTaskIdIn, topicName, workerId, locked, notLocked, withRetriesLeft, noRetriesLeft, lockExpirationAfter, lockExpirationBefore, activityId, activityIdIn, executionId, processInstanceId, processInstanceIdIn, processDefinitionId, tenantIdIn, active, suspended, priorityHigherThanOrEquals, priorityLowerThanOrEquals) {
  ExternalTask.getExternalTasksCount(externalTaskId, externalTaskIdIn, topicName, workerId, locked, notLocked, withRetriesLeft, noRetriesLeft, lockExpirationAfter, lockExpirationBefore, activityId, activityIdIn, executionId, processInstanceId, processInstanceIdIn, processDefinitionId, tenantIdIn, active, suspended, priorityHigherThanOrEquals, priorityLowerThanOrEquals)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTopicNames = function getTopicNames (req, res, next, withLockedTasks, withUnlockedTasks, withRetriesLeft) {
  ExternalTask.getTopicNames(withLockedTasks, withUnlockedTasks, withRetriesLeft)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.handleExternalTaskBpmnError = function handleExternalTaskBpmnError (req, res, next, body, id) {
  ExternalTask.handleExternalTaskBpmnError(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.handleFailure = function handleFailure (req, res, next, body, id) {
  ExternalTask.handleFailure(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryExternalTasks = function queryExternalTasks (req, res, next, body, firstResult, maxResults) {
  ExternalTask.queryExternalTasks(body, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryExternalTasksCount = function queryExternalTasksCount (req, res, next, body) {
  ExternalTask.queryExternalTasksCount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setExternalTaskResourcePriority = function setExternalTaskResourcePriority (req, res, next, body, id) {
  ExternalTask.setExternalTaskResourcePriority(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setExternalTaskResourceRetries = function setExternalTaskResourceRetries (req, res, next, body, id) {
  ExternalTask.setExternalTaskResourceRetries(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setExternalTaskRetries = function setExternalTaskRetries (req, res, next, body) {
  ExternalTask.setExternalTaskRetries(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setExternalTaskRetriesAsyncOperation = function setExternalTaskRetriesAsyncOperation (req, res, next, body) {
  ExternalTask.setExternalTaskRetriesAsyncOperation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unlock = function unlock (req, res, next, id) {
  ExternalTask.unlock(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
