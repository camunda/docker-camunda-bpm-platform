'use strict';

var utils = require('../utils/writer.js');
var Incident = require('../service/IncidentService');

module.exports.getIncident = function getIncident (req, res, next, id) {
  Incident.getIncident(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIncidents = function getIncidents (req, res, next, incidentId, incidentType, incidentMessage, incidentMessageLike, processDefinitionId, processDefinitionKeyIn, processInstanceId, executionId, incidentTimestampBefore, incidentTimestampAfter, activityId, failedActivityId, causeIncidentId, rootCauseIncidentId, configuration, tenantIdIn, jobDefinitionIdIn, sortBy, sortOrder) {
  Incident.getIncidents(incidentId, incidentType, incidentMessage, incidentMessageLike, processDefinitionId, processDefinitionKeyIn, processInstanceId, executionId, incidentTimestampBefore, incidentTimestampAfter, activityId, failedActivityId, causeIncidentId, rootCauseIncidentId, configuration, tenantIdIn, jobDefinitionIdIn, sortBy, sortOrder)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIncidentsCount = function getIncidentsCount (req, res, next, incidentId, incidentType, incidentMessage, incidentMessageLike, processDefinitionId, processDefinitionKeyIn, processInstanceId, executionId, incidentTimestampBefore, incidentTimestampAfter, activityId, failedActivityId, causeIncidentId, rootCauseIncidentId, configuration, tenantIdIn, jobDefinitionIdIn) {
  Incident.getIncidentsCount(incidentId, incidentType, incidentMessage, incidentMessageLike, processDefinitionId, processDefinitionKeyIn, processInstanceId, executionId, incidentTimestampBefore, incidentTimestampAfter, activityId, failedActivityId, causeIncidentId, rootCauseIncidentId, configuration, tenantIdIn, jobDefinitionIdIn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resolveIncident = function resolveIncident (req, res, next, id) {
  Incident.resolveIncident(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
