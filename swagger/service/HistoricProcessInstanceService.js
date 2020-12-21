'use strict';


/**
 * Delete
 * Deletes a process instance from the history by id.
 *
 * id String The id of the historic process instance to be deleted.
 * failIfNotExists Boolean If set to `false`, the request will still be successful if the process id is not found. (optional)
 * no response value expected for this operation
 **/
exports.deleteHistoricProcessInstance = function(id,failIfNotExists) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete Async (POST)
 * Delete multiple historic process instances asynchronously (batch). At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided. If both are provided then all instances matching query criterion and instances from the list will be deleted.
 *
 * body DeleteHistoricProcessInstancesDto  (optional)
 * returns BatchDto
 **/
exports.deleteHistoricProcessInstancesAsync = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "monitorJobDefinitionId" : "monitorJobDefinitionId",
  "createUserId" : "createUserId",
  "invocationsPerBatchJob" : 5,
  "totalJobs" : 0,
  "jobsCreated" : 6,
  "tenantId" : "tenantId",
  "batchJobsPerSeed" : 1,
  "seedJobDefinitionId" : "seedJobDefinitionId",
  "id" : "id",
  "type" : "type",
  "batchJobDefinitionId" : "batchJobDefinitionId",
  "suspended" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Variable Instances
 * Deletes all variables of a process instance from the history by id.
 *
 * id String The id of the process instance for which all historic variables are to be deleted.
 * no response value expected for this operation
 **/
exports.deleteHistoricVariableInstancesOfHistoricProcessInstance = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get
 * Retrieves a historic process instance by id, according to the `HistoricProcessInstance` interface in the engine.
 *
 * id String The id of the historic process instance to be retrieved.
 * returns HistoricProcessInstanceDto
 **/
exports.getHistoricProcessInstance = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "processDefinitionId" : "processDefinitionId",
  "durationInMillis" : 6,
  "caseInstanceId" : "caseInstanceId",
  "processDefinitionName" : "processDefinitionName",
  "superCaseInstanceId" : "superCaseInstanceId",
  "deleteReason" : "deleteReason",
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "startUserId" : "startUserId",
  "startActivityId" : "startActivityId",
  "businessKey" : "businessKey",
  "tenantId" : "tenantId",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "state" : "ACTIVE",
  "processDefinitionVersion" : 0,
  "superProcessInstanceId" : "superProcessInstanceId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Duration Report
 * Retrieves a report about the duration of completed process instances, grouped by a period. These reports include the maximum, minimum and average duration of all completed process instances which were started in a given period.  **Note:** This only includes historic data.
 *
 * reportType String **Mandatory.** Specifies the type of the report to retrieve. To retrieve a report about the duration of process instances, the value must be set to `duration`.
 * periodUnit String **Mandatory.** Specifies the granularity of the report. Valid values are `month` and `quarter`.
 * processDefinitionIdIn String Filter by process definition ids. Must be a comma-separated list of process definition ids. (optional)
 * processDefinitionKeyIn String Filter by process definition keys. Must be a comma-separated list of process definition keys. (optional)
 * startedBefore Date Restrict to instances that were started before the given date. By [default](), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`. (optional)
 * startedAfter Date Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`. (optional)
 * no response value expected for this operation
 **/
exports.getHistoricProcessInstanceDurationReport = function(reportType,periodUnit,processDefinitionIdIn,processDefinitionKeyIn,startedBefore,startedAfter) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get List
 * Queries for historic process instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query-count/) method.
 *
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * processInstanceId String Filter by process instance id. (optional)
 * processInstanceIds String Filter by process instance ids. Filter by a comma-separated list of `Strings`. (optional)
 * processDefinitionId String Filter by the process definition the instances run on. (optional)
 * processDefinitionKey String Filter by the key of the process definition the instances run on. (optional)
 * processDefinitionKeyIn String Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`. (optional)
 * processDefinitionName String Filter by the name of the process definition the instances run on. (optional)
 * processDefinitionNameLike String Filter by process definition names that the parameter is a substring of. (optional)
 * processDefinitionKeyNotIn String Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`. (optional)
 * processInstanceBusinessKey String Filter by process instance business key. (optional)
 * processInstanceBusinessKeyLike String Filter by process instance business key that the parameter is a substring of. (optional)
 * rootProcessInstances Boolean Restrict the query to all process instances that are top level process instances. (optional)
 * finished Boolean Only include finished process instances. Value may only be `true`, as `false` is the default behavior. (optional)
 * unfinished Boolean Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior. (optional)
 * withIncidents Boolean Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior. (optional)
 * withRootIncidents Boolean Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior. (optional)
 * incidentType String Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentStatus String Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents. (optional)
 * incidentMessage String Filter by the incident message. Exact match. (optional)
 * incidentMessageLike String Filter by the incident message that the parameter is a substring of. (optional)
 * startedBefore Date Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * startedAfter Date Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedBefore Date Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedAfter Date Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedActivityAfter Date Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedActivityBefore Date Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedJobAfter Date Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedJobBefore Date Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * startedBy String Only include process instances that were started by the given user. (optional)
 * superProcessInstanceId String Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. (optional)
 * subProcessInstanceId String Restrict query to one process instance that has a sub process instance with the given id. (optional)
 * superCaseInstanceId String Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. (optional)
 * subCaseInstanceId String Restrict query to one process instance that has a sub case instance with the given id. (optional)
 * caseInstanceId String Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. (optional)
 * tenantIdIn String Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings` (optional)
 * withoutTenantId Boolean Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior. (optional)
 * executedActivityIdIn String Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings` (optional)
 * activeActivityIdIn String Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings` (optional)
 * active Boolean Restrict to instances that are active. (optional)
 * suspended Boolean Restrict to instances that are suspended. (optional)
 * completed Boolean Restrict to instances that are completed. (optional)
 * externallyTerminated Boolean Restrict to instances that are externallyTerminated. (optional)
 * internallyTerminated Boolean Restrict to instances that are internallyTerminated. (optional)
 * variables String Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.  Key and value may not contain underscore or comma characters.  (optional)
 * variableNamesIgnoreCase Boolean Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal. (optional)
 * variableValuesIgnoreCase Boolean Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal. (optional)
 * returns List
 **/
exports.getHistoricProcessInstances = function(sortBy,sortOrder,firstResult,maxResults,processInstanceId,processInstanceIds,processDefinitionId,processDefinitionKey,processDefinitionKeyIn,processDefinitionName,processDefinitionNameLike,processDefinitionKeyNotIn,processInstanceBusinessKey,processInstanceBusinessKeyLike,rootProcessInstances,finished,unfinished,withIncidents,withRootIncidents,incidentType,incidentStatus,incidentMessage,incidentMessageLike,startedBefore,startedAfter,finishedBefore,finishedAfter,executedActivityAfter,executedActivityBefore,executedJobAfter,executedJobBefore,startedBy,superProcessInstanceId,subProcessInstanceId,superCaseInstanceId,subCaseInstanceId,caseInstanceId,tenantIdIn,withoutTenantId,executedActivityIdIn,activeActivityIdIn,active,suspended,completed,externallyTerminated,internallyTerminated,variables,variableNamesIgnoreCase,variableValuesIgnoreCase) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "durationInMillis" : 6,
  "caseInstanceId" : "caseInstanceId",
  "processDefinitionName" : "processDefinitionName",
  "superCaseInstanceId" : "superCaseInstanceId",
  "deleteReason" : "deleteReason",
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "startUserId" : "startUserId",
  "startActivityId" : "startActivityId",
  "businessKey" : "businessKey",
  "tenantId" : "tenantId",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "state" : "ACTIVE",
  "processDefinitionVersion" : 0,
  "superProcessInstanceId" : "superProcessInstanceId"
}, {
  "processDefinitionId" : "processDefinitionId",
  "durationInMillis" : 6,
  "caseInstanceId" : "caseInstanceId",
  "processDefinitionName" : "processDefinitionName",
  "superCaseInstanceId" : "superCaseInstanceId",
  "deleteReason" : "deleteReason",
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "startUserId" : "startUserId",
  "startActivityId" : "startActivityId",
  "businessKey" : "businessKey",
  "tenantId" : "tenantId",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "state" : "ACTIVE",
  "processDefinitionVersion" : 0,
  "superProcessInstanceId" : "superProcessInstanceId"
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
 * Queries for the number of historic process instances that fulfill the given parameters. Takes the same parameters as the [Get Process Instances](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method.
 *
 * processInstanceId String Filter by process instance id. (optional)
 * processInstanceIds String Filter by process instance ids. Filter by a comma-separated list of `Strings`. (optional)
 * processDefinitionId String Filter by the process definition the instances run on. (optional)
 * processDefinitionKey String Filter by the key of the process definition the instances run on. (optional)
 * processDefinitionKeyIn String Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`. (optional)
 * processDefinitionName String Filter by the name of the process definition the instances run on. (optional)
 * processDefinitionNameLike String Filter by process definition names that the parameter is a substring of. (optional)
 * processDefinitionKeyNotIn String Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`. (optional)
 * processInstanceBusinessKey String Filter by process instance business key. (optional)
 * processInstanceBusinessKeyLike String Filter by process instance business key that the parameter is a substring of. (optional)
 * rootProcessInstances Boolean Restrict the query to all process instances that are top level process instances. (optional)
 * finished Boolean Only include finished process instances. Value may only be `true`, as `false` is the default behavior. (optional)
 * unfinished Boolean Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior. (optional)
 * withIncidents Boolean Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior. (optional)
 * withRootIncidents Boolean Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior. (optional)
 * incidentType String Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentStatus String Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents. (optional)
 * incidentMessage String Filter by the incident message. Exact match. (optional)
 * incidentMessageLike String Filter by the incident message that the parameter is a substring of. (optional)
 * startedBefore Date Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * startedAfter Date Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedBefore Date Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedAfter Date Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedActivityAfter Date Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedActivityBefore Date Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedJobAfter Date Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * executedJobBefore Date Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * startedBy String Only include process instances that were started by the given user. (optional)
 * superProcessInstanceId String Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. (optional)
 * subProcessInstanceId String Restrict query to one process instance that has a sub process instance with the given id. (optional)
 * superCaseInstanceId String Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. (optional)
 * subCaseInstanceId String Restrict query to one process instance that has a sub case instance with the given id. (optional)
 * caseInstanceId String Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. (optional)
 * tenantIdIn String Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings` (optional)
 * withoutTenantId Boolean Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior. (optional)
 * executedActivityIdIn String Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings` (optional)
 * activeActivityIdIn String Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings` (optional)
 * active Boolean Restrict to instances that are active. (optional)
 * suspended Boolean Restrict to instances that are suspended. (optional)
 * completed Boolean Restrict to instances that are completed. (optional)
 * externallyTerminated Boolean Restrict to instances that are externallyTerminated. (optional)
 * internallyTerminated Boolean Restrict to instances that are internallyTerminated. (optional)
 * variables String Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.  Key and value may not contain underscore or comma characters.  (optional)
 * variableNamesIgnoreCase Boolean Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal. (optional)
 * variableValuesIgnoreCase Boolean Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal. (optional)
 * returns CountResultDto
 **/
exports.getHistoricProcessInstancesCount = function(processInstanceId,processInstanceIds,processDefinitionId,processDefinitionKey,processDefinitionKeyIn,processDefinitionName,processDefinitionNameLike,processDefinitionKeyNotIn,processInstanceBusinessKey,processInstanceBusinessKeyLike,rootProcessInstances,finished,unfinished,withIncidents,withRootIncidents,incidentType,incidentStatus,incidentMessage,incidentMessageLike,startedBefore,startedAfter,finishedBefore,finishedAfter,executedActivityAfter,executedActivityBefore,executedJobAfter,executedJobBefore,startedBy,superProcessInstanceId,subProcessInstanceId,superCaseInstanceId,subCaseInstanceId,caseInstanceId,tenantIdIn,withoutTenantId,executedActivityIdIn,activeActivityIdIn,active,suspended,completed,externallyTerminated,internallyTerminated,variables,variableNamesIgnoreCase,variableValuesIgnoreCase) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List (POST)
 * Queries for historic process instances that fulfill the given parameters. This method is slightly more powerful than the [Get Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) because it allows filtering by multiple process variables of types `String`, `Number` or `Boolean`.
 *
 * body HistoricProcessInstanceQueryDto  (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.queryHistoricProcessInstances = function(body,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "durationInMillis" : 6,
  "caseInstanceId" : "caseInstanceId",
  "processDefinitionName" : "processDefinitionName",
  "superCaseInstanceId" : "superCaseInstanceId",
  "deleteReason" : "deleteReason",
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "startUserId" : "startUserId",
  "startActivityId" : "startActivityId",
  "businessKey" : "businessKey",
  "tenantId" : "tenantId",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "state" : "ACTIVE",
  "processDefinitionVersion" : 0,
  "superProcessInstanceId" : "superProcessInstanceId"
}, {
  "processDefinitionId" : "processDefinitionId",
  "durationInMillis" : 6,
  "caseInstanceId" : "caseInstanceId",
  "processDefinitionName" : "processDefinitionName",
  "superCaseInstanceId" : "superCaseInstanceId",
  "deleteReason" : "deleteReason",
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "startUserId" : "startUserId",
  "startActivityId" : "startActivityId",
  "businessKey" : "businessKey",
  "tenantId" : "tenantId",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "state" : "ACTIVE",
  "processDefinitionVersion" : 0,
  "superProcessInstanceId" : "superProcessInstanceId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List Count (POST)
 * Queries for the number of historic process instances that fulfill the given parameters. This method takes the same message body as the [Get Process Instances (POST)](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method and therefore it is slightly more powerful than the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/post-process-instance-query-count/) method.
 *
 * body HistoricProcessInstanceQueryDto  (optional)
 * returns CountResultDto
 **/
exports.queryHistoricProcessInstancesCount = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set Removal Time Async (POST)
 * Sets the removal time to multiple historic process instances asynchronously (batch).  At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided. If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.
 *
 * body SetRemovalTimeToHistoricProcessInstancesDto  (optional)
 * returns BatchDto
 **/
exports.setRemovalTimeAsync = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "monitorJobDefinitionId" : "monitorJobDefinitionId",
  "createUserId" : "createUserId",
  "invocationsPerBatchJob" : 5,
  "totalJobs" : 0,
  "jobsCreated" : 6,
  "tenantId" : "tenantId",
  "batchJobsPerSeed" : 1,
  "seedJobDefinitionId" : "seedJobDefinitionId",
  "id" : "id",
  "type" : "type",
  "batchJobDefinitionId" : "batchJobDefinitionId",
  "suspended" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

