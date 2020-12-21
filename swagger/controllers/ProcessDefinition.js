'use strict';

var utils = require('../utils/writer.js');
var ProcessDefinition = require('../service/ProcessDefinitionService');

module.exports.deleteProcessDefinition = function deleteProcessDefinition (req, res, next, id, cascade, skipCustomListeners, skipIoMappings) {
  ProcessDefinition.deleteProcessDefinition(id, cascade, skipCustomListeners, skipIoMappings)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProcessDefinitionsByKey = function deleteProcessDefinitionsByKey (req, res, next, key, cascade, skipCustomListeners, skipIoMappings) {
  ProcessDefinition.deleteProcessDefinitionsByKey(key, cascade, skipCustomListeners, skipIoMappings)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProcessDefinitionsByKeyAndTenantId = function deleteProcessDefinitionsByKeyAndTenantId (req, res, next, key, tenantId, cascade, skipCustomListeners, skipIoMappings) {
  ProcessDefinition.deleteProcessDefinitionsByKeyAndTenantId(key, tenantId, cascade, skipCustomListeners, skipIoMappings)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivityStatistics = function getActivityStatistics (req, res, next, id, failedJobs, incidents, incidentsForType) {
  ProcessDefinition.getActivityStatistics(id, failedJobs, incidents, incidentsForType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivityStatisticsByProcessDefinitionKey = function getActivityStatisticsByProcessDefinitionKey (req, res, next, key, failedJobs, incidents, incidentsForType) {
  ProcessDefinition.getActivityStatisticsByProcessDefinitionKey(key, failedJobs, incidents, incidentsForType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivityStatisticsByProcessDefinitionKeyAndTenantId = function getActivityStatisticsByProcessDefinitionKeyAndTenantId (req, res, next, key, tenantId, failedJobs, incidents, incidentsForType) {
  ProcessDefinition.getActivityStatisticsByProcessDefinitionKeyAndTenantId(key, tenantId, failedJobs, incidents, incidentsForType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeployedStartForm = function getDeployedStartForm (req, res, next, id) {
  ProcessDefinition.getDeployedStartForm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeployedStartFormByKey = function getDeployedStartFormByKey (req, res, next, key) {
  ProcessDefinition.getDeployedStartFormByKey(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeployedStartFormByKeyAndTenantId = function getDeployedStartFormByKeyAndTenantId (req, res, next, key, tenantId) {
  ProcessDefinition.getDeployedStartFormByKeyAndTenantId(key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatestProcessDefinitionByTenantId = function getLatestProcessDefinitionByTenantId (req, res, next, key, tenantId) {
  ProcessDefinition.getLatestProcessDefinitionByTenantId(key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinition = function getProcessDefinition (req, res, next, id) {
  ProcessDefinition.getProcessDefinition(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionBpmn20Xml = function getProcessDefinitionBpmn20Xml (req, res, next, id) {
  ProcessDefinition.getProcessDefinitionBpmn20Xml(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionBpmn20XmlByKey = function getProcessDefinitionBpmn20XmlByKey (req, res, next, key) {
  ProcessDefinition.getProcessDefinitionBpmn20XmlByKey(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionBpmn20XmlByKeyAndTenantId = function getProcessDefinitionBpmn20XmlByKeyAndTenantId (req, res, next, key, tenantId) {
  ProcessDefinition.getProcessDefinitionBpmn20XmlByKeyAndTenantId(key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionByKey = function getProcessDefinitionByKey (req, res, next, key) {
  ProcessDefinition.getProcessDefinitionByKey(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionDiagram = function getProcessDefinitionDiagram (req, res, next, id) {
  ProcessDefinition.getProcessDefinitionDiagram(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionDiagramByKey = function getProcessDefinitionDiagramByKey (req, res, next, key) {
  ProcessDefinition.getProcessDefinitionDiagramByKey(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionDiagramByKeyAndTenantId = function getProcessDefinitionDiagramByKeyAndTenantId (req, res, next, key, tenantId) {
  ProcessDefinition.getProcessDefinitionDiagramByKeyAndTenantId(key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionStatistics = function getProcessDefinitionStatistics (req, res, next, failedJobs, incidents, incidentsForType, rootIncidents) {
  ProcessDefinition.getProcessDefinitionStatistics(failedJobs, incidents, incidentsForType, rootIncidents)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitions = function getProcessDefinitions (req, res, next, processDefinitionId, processDefinitionIdIn, name, nameLike, deploymentId, deployedAfter, deployedAt, key, keysIn, keyLike, category, categoryLike, version, latestVersion, resourceName, resourceNameLike, startableBy, active, suspended, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, includeProcessDefinitionsWithoutTenantId, versionTag, versionTagLike, withoutVersionTag, startableInTasklist, notStartableInTasklist, startablePermissionCheck, sortBy, sortOrder, firstResult, maxResults) {
  ProcessDefinition.getProcessDefinitions(processDefinitionId, processDefinitionIdIn, name, nameLike, deploymentId, deployedAfter, deployedAt, key, keysIn, keyLike, category, categoryLike, version, latestVersion, resourceName, resourceNameLike, startableBy, active, suspended, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, includeProcessDefinitionsWithoutTenantId, versionTag, versionTagLike, withoutVersionTag, startableInTasklist, notStartableInTasklist, startablePermissionCheck, sortBy, sortOrder, firstResult, maxResults)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcessDefinitionsCount = function getProcessDefinitionsCount (req, res, next, processDefinitionId, processDefinitionIdIn, name, nameLike, deploymentId, deployedAfter, deployedAt, key, keysIn, keyLike, category, categoryLike, version, latestVersion, resourceName, resourceNameLike, startableBy, active, suspended, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, includeProcessDefinitionsWithoutTenantId, versionTag, versionTagLike, withoutVersionTag, startableInTasklist, notStartableInTasklist, startablePermissionCheck) {
  ProcessDefinition.getProcessDefinitionsCount(processDefinitionId, processDefinitionIdIn, name, nameLike, deploymentId, deployedAfter, deployedAt, key, keysIn, keyLike, category, categoryLike, version, latestVersion, resourceName, resourceNameLike, startableBy, active, suspended, incidentId, incidentType, incidentMessage, incidentMessageLike, tenantIdIn, withoutTenantId, includeProcessDefinitionsWithoutTenantId, versionTag, versionTagLike, withoutVersionTag, startableInTasklist, notStartableInTasklist, startablePermissionCheck)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRenderedStartForm = function getRenderedStartForm (req, res, next, id) {
  ProcessDefinition.getRenderedStartForm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRenderedStartFormByKey = function getRenderedStartFormByKey (req, res, next, key) {
  ProcessDefinition.getRenderedStartFormByKey(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRenderedStartFormByKeyAndTenantId = function getRenderedStartFormByKeyAndTenantId (req, res, next, key, tenantId) {
  ProcessDefinition.getRenderedStartFormByKeyAndTenantId(key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStartForm = function getStartForm (req, res, next, id) {
  ProcessDefinition.getStartForm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStartFormByKey = function getStartFormByKey (req, res, next, key) {
  ProcessDefinition.getStartFormByKey(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStartFormByKeyAndTenantId = function getStartFormByKeyAndTenantId (req, res, next, key, tenantId) {
  ProcessDefinition.getStartFormByKeyAndTenantId(key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStartFormVariables = function getStartFormVariables (req, res, next, id, variableNames, deserializeValues) {
  ProcessDefinition.getStartFormVariables(id, variableNames, deserializeValues)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStartFormVariablesByKey = function getStartFormVariablesByKey (req, res, next, key, variableNames, deserializeValues) {
  ProcessDefinition.getStartFormVariablesByKey(key, variableNames, deserializeValues)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStartFormVariablesByKeyAndTenantId = function getStartFormVariablesByKeyAndTenantId (req, res, next, key, tenantId, variableNames, deserializeValues) {
  ProcessDefinition.getStartFormVariablesByKeyAndTenantId(key, tenantId, variableNames, deserializeValues)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restartProcessInstance = function restartProcessInstance (req, res, next, body, id) {
  ProcessDefinition.restartProcessInstance(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restartProcessInstanceAsyncOperation = function restartProcessInstanceAsyncOperation (req, res, next, body, id) {
  ProcessDefinition.restartProcessInstanceAsyncOperation(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startProcessInstance = function startProcessInstance (req, res, next, body, id) {
  ProcessDefinition.startProcessInstance(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startProcessInstanceByKey = function startProcessInstanceByKey (req, res, next, body, key) {
  ProcessDefinition.startProcessInstanceByKey(body, key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startProcessInstanceByKeyAndTenantId = function startProcessInstanceByKeyAndTenantId (req, res, next, body, key, tenantId) {
  ProcessDefinition.startProcessInstanceByKeyAndTenantId(body, key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitForm = function submitForm (req, res, next, body, id) {
  ProcessDefinition.submitForm(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitFormByKey = function submitFormByKey (req, res, next, body, key) {
  ProcessDefinition.submitFormByKey(body, key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitFormByKeyAndTenantId = function submitFormByKeyAndTenantId (req, res, next, body, key, tenantId) {
  ProcessDefinition.submitFormByKeyAndTenantId(body, key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateHistoryTimeToLiveByProcessDefinitionId = function updateHistoryTimeToLiveByProcessDefinitionId (req, res, next, body, id) {
  ProcessDefinition.updateHistoryTimeToLiveByProcessDefinitionId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateHistoryTimeToLiveByProcessDefinitionKey = function updateHistoryTimeToLiveByProcessDefinitionKey (req, res, next, body, key) {
  ProcessDefinition.updateHistoryTimeToLiveByProcessDefinitionKey(body, key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId = function updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId (req, res, next, body, key, tenantId) {
  ProcessDefinition.updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId(body, key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProcessDefinitionSuspensionState = function updateProcessDefinitionSuspensionState (req, res, next, body) {
  ProcessDefinition.updateProcessDefinitionSuspensionState(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProcessDefinitionSuspensionStateById = function updateProcessDefinitionSuspensionStateById (req, res, next, body, id) {
  ProcessDefinition.updateProcessDefinitionSuspensionStateById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProcessDefinitionSuspensionStateByKey = function updateProcessDefinitionSuspensionStateByKey (req, res, next, body, key) {
  ProcessDefinition.updateProcessDefinitionSuspensionStateByKey(body, key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProcessDefinitionSuspensionStateByKeyAndTenantId = function updateProcessDefinitionSuspensionStateByKeyAndTenantId (req, res, next, body, key, tenantId) {
  ProcessDefinition.updateProcessDefinitionSuspensionStateByKeyAndTenantId(body, key, tenantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
