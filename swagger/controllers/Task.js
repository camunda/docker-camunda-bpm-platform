'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.claim = function claim (req, res, next, body, id) {
  Task.claim(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.complete = function complete (req, res, next, body, id) {
  Task.complete(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createTask = function createTask (req, res, next, body) {
  Task.createTask(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delegateTask = function delegateTask (req, res, next, body, id) {
  Task.delegateTask(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTask = function deleteTask (req, res, next, id) {
  Task.deleteTask(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeployedForm = function getDeployedForm (req, res, next, id) {
  Task.getDeployedForm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getForm = function getForm (req, res, next, id) {
  Task.getForm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFormVariables = function getFormVariables (req, res, next, id, variableNames, deserializeValues) {
  Task.getFormVariables(id, variableNames, deserializeValues)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRenderedForm = function getRenderedForm (req, res, next, id) {
  Task.getRenderedForm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTask = function getTask (req, res, next, id) {
  Task.getTask(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTasks = function getTasks (req, res, next, processInstanceId, processInstanceIdIn, processInstanceBusinessKey, processInstanceBusinessKeyExpression, processInstanceBusinessKeyIn, processInstanceBusinessKeyLike, processInstanceBusinessKeyLikeExpression, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, executionId, caseInstanceId, caseInstanceBusinessKey, caseInstanceBusinessKeyLike, caseDefinitionId, caseDefinitionKey, caseDefinitionName, caseDefinitionNameLike, caseExecutionId, activityInstanceIdIn, tenantIdIn, withoutTenantId, assignee, assigneeExpression, assigneeLike, assigneeLikeExpression, assigneeIn, owner, ownerExpression, candidateGroup, candidateGroupExpression, candidateUser, candidateUserExpression, includeAssignedTasks, involvedUser, involvedUserExpression, assigned, unassigned, taskDefinitionKey, taskDefinitionKeyIn, taskDefinitionKeyLike, name, nameNotEqual, nameLike, nameNotLike, description, descriptionLike, priority, maxPriority, minPriority, dueDate, dueDateExpression, dueAfter, dueAfterExpression, dueBefore, dueBeforeExpression, followUpDate, followUpDateExpression, followUpAfter, followUpAfterExpression, followUpBefore, followUpBeforeExpression, followUpBeforeOrNotExistent, followUpBeforeOrNotExistentExpression, createdOn, createdOnExpression, createdAfter, createdAfterExpression, createdBefore, createdBeforeExpression, delegationState, candidateGroups, candidateGroupsExpression, withCandidateGroups, withoutCandidateGroups, withCandidateUsers, withoutCandidateUsers, active, suspended, taskVariables, processVariables, caseInstanceVariables, variableNamesIgnoreCase, variableValuesIgnoreCase, parentTaskId, sortBy, sortOrder, firstResult, maxResults) {
  Task.getTasks(processInstanceId, processInstanceIdIn, processInstanceBusinessKey, processInstanceBusinessKeyExpression, processInstanceBusinessKeyIn, processInstanceBusinessKeyLike, processInstanceBusinessKeyLikeExpression, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, executionId, caseInstanceId, caseInstanceBusinessKey, caseInstanceBusinessKeyLike, caseDefinitionId, caseDefinitionKey, caseDefinitionName, caseDefinitionNameLike, caseExecutionId, activityInstanceIdIn, tenantIdIn, withoutTenantId, assignee, assigneeExpression, assigneeLike, assigneeLikeExpression, assigneeIn, owner, ownerExpression, candidateGroup, candidateGroupExpression, candidateUser, candidateUserExpression, includeAssignedTasks, involvedUser, involvedUserExpression, assigned, unassigned, taskDefinitionKey, taskDefinitionKeyIn, taskDefinitionKeyLike, name, nameNotEqual, nameLike, nameNotLike, description, descriptionLike, priority, maxPriority, minPriority, dueDate, dueDateExpression, dueAfter, dueAfterExpression, dueBefore, dueBeforeExpression, followUpDate, followUpDateExpression, followUpAfter, followUpAfterExpression, followUpBefore, followUpBeforeExpression, followUpBeforeOrNotExistent, followUpBeforeOrNotExistentExpression, createdOn, createdOnExpression, createdAfter, createdAfterExpression, createdBefore, createdBeforeExpression, delegationState, candidateGroups, candidateGroupsExpression, withCandidateGroups, withoutCandidateGroups, withCandidateUsers, withoutCandidateUsers, active, suspended, taskVariables, processVariables, caseInstanceVariables, variableNamesIgnoreCase, variableValuesIgnoreCase, parentTaskId, sortBy, sortOrder, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTasksCount = function getTasksCount (req, res, next, processInstanceId, processInstanceIdIn, processInstanceBusinessKey, processInstanceBusinessKeyExpression, processInstanceBusinessKeyIn, processInstanceBusinessKeyLike, processInstanceBusinessKeyLikeExpression, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, executionId, caseInstanceId, caseInstanceBusinessKey, caseInstanceBusinessKeyLike, caseDefinitionId, caseDefinitionKey, caseDefinitionName, caseDefinitionNameLike, caseExecutionId, activityInstanceIdIn, tenantIdIn, withoutTenantId, assignee, assigneeExpression, assigneeLike, assigneeLikeExpression, assigneeIn, owner, ownerExpression, candidateGroup, candidateGroupExpression, candidateUser, candidateUserExpression, includeAssignedTasks, involvedUser, involvedUserExpression, assigned, unassigned, taskDefinitionKey, taskDefinitionKeyIn, taskDefinitionKeyLike, name, nameNotEqual, nameLike, nameNotLike, description, descriptionLike, priority, maxPriority, minPriority, dueDate, dueDateExpression, dueAfter, dueAfterExpression, dueBefore, dueBeforeExpression, followUpDate, followUpDateExpression, followUpAfter, followUpAfterExpression, followUpBefore, followUpBeforeExpression, followUpBeforeOrNotExistent, followUpBeforeOrNotExistentExpression, createdOn, createdOnExpression, createdAfter, createdAfterExpression, createdBefore, createdBeforeExpression, delegationState, candidateGroups, candidateGroupsExpression, withCandidateGroups, withoutCandidateGroups, withCandidateUsers, withoutCandidateUsers, active, suspended, taskVariables, processVariables, caseInstanceVariables, variableNamesIgnoreCase, variableValuesIgnoreCase, parentTaskId) {
  Task.getTasksCount(processInstanceId, processInstanceIdIn, processInstanceBusinessKey, processInstanceBusinessKeyExpression, processInstanceBusinessKeyIn, processInstanceBusinessKeyLike, processInstanceBusinessKeyLikeExpression, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, executionId, caseInstanceId, caseInstanceBusinessKey, caseInstanceBusinessKeyLike, caseDefinitionId, caseDefinitionKey, caseDefinitionName, caseDefinitionNameLike, caseExecutionId, activityInstanceIdIn, tenantIdIn, withoutTenantId, assignee, assigneeExpression, assigneeLike, assigneeLikeExpression, assigneeIn, owner, ownerExpression, candidateGroup, candidateGroupExpression, candidateUser, candidateUserExpression, includeAssignedTasks, involvedUser, involvedUserExpression, assigned, unassigned, taskDefinitionKey, taskDefinitionKeyIn, taskDefinitionKeyLike, name, nameNotEqual, nameLike, nameNotLike, description, descriptionLike, priority, maxPriority, minPriority, dueDate, dueDateExpression, dueAfter, dueAfterExpression, dueBefore, dueBeforeExpression, followUpDate, followUpDateExpression, followUpAfter, followUpAfterExpression, followUpBefore, followUpBeforeExpression, followUpBeforeOrNotExistent, followUpBeforeOrNotExistentExpression, createdOn, createdOnExpression, createdAfter, createdAfterExpression, createdBefore, createdBeforeExpression, delegationState, candidateGroups, candidateGroupsExpression, withCandidateGroups, withoutCandidateGroups, withCandidateUsers, withoutCandidateUsers, active, suspended, taskVariables, processVariables, caseInstanceVariables, variableNamesIgnoreCase, variableValuesIgnoreCase, parentTaskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.handleBpmnError = function handleBpmnError (req, res, next, body, id) {
  Task.handleBpmnError(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.handleEscalation = function handleEscalation (req, res, next, body, id) {
  Task.handleEscalation(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryTasks = function queryTasks (req, res, next, body, firstResult, maxResults) {
  Task.queryTasks(body, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryTasksCount = function queryTasksCount (req, res, next, body) {
  Task.queryTasksCount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resolve = function resolve (req, res, next, body, id) {
  Task.resolve(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setAssignee = function setAssignee (req, res, next, body, id) {
  Task.setAssignee(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submit = function submit (req, res, next, body, id) {
  Task.submit(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unclaim = function unclaim (req, res, next, id) {
  Task.unclaim(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTask = function updateTask (req, res, next, body, id) {
  Task.updateTask(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
