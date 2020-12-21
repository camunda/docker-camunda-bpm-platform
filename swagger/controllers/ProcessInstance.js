'use strict';

var utils = require('../utils/writer.js');
var ProcessInstance = require('../service/ProcessInstanceService');

module.exports.deleteAsyncHistoricQueryBased = function deleteAsyncHistoricQueryBased (req, res, next, body) {
  ProcessInstance.deleteAsyncHistoricQueryBased(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProcessInstance = function deleteProcessInstance (req, res, next, id, skipCustomListeners, skipIoMappings, skipSubprocesses, failIfNotExists) {
  ProcessInstance.deleteProcessInstance(id, skipCustomListeners, skipIoMappings, skipSubprocesses, failIfNotExists)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProcessInstanceVariable = function deleteProcessInstanceVariable (req, res, next, id, varName) {
  ProcessInstance.deleteProcessInstanceVariable(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProcessInstancesAsyncOperation = function deleteProcessInstancesAsyncOperation (req, res, next, body) {
  ProcessInstance.deleteProcessInstancesAsyncOperation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivityInstanceTree = function getActivityInstanceTree (req, res, next, id) {
  ProcessInstance.getActivityInstanceTree(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessInstance = function getProcessInstance (req, res, next, id) {
  ProcessInstance.getProcessInstance(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessInstanceVariable = function getProcessInstanceVariable (req, res, next, id, varName, deserializeValue) {
  ProcessInstance.getProcessInstanceVariable(id, varName, deserializeValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessInstanceVariableBinary = function getProcessInstanceVariableBinary (req, res, next, id, varName) {
  ProcessInstance.getProcessInstanceVariableBinary(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessInstanceVariables = function getProcessInstanceVariables (req, res, next, id, deserializeValue) {
  ProcessInstance.getProcessInstanceVariables(id, deserializeValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessInstances = function getProcessInstances (req, res, next, sortBy, sortOrder, firstResult, maxResults, processInstanceIds, businessKey, businessKeyLike, caseInstanceId, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionKeyNotIn, deploymentId, superProcessInstance, subProcessInstance, superCaseInstance, subCaseInstance, active, suspended, withIncident, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, processDefinitionWithoutTenantId, activityIdIn, rootProcessInstances, leafProcessInstances, variables, variableNamesIgnoreCase, variableValuesIgnoreCase) {
  ProcessInstance.getProcessInstances(sortBy, sortOrder, firstResult, maxResults, processInstanceIds, businessKey, businessKeyLike, caseInstanceId, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionKeyNotIn, deploymentId, superProcessInstance, subProcessInstance, superCaseInstance, subCaseInstance, active, suspended, withIncident, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, processDefinitionWithoutTenantId, activityIdIn, rootProcessInstances, leafProcessInstances, variables, variableNamesIgnoreCase, variableValuesIgnoreCase)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessInstancesCount = function getProcessInstancesCount (req, res, next, processInstanceIds, businessKey, businessKeyLike, caseInstanceId, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionKeyNotIn, deploymentId, superProcessInstance, subProcessInstance, superCaseInstance, subCaseInstance, active, suspended, withIncident, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, processDefinitionWithoutTenantId, activityIdIn, rootProcessInstances, leafProcessInstances, variables, variableNamesIgnoreCase, variableValuesIgnoreCase) {
  ProcessInstance.getProcessInstancesCount(processInstanceIds, businessKey, businessKeyLike, caseInstanceId, processDefinitionId, processDefinitionKey, processDefinitionKeyIn, processDefinitionKeyNotIn, deploymentId, superProcessInstance, subProcessInstance, superCaseInstance, subCaseInstance, active, suspended, withIncident, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, processDefinitionWithoutTenantId, activityIdIn, rootProcessInstances, leafProcessInstances, variables, variableNamesIgnoreCase, variableValuesIgnoreCase)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyProcessInstance = function modifyProcessInstance (req, res, next, body, id) {
  ProcessInstance.modifyProcessInstance(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyProcessInstanceAsyncOperation = function modifyProcessInstanceAsyncOperation (req, res, next, body, id) {
  ProcessInstance.modifyProcessInstanceAsyncOperation(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyProcessInstanceVariables = function modifyProcessInstanceVariables (req, res, next, body, id) {
  ProcessInstance.modifyProcessInstanceVariables(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryProcessInstances = function queryProcessInstances (req, res, next, body, firstResult, maxResults) {
  ProcessInstance.queryProcessInstances(body, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryProcessInstancesCount = function queryProcessInstancesCount (req, res, next, body) {
  ProcessInstance.queryProcessInstancesCount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setProcessInstanceVariable = function setProcessInstanceVariable (req, res, next, body, id, varName) {
  ProcessInstance.setProcessInstanceVariable(body, id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setProcessInstanceVariableBinary = function setProcessInstanceVariableBinary (req, res, next, id, varName) {
  ProcessInstance.setProcessInstanceVariableBinary(id, varName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setRetriesByProcess = function setRetriesByProcess (req, res, next, body) {
  ProcessInstance.setRetriesByProcess(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setRetriesByProcessHistoricQueryBased = function setRetriesByProcessHistoricQueryBased (req, res, next, body) {
  ProcessInstance.setRetriesByProcessHistoricQueryBased(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setVariablesAsyncOperation = function setVariablesAsyncOperation (req, res, next, body) {
  ProcessInstance.setVariablesAsyncOperation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSuspensionState = function updateSuspensionState (req, res, next, body) {
  ProcessInstance.updateSuspensionState(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSuspensionStateAsyncOperation = function updateSuspensionStateAsyncOperation (req, res, next, body) {
  ProcessInstance.updateSuspensionStateAsyncOperation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSuspensionStateById = function updateSuspensionStateById (req, res, next, body, id) {
  ProcessInstance.updateSuspensionStateById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
