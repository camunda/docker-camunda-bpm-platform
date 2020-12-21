'use strict';

var utils = require('../utils/writer.js');
var HistoricProcessInstance = require('../service/HistoricProcessInstanceService');

module.exports.deleteHistoricProcessInstance = function deleteHistoricProcessInstance (req, res, next, id, failIfNotExists) {
  HistoricProcessInstance.deleteHistoricProcessInstance(id, failIfNotExists)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteHistoricProcessInstancesAsync = function deleteHistoricProcessInstancesAsync (req, res, next, body) {
  HistoricProcessInstance.deleteHistoricProcessInstancesAsync(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteHistoricVariableInstancesOfHistoricProcessInstance = function deleteHistoricVariableInstancesOfHistoricProcessInstance (req, res, next, id) {
  HistoricProcessInstance.deleteHistoricVariableInstancesOfHistoricProcessInstance(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHistoricProcessInstance = function getHistoricProcessInstance (req, res, next, id) {
  HistoricProcessInstance.getHistoricProcessInstance(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHistoricProcessInstanceDurationReport = function getHistoricProcessInstanceDurationReport (req, res, next, reportType, periodUnit, processDefinitionIdIn, processDefinitionKeyIn, startedBefore, startedAfter) {
  HistoricProcessInstance.getHistoricProcessInstanceDurationReport(reportType, periodUnit, processDefinitionIdIn, processDefinitionKeyIn, startedBefore, startedAfter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHistoricProcessInstances = function getHistoricProcessInstances (req, res, next, sortBy, sortOrder, firstResult, maxResults, processInstanceId, processInstanceIds, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, processDefinitionKeyNotIn, processInstanceBusinessKey, processInstanceBusinessKeyLike, rootProcessInstances, finished, unfinished, withIncidents, withRootIncidents, incidentType, incidentStatus, incidentMessage, incidentMessageLike, startedBefore, startedAfter, finishedBefore, finishedAfter, executedActivityAfter, executedActivityBefore, executedJobAfter, executedJobBefore, startedBy, superProcessInstanceId, subProcessInstanceId, superCaseInstanceId, subCaseInstanceId, caseInstanceId, tenantIdIn, withoutTenantId, executedActivityIdIn, activeActivityIdIn, active, suspended, completed, externallyTerminated, internallyTerminated, variables, variableNamesIgnoreCase, variableValuesIgnoreCase) {
  HistoricProcessInstance.getHistoricProcessInstances(sortBy, sortOrder, firstResult, maxResults, processInstanceId, processInstanceIds, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, processDefinitionKeyNotIn, processInstanceBusinessKey, processInstanceBusinessKeyLike, rootProcessInstances, finished, unfinished, withIncidents, withRootIncidents, incidentType, incidentStatus, incidentMessage, incidentMessageLike, startedBefore, startedAfter, finishedBefore, finishedAfter, executedActivityAfter, executedActivityBefore, executedJobAfter, executedJobBefore, startedBy, superProcessInstanceId, subProcessInstanceId, superCaseInstanceId, subCaseInstanceId, caseInstanceId, tenantIdIn, withoutTenantId, executedActivityIdIn, activeActivityIdIn, active, suspended, completed, externallyTerminated, internallyTerminated, variables, variableNamesIgnoreCase, variableValuesIgnoreCase)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHistoricProcessInstancesCount = function getHistoricProcessInstancesCount (req, res, next, processInstanceId, processInstanceIds, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, processDefinitionKeyNotIn, processInstanceBusinessKey, processInstanceBusinessKeyLike, rootProcessInstances, finished, unfinished, withIncidents, withRootIncidents, incidentType, incidentStatus, incidentMessage, incidentMessageLike, startedBefore, startedAfter, finishedBefore, finishedAfter, executedActivityAfter, executedActivityBefore, executedJobAfter, executedJobBefore, startedBy, superProcessInstanceId, subProcessInstanceId, superCaseInstanceId, subCaseInstanceId, caseInstanceId, tenantIdIn, withoutTenantId, executedActivityIdIn, activeActivityIdIn, active, suspended, completed, externallyTerminated, internallyTerminated, variables, variableNamesIgnoreCase, variableValuesIgnoreCase) {
  HistoricProcessInstance.getHistoricProcessInstancesCount(processInstanceId, processInstanceIds, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionName, processDefinitionNameLike, processDefinitionKeyNotIn, processInstanceBusinessKey, processInstanceBusinessKeyLike, rootProcessInstances, finished, unfinished, withIncidents, withRootIncidents, incidentType, incidentStatus, incidentMessage, incidentMessageLike, startedBefore, startedAfter, finishedBefore, finishedAfter, executedActivityAfter, executedActivityBefore, executedJobAfter, executedJobBefore, startedBy, superProcessInstanceId, subProcessInstanceId, superCaseInstanceId, subCaseInstanceId, caseInstanceId, tenantIdIn, withoutTenantId, executedActivityIdIn, activeActivityIdIn, active, suspended, completed, externallyTerminated, internallyTerminated, variables, variableNamesIgnoreCase, variableValuesIgnoreCase)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryHistoricProcessInstances = function queryHistoricProcessInstances (req, res, next, body, firstResult, maxResults) {
  HistoricProcessInstance.queryHistoricProcessInstances(body, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryHistoricProcessInstancesCount = function queryHistoricProcessInstancesCount (req, res, next, body) {
  HistoricProcessInstance.queryHistoricProcessInstancesCount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setRemovalTimeAsync = function setRemovalTimeAsync (req, res, next, body) {
  HistoricProcessInstance.setRemovalTimeAsync(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
