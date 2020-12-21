'use strict';


/**
 * Get Incident
 * Retrieves an incident by ID.
 *
 * id String The id of the incident to be retrieved.
 * returns IncidentDto
 **/
exports.getIncident = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "jobDefinitionId" : "jobDefinitionId",
  "incidentMessage" : "incidentMessage",
  "configuration" : "configuration",
  "causeIncidentId" : "causeIncidentId",
  "incidentType" : "incidentType",
  "executionId" : "executionId",
  "activityId" : "activityId",
  "incidentTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "rootCauseIncidentId" : "rootCauseIncidentId",
  "tenantId" : "tenantId",
  "id" : "id",
  "failedActivityId" : "failedActivityId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List
 * Queries for incidents that fulfill given parameters. The size of the result set can be retrieved by using the [Get Incident Count](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query-count/) method.
 *
 * incidentId String Restricts to incidents that have the given id. (optional)
 * incidentType String Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentMessage String Restricts to incidents that have the given incident message. (optional)
 * incidentMessageLike String Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`). (optional)
 * processDefinitionId String Restricts to incidents that belong to a process definition with the given id. (optional)
 * processDefinitionKeyIn String Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list. (optional)
 * processInstanceId String Restricts to incidents that belong to a process instance with the given id. (optional)
 * executionId String Restricts to incidents that belong to an execution with the given id. (optional)
 * incidentTimestampBefore Date Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * incidentTimestampAfter Date Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * activityId String Restricts to incidents that belong to an activity with the given id. (optional)
 * failedActivityId String Restricts to incidents that were created due to the failure of an activity with the given id. (optional)
 * causeIncidentId String Restricts to incidents that have the given incident id as cause incident. (optional)
 * rootCauseIncidentId String Restricts to incidents that have the given incident id as root cause incident. (optional)
 * configuration String Restricts to incidents that have the given parameter set as configuration. (optional)
 * tenantIdIn String Restricts to incidents that have one of the given comma-separated tenant ids. (optional)
 * jobDefinitionIdIn String Restricts to incidents that have one of the given comma-separated job definition ids. (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * returns List
 **/
exports.getIncidents = function(incidentId,incidentType,incidentMessage,incidentMessageLike,processDefinitionId,processDefinitionKeyIn,processInstanceId,executionId,incidentTimestampBefore,incidentTimestampAfter,activityId,failedActivityId,causeIncidentId,rootCauseIncidentId,configuration,tenantIdIn,jobDefinitionIdIn,sortBy,sortOrder) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "jobDefinitionId" : "jobDefinitionId",
  "incidentMessage" : "incidentMessage",
  "configuration" : "configuration",
  "causeIncidentId" : "causeIncidentId",
  "incidentType" : "incidentType",
  "executionId" : "executionId",
  "activityId" : "activityId",
  "incidentTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "rootCauseIncidentId" : "rootCauseIncidentId",
  "tenantId" : "tenantId",
  "id" : "id",
  "failedActivityId" : "failedActivityId"
}, {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "jobDefinitionId" : "jobDefinitionId",
  "incidentMessage" : "incidentMessage",
  "configuration" : "configuration",
  "causeIncidentId" : "causeIncidentId",
  "incidentType" : "incidentType",
  "executionId" : "executionId",
  "activityId" : "activityId",
  "incidentTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "rootCauseIncidentId" : "rootCauseIncidentId",
  "tenantId" : "tenantId",
  "id" : "id",
  "failedActivityId" : "failedActivityId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List Count
 * Queries for the number of incidents that fulfill given parameters. Takes the same parameters as the [Get Incidents](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query/) method.
 *
 * incidentId String Restricts to incidents that have the given id. (optional)
 * incidentType String Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentMessage String Restricts to incidents that have the given incident message. (optional)
 * incidentMessageLike String Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`). (optional)
 * processDefinitionId String Restricts to incidents that belong to a process definition with the given id. (optional)
 * processDefinitionKeyIn String Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list. (optional)
 * processInstanceId String Restricts to incidents that belong to a process instance with the given id. (optional)
 * executionId String Restricts to incidents that belong to an execution with the given id. (optional)
 * incidentTimestampBefore Date Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * incidentTimestampAfter Date Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * activityId String Restricts to incidents that belong to an activity with the given id. (optional)
 * failedActivityId String Restricts to incidents that were created due to the failure of an activity with the given id. (optional)
 * causeIncidentId String Restricts to incidents that have the given incident id as cause incident. (optional)
 * rootCauseIncidentId String Restricts to incidents that have the given incident id as root cause incident. (optional)
 * configuration String Restricts to incidents that have the given parameter set as configuration. (optional)
 * tenantIdIn String Restricts to incidents that have one of the given comma-separated tenant ids. (optional)
 * jobDefinitionIdIn String Restricts to incidents that have one of the given comma-separated job definition ids. (optional)
 * returns List
 **/
exports.getIncidentsCount = function(incidentId,incidentType,incidentMessage,incidentMessageLike,processDefinitionId,processDefinitionKeyIn,processInstanceId,executionId,incidentTimestampBefore,incidentTimestampAfter,activityId,failedActivityId,causeIncidentId,rootCauseIncidentId,configuration,tenantIdIn,jobDefinitionIdIn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "count" : 0
}, {
  "count" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Resolve Incident
 * Resolves an incident with given id.
 *
 * id String The id of the incident to be resolved.
 * no response value expected for this operation
 **/
exports.resolveIncident = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

