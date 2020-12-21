'use strict';


/**
 * Deletes a set of process instances asynchronously (batch) based on a historic process instance query.
 *
 * body DeleteProcessInstancesDto **Unallowed property**: `processInstanceQuery` (optional)
 * returns BatchDto
 **/
exports.deleteAsyncHistoricQueryBased = function(body) {
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
 * Deletes a running process instance by id.
 *
 * id String The id of the process instance to be deleted.
 * skipCustomListeners Boolean If set to true, the custom listeners will be skipped. (optional)
 * skipIoMappings Boolean If set to true, the input/output mappings will be skipped. (optional)
 * skipSubprocesses Boolean If set to true, subprocesses related to deleted processes will be skipped. (optional)
 * failIfNotExists Boolean If set to false, the request will still be successful if the process id is not found. (optional)
 * no response value expected for this operation
 **/
exports.deleteProcessInstance = function(id,skipCustomListeners,skipIoMappings,skipSubprocesses,failIfNotExists) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a variable of a process instance by id.
 *
 * id String The id of the process instance to delete the variable from.
 * varName String The name of the variable to delete.
 * no response value expected for this operation
 **/
exports.deleteProcessInstanceVariable = function(id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes multiple process instances asynchronously (batch).
 *
 * body DeleteProcessInstancesDto **Unallowed property**: `historicProcessInstanceQuery` (optional)
 * returns BatchDto
 **/
exports.deleteProcessInstancesAsyncOperation = function(body) {
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
 * Retrieves an Activity Instance (Tree) for a given process instance by id.
 *
 * id String The id of the process instance for which the activity instance should be retrieved.
 * returns ActivityInstanceDto
 **/
exports.getActivityInstanceTree = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "childTransitionInstances" : [ {
    "activityId" : "activityId",
    "processInstanceId" : "processInstanceId",
    "processDefinitionId" : "processDefinitionId",
    "executionId" : "executionId",
    "activityName" : "activityName",
    "incidents" : [ {
      "id" : "id",
      "parentActivityInstanceId" : "parentActivityInstanceId"
    }, {
      "id" : "id",
      "parentActivityInstanceId" : "parentActivityInstanceId"
    } ],
    "id" : "id",
    "activityType" : "activityType",
    "incidentIds" : [ "incidentIds", "incidentIds" ],
    "parentActivityInstanceId" : "parentActivityInstanceId"
  }, {
    "activityId" : "activityId",
    "processInstanceId" : "processInstanceId",
    "processDefinitionId" : "processDefinitionId",
    "executionId" : "executionId",
    "activityName" : "activityName",
    "incidents" : [ {
      "id" : "id",
      "parentActivityInstanceId" : "parentActivityInstanceId"
    }, {
      "id" : "id",
      "parentActivityInstanceId" : "parentActivityInstanceId"
    } ],
    "id" : "id",
    "activityType" : "activityType",
    "incidentIds" : [ "incidentIds", "incidentIds" ],
    "parentActivityInstanceId" : "parentActivityInstanceId"
  } ],
  "activityId" : "activityId",
  "processInstanceId" : "processInstanceId",
  "processDefinitionId" : "processDefinitionId",
  "executionIds" : [ "executionIds", "executionIds" ],
  "activityName" : "activityName",
  "incidents" : [ null, null ],
  "id" : "id",
  "activityType" : "activityType",
  "incidentIds" : [ "incidentIds", "incidentIds" ],
  "childActivityInstances" : [ null, null ],
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
 * Get Process Instance
 * Retrieves a process instance by id, according to the `ProcessInstance` interface in the engine.
 *
 * id String The id of the process instance to be retrieved.
 * returns ProcessInstanceDto
 **/
exports.getProcessInstance = function(id) {
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
 * Retrieves a variable of a given process instance by id.
 *
 * id String The id of the process instance to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * deserializeValue Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns VariableValueDto
 **/
exports.getProcessInstanceVariable = function(id,varName,deserializeValue) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "valueInfo" : "",
  "type" : "type",
  "value" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the content of a Process Variable by the Process Instance id and the Process Variable name. Applicable for byte array or file Process Variables.
 *
 * id String The id of the process instance to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * returns byte[]
 **/
exports.getProcessInstanceVariableBinary = function(id,varName) {
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
 * Retrieves all variables of a given process instance by id.
 *
 * id String The id of the process instance to retrieve the variables from.
 * deserializeValue Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getProcessInstanceVariables = function(id,deserializeValue) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "valueInfo" : "",
    "type" : "type",
    "value" : { }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for process instances that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of process instances. The size of the result set can be retrieved by using the Get Instance Count method.
 *
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * processInstanceIds String Filter by a comma-separated list of process instance ids. (optional)
 * businessKey String Filter by process instance business key. (optional)
 * businessKeyLike String Filter by process instance business key that the parameter is a substring of. (optional)
 * caseInstanceId String Filter by case instance id. (optional)
 * processDefinitionId String Filter by the deployment the id belongs to. (optional)
 * processDefinitionKey String Filter by the key of the process definition the instances run on. (optional)
 * processDefinitionKeyIn String Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys. (optional)
 * processDefinitionKeyNotIn String Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys. (optional)
 * deploymentId String Filter by the deployment the id belongs to. (optional)
 * superProcessInstance String Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. (optional)
 * subProcessInstance String Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id. (optional)
 * superCaseInstance String Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. (optional)
 * subCaseInstance String Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id. (optional)
 * active Boolean Only include active process instances. Value may only be true, as false is the default behavior. (optional)
 * suspended Boolean Only include suspended process instances. Value may only be true, as false is the default behavior. (optional)
 * withIncident Boolean Filter by presence of incidents. Selects only process instances that have an incident. (optional)
 * incidentId String Filter by the incident id. (optional)
 * incidentType String Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentMessage String Filter by the incident message. Exact match. (optional)
 * incidentMessageLike String Filter by the incident message that the parameter is a substring of. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include process instances which belong to no tenant. (optional)
 * processDefinitionWithoutTenantId Boolean Only include process instances which process definition has no tenant id. (optional)
 * activityIdIn String Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids. (optional)
 * rootProcessInstances Boolean Restrict the query to all process instances that are top level process instances. (optional)
 * leafProcessInstances Boolean Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances). (optional)
 * variables String Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * variableNamesIgnoreCase Boolean Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal. (optional)
 * variableValuesIgnoreCase Boolean Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal. (optional)
 * returns List
 **/
exports.getProcessInstances = function(sortBy,sortOrder,firstResult,maxResults,processInstanceIds,businessKey,businessKeyLike,caseInstanceId,processDefinitionId,processDefinitionKey,processDefinitionKeyIn,processDefinitionKeyNotIn,deploymentId,superProcessInstance,subProcessInstance,superCaseInstance,subCaseInstance,active,suspended,withIncident,incidentId,incidentType,incidentMessage,incidentMessageLike,tenantIdIn,withoutTenantId,processDefinitionWithoutTenantId,activityIdIn,rootProcessInstances,leafProcessInstances,variables,variableNamesIgnoreCase,variableValuesIgnoreCase) {
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
 * Queries for the number of process instances that fulfill given parameters.
 *
 * processInstanceIds String Filter by a comma-separated list of process instance ids. (optional)
 * businessKey String Filter by process instance business key. (optional)
 * businessKeyLike String Filter by process instance business key that the parameter is a substring of. (optional)
 * caseInstanceId String Filter by case instance id. (optional)
 * processDefinitionId String Filter by the deployment the id belongs to. (optional)
 * processDefinitionKey String Filter by the key of the process definition the instances run on. (optional)
 * processDefinitionKeyIn String Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys. (optional)
 * processDefinitionKeyNotIn String Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys. (optional)
 * deploymentId String Filter by the deployment the id belongs to. (optional)
 * superProcessInstance String Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. (optional)
 * subProcessInstance String Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id. (optional)
 * superCaseInstance String Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. (optional)
 * subCaseInstance String Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id. (optional)
 * active Boolean Only include active process instances. Value may only be true, as false is the default behavior. (optional)
 * suspended Boolean Only include suspended process instances. Value may only be true, as false is the default behavior. (optional)
 * withIncident Boolean Filter by presence of incidents. Selects only process instances that have an incident. (optional)
 * incidentId String Filter by the incident id. (optional)
 * incidentType String Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentMessage String Filter by the incident message. Exact match. (optional)
 * incidentMessageLike String Filter by the incident message that the parameter is a substring of. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include process instances which belong to no tenant. (optional)
 * processDefinitionWithoutTenantId Boolean Only include process instances which process definition has no tenant id. (optional)
 * activityIdIn String Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids. (optional)
 * rootProcessInstances Boolean Restrict the query to all process instances that are top level process instances. (optional)
 * leafProcessInstances Boolean Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances). (optional)
 * variables String Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * variableNamesIgnoreCase Boolean Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal. (optional)
 * variableValuesIgnoreCase Boolean Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal. (optional)
 * returns CountResultDto
 **/
exports.getProcessInstancesCount = function(processInstanceIds,businessKey,businessKeyLike,caseInstanceId,processDefinitionId,processDefinitionKey,processDefinitionKeyIn,processDefinitionKeyNotIn,deploymentId,superProcessInstance,subProcessInstance,superCaseInstance,subCaseInstance,active,suspended,withIncident,incidentId,incidentType,incidentMessage,incidentMessageLike,tenantIdIn,withoutTenantId,processDefinitionWithoutTenantId,activityIdIn,rootProcessInstances,leafProcessInstances,variables,variableNamesIgnoreCase,variableValuesIgnoreCase) {
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
 * Submits a list of modification instructions to change a process instance's execution state. A modification instruction is one of the following:  * Starting execution before an activity * Starting execution after an activity on its single outgoing sequence flow * Starting execution on a specific sequence flow * Canceling an activity instance, transition instance, or all instances (activity or transition) for an activity  Instructions are executed immediately and in the order they are provided in this request's body. Variables can be provided with every starting instruction.  The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-modification/).
 *
 * body ProcessInstanceModificationDto  (optional)
 * id String The id of the process instance to modify.
 * no response value expected for this operation
 **/
exports.modifyProcessInstance = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Submits a list of modification instructions to change a process instance's execution state async. A modification instruction is one of the following:  * Starting execution before an activity * Starting execution after an activity on its single outgoing sequence flow * Starting execution on a specific sequence flow * Cancelling an activity instance, transition instance, or all instances (activity or transition) for an activity  Instructions are executed asynchronous and in the order they are provided in this request's body. Variables can be provided with every starting instruction.  The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-modification/).
 *
 * body ProcessInstanceModificationDto  (optional)
 * id String The id of the process instance to modify.
 * returns BatchDto
 **/
exports.modifyProcessInstanceAsyncOperation = function(body,id) {
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
 * Updates or deletes the variables of a process instance by id. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.
 *
 * body PatchVariablesDto  (optional)
 * id String The id of the process instance to set variables for.
 * no response value expected for this operation
 **/
exports.modifyProcessInstanceVariables = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Queries for process instances that fulfill given parameters through a JSON object. This method is slightly more powerful than the Get Instances method because it allows filtering by multiple process variables of types `string`, `number` or `boolean`.
 *
 * body ProcessInstanceQueryDto  (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.queryProcessInstances = function(body,firstResult,maxResults) {
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
 * Queries for the number of process instances that fulfill the given parameters. This method takes the same message body as the Get Instances (POST) method and therefore it is slightly more powerful than the Get Instance Count method.
 *
 * body ProcessInstanceQueryDto  (optional)
 * returns CountResultDto
 **/
exports.queryProcessInstancesCount = function(body) {
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
 * Sets a variable of a given process instance by id.
 *
 * body VariableValueDto  (optional)
 * id String The id of the process instance to set the variable for.
 * varName String The name of the variable to set.
 * no response value expected for this operation
 **/
exports.setProcessInstanceVariable = function(body,id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets the serialized value for a binary variable or the binary value for a file variable.
 *
 * id String The id of the process instance to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * no response value expected for this operation
 **/
exports.setProcessInstanceVariableBinary = function(id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a batch to set retries of jobs associated with given processes asynchronously.
 *
 * body SetJobRetriesByProcessDto Please note that if both processInstances and processInstanceQuery are provided,
then the resulting execution will be performed on the union of these sets.
**Unallowed property**: `historicProcessInstanceQuery` (optional)
 * returns BatchDto
 **/
exports.setRetriesByProcess = function(body) {
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
 * Create a batch to set retries of jobs asynchronously based on a historic process instance query.
 *
 * body SetJobRetriesByProcessDto Please note that if both processInstances and historicProcessInstanceQuery are provided,
then the resulting execution will be performed on the union of these sets.
**Unallowed property**: `processInstanceQuery` (optional)
 * returns BatchDto
 **/
exports.setRetriesByProcessHistoricQueryBased = function(body) {
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
 * Update or create runtime process variables in the root scope of process instances.
 *
 * body SetVariablesAsyncDto  (optional)
 * returns BatchDto
 **/
exports.setVariablesAsyncOperation = function(body) {
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
 * Activates or suspends process instances by providing certain criteria:  # Activate/Suspend Process Instance By Process Definition Id * `suspend` * `processDefinitionId`  # Activate/Suspend Process Instance By Process Definition Key  * `suspend` * `processDefinitionKey` * `processDefinitionTenantId` * `processDefinitionWithoutTenantId`  # Activate/Suspend Process Instance In Group * `suspend` * `processInstanceIds` * `processInstanceQuery` * `historicProcessInstanceQuery`
 *
 * body ProcessInstanceSuspensionStateDto  (optional)
 * no response value expected for this operation
 **/
exports.updateSuspensionState = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Activates or suspends process instances asynchronously with a list of process instance ids, a process instance query, and/or a historical process instance query.
 *
 * body ProcessInstanceSuspensionStateAsyncDto  (optional)
 * returns BatchDto
 **/
exports.updateSuspensionStateAsyncOperation = function(body) {
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
 * Activates or suspends a given process instance by id.
 *
 * body SuspensionStateDto  (optional)
 * id String The id of the process instance to activate or suspend.
 * no response value expected for this operation
 **/
exports.updateSuspensionStateById = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

