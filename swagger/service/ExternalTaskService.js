'use strict';


/**
 * Completes an external task by id and updates process variables.
 *
 * body CompleteExternalTaskDto  (optional)
 * id String The id of the task to complete.
 * no response value expected for this operation
 **/
exports.completeExternalTaskResource = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Extends the timeout of the lock by a given amount of time.
 *
 * body ExtendLockOnExternalTaskDto  (optional)
 * id String The id of the external task.
 * no response value expected for this operation
 **/
exports.extendLock = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetches and locks a specific number of external tasks for execution by a worker. Query can be restricted to specific task topics and for each task topic an individual lock time can be provided.
 *
 * body FetchExternalTasksDto  (optional)
 * returns List
 **/
exports.fetchAndLock = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "variables" : {
    "key" : {
      "valueInfo" : "",
      "type" : "type",
      "value" : { }
    }
  },
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id",
  "errorDetails" : "errorDetails"
}, {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "variables" : {
    "key" : {
      "valueInfo" : "",
      "type" : "type",
      "value" : { }
    }
  },
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id",
  "errorDetails" : "errorDetails"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves an external task by id, corresponding to the `ExternalTask` interface in the engine.
 *
 * id String The id of the external task to be retrieved.
 * returns ExternalTaskDto
 **/
exports.getExternalTask = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the error details in the context of a running external task by id.
 *
 * id String The id of the external task for which the error details should be retrieved.
 * returns String
 **/
exports.getExternalTaskErrorDetails = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for the external tasks that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of executions. The size of the result set can be retrieved by using the [Get External Task Count](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query-count/) method.
 *
 * externalTaskId String Filter by an external task's id. (optional)
 * externalTaskIdIn String Filter by the comma-separated list of external task ids. (optional)
 * topicName String Filter by an external task topic. (optional)
 * workerId String Filter by the id of the worker that the task was most recently locked by. (optional)
 * locked Boolean Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task. (optional)
 * notLocked Boolean Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task. (optional)
 * withRetriesLeft Boolean Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task. (optional)
 * noRetriesLeft Boolean Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task. (optional)
 * lockExpirationAfter Date Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * lockExpirationBefore Date Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * activityId String Filter by the id of the activity that an external task is created for. (optional)
 * activityIdIn String Filter by the comma-separated list of ids of the activities that an external task is created for. (optional)
 * executionId String Filter by the id of the execution that an external task belongs to. (optional)
 * processInstanceId String Filter by the id of the process instance that an external task belongs to. (optional)
 * processInstanceIdIn String Filter by a comma-separated list of process instance ids that an external task may belong to. (optional)
 * processDefinitionId String Filter by the id of the process definition that an external task belongs to. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids. (optional)
 * active Boolean Only include active tasks. Value may only be `true`, as `false` matches any external task. (optional)
 * suspended Boolean Only include suspended tasks. Value may only be `true`, as `false` matches any external task. (optional)
 * priorityHigherThanOrEquals Long Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value. (optional)
 * priorityLowerThanOrEquals Long Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value. (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getExternalTasks = function(externalTaskId,externalTaskIdIn,topicName,workerId,locked,notLocked,withRetriesLeft,noRetriesLeft,lockExpirationAfter,lockExpirationBefore,activityId,activityIdIn,executionId,processInstanceId,processInstanceIdIn,processDefinitionId,tenantIdIn,active,suspended,priorityHigherThanOrEquals,priorityLowerThanOrEquals,sortBy,sortOrder,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id"
}, {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for the number of external tasks that fulfill given parameters. Takes the same parameters as the [Get External Tasks](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query/) method.
 *
 * externalTaskId String Filter by an external task's id. (optional)
 * externalTaskIdIn String Filter by the comma-separated list of external task ids. (optional)
 * topicName String Filter by an external task topic. (optional)
 * workerId String Filter by the id of the worker that the task was most recently locked by. (optional)
 * locked Boolean Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task. (optional)
 * notLocked Boolean Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task. (optional)
 * withRetriesLeft Boolean Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task. (optional)
 * noRetriesLeft Boolean Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task. (optional)
 * lockExpirationAfter Date Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * lockExpirationBefore Date Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * activityId String Filter by the id of the activity that an external task is created for. (optional)
 * activityIdIn String Filter by the comma-separated list of ids of the activities that an external task is created for. (optional)
 * executionId String Filter by the id of the execution that an external task belongs to. (optional)
 * processInstanceId String Filter by the id of the process instance that an external task belongs to. (optional)
 * processInstanceIdIn String Filter by a comma-separated list of process instance ids that an external task may belong to. (optional)
 * processDefinitionId String Filter by the id of the process definition that an external task belongs to. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids. (optional)
 * active Boolean Only include active tasks. Value may only be `true`, as `false` matches any external task. (optional)
 * suspended Boolean Only include suspended tasks. Value may only be `true`, as `false` matches any external task. (optional)
 * priorityHigherThanOrEquals Long Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value. (optional)
 * priorityLowerThanOrEquals Long Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value. (optional)
 * returns CountResultDto
 **/
exports.getExternalTasksCount = function(externalTaskId,externalTaskIdIn,topicName,workerId,locked,notLocked,withRetriesLeft,noRetriesLeft,lockExpirationAfter,lockExpirationBefore,activityId,activityIdIn,executionId,processInstanceId,processInstanceIdIn,processDefinitionId,tenantIdIn,active,suspended,priorityHigherThanOrEquals,priorityLowerThanOrEquals) {
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
 * Queries for distinct topic names of external tasks that fulfill given parameters. Query can be restricted to only tasks with retries left, tasks that are locked, or tasks that are unlocked. The parameters withLockedTasks and withUnlockedTasks are exclusive. Setting them both to true will return an empty list. Providing no parameters will return a list of all distinct topic names with external tasks.
 *
 * withLockedTasks Boolean Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task. (optional)
 * withUnlockedTasks Boolean Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task. (optional)
 * withRetriesLeft Boolean Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task. (optional)
 * returns List
 **/
exports.getTopicNames = function(withLockedTasks,withUnlockedTasks,withRetriesLeft) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reports a business error in the context of a running external task by id. The error code must be specified to identify the BPMN error handler.
 *
 * body ExternalTaskBpmnError  (optional)
 * id String The id of the external task in which context a BPMN error is reported.
 * no response value expected for this operation
 **/
exports.handleExternalTaskBpmnError = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Reports a failure to execute an external task by id. A number of retries and a timeout until the task can be retried can be specified. If retries are set to 0, an incident for this task is created.
 *
 * body ExternalTaskFailureDto  (optional)
 * id String The id of the external task to report a failure for.
 * no response value expected for this operation
 **/
exports.handleFailure = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Queries for external tasks that fulfill given parameters in the form of a JSON object.  This method is slightly more powerful than the [Get External Tasks](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query/) method because it allows to specify a hierarchical result sorting.
 *
 * body ExternalTaskQueryDto  (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.queryExternalTasks = function(body,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id"
}, {
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "workerId" : "workerId",
  "lockExpirationTime" : "2000-01-23T04:56:07.000+00:00",
  "errorMessage" : "errorMessage",
  "activityInstanceId" : "activityInstanceId",
  "priority" : 6,
  "suspended" : true,
  "processDefinitionKey" : "processDefinitionKey",
  "activityId" : "activityId",
  "executionId" : "executionId",
  "processDefinitionVersionTag" : "processDefinitionVersionTag",
  "retries" : 0,
  "tenantId" : "tenantId",
  "businessKey" : "businessKey",
  "topicName" : "topicName",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for the number of external tasks that fulfill given parameters. This method takes the same message body as the [Get External Tasks (POST)](https://docs.camunda.org/manual/7.14/reference/rest/external-task/post-query/) method.
 *
 * body ExternalTaskQueryDto  (optional)
 * returns CountResultDto
 **/
exports.queryExternalTasksCount = function(body) {
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
 * Sets the priority of an existing external task by id. The default value of a priority is 0.
 *
 * body PriorityDto  (optional)
 * id String The id of the external task to set the priority for.
 * no response value expected for this operation
 **/
exports.setExternalTaskResourcePriority = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets the number of retries left to execute an external task by id. If retries are set to 0, an  incident is created.
 *
 * body RetriesDto  (optional)
 * id String The id of the external task to set the number of retries for.
 * no response value expected for this operation
 **/
exports.setExternalTaskResourceRetries = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets the number of retries left to execute external tasks by id synchronously. If retries are set to 0,  an incident is created.
 *
 * body SetRetriesForExternalTasksDto  (optional)
 * no response value expected for this operation
 **/
exports.setExternalTaskRetries = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets the number of retries left to execute external tasks by id asynchronously. If retries are set to 0, an incident is created.
 *
 * body SetRetriesForExternalTasksDto  (optional)
 * returns BatchDto
 **/
exports.setExternalTaskRetriesAsyncOperation = function(body) {
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
 * Unlocks an external task by id. Clears the task's lock expiration time and worker id.
 *
 * id String The id of the external task to unlock.
 * no response value expected for this operation
 **/
exports.unlock = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

