'use strict';


/**
 * Get
 * Retrieves a historic activity instance by id, according to the `HistoricActivityInstance` interface in the engine.
 *
 * id String The id of the historic activity instance to be retrieved.
 * returns HistoricActivityInstanceDto
 **/
exports.getHistoricActivityInstance = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "durationInMillis" : 0,
  "activityName" : "activityName",
  "completeScope" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "canceled" : true,
  "calledCaseInstanceId" : "calledCaseInstanceId",
  "tenantId" : "tenantId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "id" : "id",
  "assignee" : "assignee",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityType" : "activityType",
  "calledProcessInstanceId" : "calledProcessInstanceId",
  "taskId" : "taskId",
  "parentActivityInstanceId" : "parentActivityInstanceId"
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
 * Queries for historic activity instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Historic Activity Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/activity-instance/get-activity-instance-query-count/) method.
 *
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * activityInstanceId String Filter by activity instance id. (optional)
 * processInstanceId String Filter by process instance id. (optional)
 * processDefinitionId String Filter by process definition id. (optional)
 * executionId String Filter by the id of the execution that executed the activity instance. (optional)
 * activityId String Filter by the activity id (according to BPMN 2.0 XML). (optional)
 * activityName String Filter by the activity name (according to BPMN 2.0 XML). (optional)
 * activityType String Filter by activity type. (optional)
 * taskAssignee String Only include activity instances that are user tasks and assigned to a given user. (optional)
 * finished Boolean Only include finished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * unfinished Boolean Only include unfinished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * canceled Boolean Only include canceled activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * completeScope Boolean Only include activity instances which completed a scope. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * startedBefore Date Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * startedAfter Date Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedBefore Date Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedAfter Date Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * tenantIdIn String Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include historic activity instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior. (optional)
 * returns List
 **/
exports.getHistoricActivityInstances = function(sortBy,sortOrder,firstResult,maxResults,activityInstanceId,processInstanceId,processDefinitionId,executionId,activityId,activityName,activityType,taskAssignee,finished,unfinished,canceled,completeScope,startedBefore,startedAfter,finishedBefore,finishedAfter,tenantIdIn,withoutTenantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "durationInMillis" : 0,
  "activityName" : "activityName",
  "completeScope" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "canceled" : true,
  "calledCaseInstanceId" : "calledCaseInstanceId",
  "tenantId" : "tenantId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "id" : "id",
  "assignee" : "assignee",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityType" : "activityType",
  "calledProcessInstanceId" : "calledProcessInstanceId",
  "taskId" : "taskId",
  "parentActivityInstanceId" : "parentActivityInstanceId"
}, {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "durationInMillis" : 0,
  "activityName" : "activityName",
  "completeScope" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "canceled" : true,
  "calledCaseInstanceId" : "calledCaseInstanceId",
  "tenantId" : "tenantId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "id" : "id",
  "assignee" : "assignee",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityType" : "activityType",
  "calledProcessInstanceId" : "calledProcessInstanceId",
  "taskId" : "taskId",
  "parentActivityInstanceId" : "parentActivityInstanceId"
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
 * Queries for the number of historic activity instances that fulfill the given parameters. Takes the same parameters as the [Get Historic Activity Instance](https://docs.camunda.org/manual/7.14/reference/rest/history/activity-instance/get-activity-instance-query/)  method.
 *
 * activityInstanceId String Filter by activity instance id. (optional)
 * processInstanceId String Filter by process instance id. (optional)
 * processDefinitionId String Filter by process definition id. (optional)
 * executionId String Filter by the id of the execution that executed the activity instance. (optional)
 * activityId String Filter by the activity id (according to BPMN 2.0 XML). (optional)
 * activityName String Filter by the activity name (according to BPMN 2.0 XML). (optional)
 * activityType String Filter by activity type. (optional)
 * taskAssignee String Only include activity instances that are user tasks and assigned to a given user. (optional)
 * finished Boolean Only include finished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * unfinished Boolean Only include unfinished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * canceled Boolean Only include canceled activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * completeScope Boolean Only include activity instances which completed a scope. Value may only be `true`, as `false` behaves the same as when the property is not set. (optional)
 * startedBefore Date Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * startedAfter Date Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedBefore Date Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * finishedAfter Date Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * tenantIdIn String Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include historic activity instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior. (optional)
 * returns CountResultDto
 **/
exports.getHistoricActivityInstancesCount = function(activityInstanceId,processInstanceId,processDefinitionId,executionId,activityId,activityName,activityType,taskAssignee,finished,unfinished,canceled,completeScope,startedBefore,startedAfter,finishedBefore,finishedAfter,tenantIdIn,withoutTenantId) {
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
 * Queries for historic activity instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Historic Activity Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/activity-instance/get-activity-instance-query-count/) method.
 *
 * body HistoricActivityInstanceQueryDto  (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.queryHistoricActivityInstances = function(body,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "durationInMillis" : 0,
  "activityName" : "activityName",
  "completeScope" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "canceled" : true,
  "calledCaseInstanceId" : "calledCaseInstanceId",
  "tenantId" : "tenantId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "id" : "id",
  "assignee" : "assignee",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityType" : "activityType",
  "calledProcessInstanceId" : "calledProcessInstanceId",
  "taskId" : "taskId",
  "parentActivityInstanceId" : "parentActivityInstanceId"
}, {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "durationInMillis" : 0,
  "activityName" : "activityName",
  "completeScope" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "removalTime" : "2000-01-23T04:56:07.000+00:00",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "canceled" : true,
  "calledCaseInstanceId" : "calledCaseInstanceId",
  "tenantId" : "tenantId",
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "rootProcessInstanceId" : "rootProcessInstanceId",
  "id" : "id",
  "assignee" : "assignee",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityType" : "activityType",
  "calledProcessInstanceId" : "calledProcessInstanceId",
  "taskId" : "taskId",
  "parentActivityInstanceId" : "parentActivityInstanceId"
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
 * Queries for the number of historic activity instances that fulfill the given parameters.
 *
 * body HistoricActivityInstanceQueryDto  (optional)
 * returns CountResultDto
 **/
exports.queryHistoricActivityInstancesCount = function(body) {
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

