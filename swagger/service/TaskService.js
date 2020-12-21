'use strict';


/**
 * Claims a task for a specific user.  **Note:** The difference with the [Set Assignee](https://docs.camunda.org/manual/7.14/reference/rest/task/post-assignee/) method is that here a check is performed to see if the task already has a user assigned to it.
 *
 * body UserIdDto Provide the id of the user that claims the task. (optional)
 * id String The id of the task to claim.
 * no response value expected for this operation
 **/
exports.claim = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Completes a task and updates process variables.
 *
 * body CompleteTaskDto  (optional)
 * id String The id of the task to complete.
 * returns Map
 **/
exports.complete = function(body,id) {
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
 * Creates a new task.
 *
 * body TaskDto  (optional)
 * no response value expected for this operation
 **/
exports.createTask = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delegates a task to another user.
 *
 * body UserIdDto Provide the id of the user that the task should be delegated to. (optional)
 * id String The id of the task to delegate.
 * no response value expected for this operation
 **/
exports.delegateTask = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Removes a task by id.
 *
 * id String The id of the task to be removed.
 * no response value expected for this operation
 **/
exports.deleteTask = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the deployed form that is referenced from a given task. For further information please refer to the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
 *
 * id String The id of the task to get the deployed form for.
 * returns byte[]
 **/
exports.getDeployedForm = function(id) {
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
 * Retrieves the form key for a task. The form key corresponds to the `FormData#formKey` property in the engine. This key can be used to do task-specific form rendering in client applications. Additionally, the context path of the containing process application is returned.
 *
 * id String The id of the task to retrieve the form for.
 * returns FormDto
 **/
exports.getForm = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contextPath" : "contextPath",
  "key" : "key"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the form variables for a task. The form variables take form data specified on the task into account. If form fields are defined, the variable types and default values of the form fields are taken into account.
 *
 * id String The id of the task to retrieve the variables for.
 * variableNames String A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. (optional)
 * deserializeValues Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getFormVariables = function(id,variableNames,deserializeValues) {
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
 * Retrieves the rendered form for a task. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * id String The id of the task to get the rendered form for.
 * returns byte[]
 **/
exports.getRenderedForm = function(id) {
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
 * Retrieves a task by id.
 *
 * id String The id of the task to be retrieved.
 * returns TaskDto
 **/
exports.getTask = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "caseExecutionId" : "caseExecutionId",
  "caseDefinitionId" : "caseDefinitionId",
  "formKey" : "formKey",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "parentTaskId" : "parentTaskId",
  "caseInstanceId" : "caseInstanceId",
  "description" : "description",
  "priority" : 0,
  "suspended" : true,
  "delegationState" : "PENDING",
  "followUp" : "2000-01-23T04:56:07.000+00:00",
  "executionId" : "executionId",
  "taskDefinitionKey" : "taskDefinitionKey",
  "due" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "assignee" : "assignee"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Queries for tasks that fulfill a given filter. The size of the result set can be retrieved by using the Get Task Count method.  **Security Consideration:** There are several query parameters (such as assigneeExpression) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/) for custom code in the user guide for details.
 *
 * processInstanceId String Restrict to tasks that belong to process instances with the given id. (optional)
 * processInstanceIdIn String Restrict to tasks that belong to process instances with the given ids. (optional)
 * processInstanceBusinessKey String Restrict to tasks that belong to process instances with the given business key. (optional)
 * processInstanceBusinessKeyExpression String Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. (optional)
 * processInstanceBusinessKeyIn String Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list. (optional)
 * processInstanceBusinessKeyLike String Restrict to tasks that have a process instance business key that has the parameter  value as a substring. (optional)
 * processInstanceBusinessKeyLikeExpression String Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * processDefinitionId String Restrict to tasks that belong to a process definition with the given id. (optional)
 * processDefinitionKey String Restrict to tasks that belong to a process definition with the given key. (optional)
 * processDefinitionKeyIn String Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list. (optional)
 * processDefinitionName String Restrict to tasks that belong to a process definition with the given name. (optional)
 * processDefinitionNameLike String Restrict to tasks that have a process definition name that has the parameter value as  a substring. (optional)
 * executionId String Restrict to tasks that belong to an execution with the given id. (optional)
 * caseInstanceId String Restrict to tasks that belong to case instances with the given id. (optional)
 * caseInstanceBusinessKey String Restrict to tasks that belong to case instances with the given business key. (optional)
 * caseInstanceBusinessKeyLike String Restrict to tasks that have a case instance business key that has the parameter value  as a substring. (optional)
 * caseDefinitionId String Restrict to tasks that belong to a case definition with the given id. (optional)
 * caseDefinitionKey String Restrict to tasks that belong to a case definition with the given key. (optional)
 * caseDefinitionName String Restrict to tasks that belong to a case definition with the given name. (optional)
 * caseDefinitionNameLike String Restrict to tasks that have a case definition name that has the parameter value as a  substring. (optional)
 * caseExecutionId String Restrict to tasks that belong to a case execution with the given id. (optional)
 * activityInstanceIdIn String Only include tasks which belong to one of the passed and comma-separated activity  instance ids. (optional)
 * tenantIdIn String Only include tasks which belong to one of the passed and comma-separated  tenant ids. (optional)
 * withoutTenantId Boolean Only include tasks which belong to no tenant. Value may only be `true`,  as `false` is the default behavior. (optional)
 * assignee String Restrict to tasks that the given user is assigned to. (optional)
 * assigneeExpression String Restrict to tasks that the user described by the given expression is assigned to.  See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * assigneeLike String Restrict to tasks that have an assignee that has the parameter  value as a substring. (optional)
 * assigneeLikeExpression String Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * assigneeIn String Only include tasks which are assigned to one of the passed and  comma-separated user ids. (optional)
 * owner String Restrict to tasks that the given user owns. (optional)
 * ownerExpression String Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * candidateGroup String Only include tasks that are offered to the given group. (optional)
 * candidateGroupExpression String Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * candidateUser String Only include tasks that are offered to the given user or to one of his groups. (optional)
 * candidateUserExpression String Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * includeAssignedTasks Boolean Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s). (optional)
 * involvedUser String Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee). (optional)
 * involvedUserExpression String Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. (optional)
 * assigned Boolean If set to `true`, restricts the query to all tasks that are assigned. (optional)
 * unassigned Boolean If set to `true`, restricts the query to all tasks that are unassigned. (optional)
 * taskDefinitionKey String Restrict to tasks that have the given key. (optional)
 * taskDefinitionKeyIn String Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list. (optional)
 * taskDefinitionKeyLike String Restrict to tasks that have a key that has the parameter value as a substring. (optional)
 * name String Restrict to tasks that have the given name. (optional)
 * nameNotEqual String Restrict to tasks that do not have the given name. (optional)
 * nameLike String Restrict to tasks that have a name with the given parameter value as substring. (optional)
 * nameNotLike String Restrict to tasks that do not have a name with the given parameter value as substring. (optional)
 * description String Restrict to tasks that have the given description. (optional)
 * descriptionLike String Restrict to tasks that have a description that has the parameter value as a substring. (optional)
 * priority Integer Restrict to tasks that have the given priority. (optional)
 * maxPriority Integer Restrict to tasks that have a lower or equal priority. (optional)
 * minPriority Integer Restrict to tasks that have a higher or equal priority. (optional)
 * dueDate String Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`. (optional)
 * dueDateExpression String Restrict to tasks that are due on the date described by the given expression. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * dueAfter String Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.435+0200`. (optional)
 * dueAfterExpression String Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * dueBefore String Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.243+0200`. (optional)
 * dueBeforeExpression String Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpDate String Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`. (optional)
 * followUpDateExpression String Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpAfter String Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.542+0200`. (optional)
 * followUpAfterExpression String Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpBefore String Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.234+0200`. (optional)
 * followUpBeforeExpression String Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpBeforeOrNotExistent String Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The typical use case is to query all `active` tasks for a user for a given date. (optional)
 * followUpBeforeOrNotExistentExpression String Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * createdOn String Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`. (optional)
 * createdOnExpression String Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * createdAfter String Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`. (optional)
 * createdAfterExpression String Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * createdBefore String Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`. (optional)
 * createdBeforeExpression String Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * delegationState String Restrict to tasks that are in the given delegation state. Valid values are `PENDING` and `RESOLVED`. (optional)
 * candidateGroups String Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example `developers,support,sales`. (optional)
 * candidateGroupsExpression String Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to `java.util.List` of Strings. (optional)
 * withCandidateGroups Boolean Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior. (optional)
 * withoutCandidateGroups Boolean Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior. (optional)
 * withCandidateUsers Boolean Only include tasks which have a candidate user. Value may only be `true`, as `false` is the default behavior. (optional)
 * withoutCandidateUsers Boolean Only include tasks which have no candidate users. Value may only be `true`, as `false` is the default behavior. (optional)
 * active Boolean Only include active tasks. Value may only be `true`, as `false` is the default behavior. (optional)
 * suspended Boolean Only include suspended tasks. Value may only be `true`, as `false` is the default behavior. (optional)
 * taskVariables String Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * processVariables String Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * caseInstanceVariables String Only include tasks that belong to case instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * variableNamesIgnoreCase Boolean Match all variable names in this query case-insensitively. If set `variableName` and `variablename` are treated as equal. (optional)
 * variableValuesIgnoreCase Boolean Match all variable values in this query case-insensitively. If set `variableValue` and `variablevalue` are treated as equal. (optional)
 * parentTaskId String Restrict query to all tasks that are sub tasks of the given task. Takes a task id. (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getTasks = function(processInstanceId,processInstanceIdIn,processInstanceBusinessKey,processInstanceBusinessKeyExpression,processInstanceBusinessKeyIn,processInstanceBusinessKeyLike,processInstanceBusinessKeyLikeExpression,processDefinitionId,processDefinitionKey,processDefinitionKeyIn,processDefinitionName,processDefinitionNameLike,executionId,caseInstanceId,caseInstanceBusinessKey,caseInstanceBusinessKeyLike,caseDefinitionId,caseDefinitionKey,caseDefinitionName,caseDefinitionNameLike,caseExecutionId,activityInstanceIdIn,tenantIdIn,withoutTenantId,assignee,assigneeExpression,assigneeLike,assigneeLikeExpression,assigneeIn,owner,ownerExpression,candidateGroup,candidateGroupExpression,candidateUser,candidateUserExpression,includeAssignedTasks,involvedUser,involvedUserExpression,assigned,unassigned,taskDefinitionKey,taskDefinitionKeyIn,taskDefinitionKeyLike,name,nameNotEqual,nameLike,nameNotLike,description,descriptionLike,priority,maxPriority,minPriority,dueDate,dueDateExpression,dueAfter,dueAfterExpression,dueBefore,dueBeforeExpression,followUpDate,followUpDateExpression,followUpAfter,followUpAfterExpression,followUpBefore,followUpBeforeExpression,followUpBeforeOrNotExistent,followUpBeforeOrNotExistentExpression,createdOn,createdOnExpression,createdAfter,createdAfterExpression,createdBefore,createdBeforeExpression,delegationState,candidateGroups,candidateGroupsExpression,withCandidateGroups,withoutCandidateGroups,withCandidateUsers,withoutCandidateUsers,active,suspended,taskVariables,processVariables,caseInstanceVariables,variableNamesIgnoreCase,variableValuesIgnoreCase,parentTaskId,sortBy,sortOrder,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "caseExecutionId" : "caseExecutionId",
  "caseDefinitionId" : "caseDefinitionId",
  "formKey" : "formKey",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "parentTaskId" : "parentTaskId",
  "caseInstanceId" : "caseInstanceId",
  "description" : "description",
  "priority" : 0,
  "suspended" : true,
  "delegationState" : "PENDING",
  "followUp" : "2000-01-23T04:56:07.000+00:00",
  "executionId" : "executionId",
  "taskDefinitionKey" : "taskDefinitionKey",
  "due" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "assignee" : "assignee"
}, {
  "owner" : "owner",
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "caseExecutionId" : "caseExecutionId",
  "caseDefinitionId" : "caseDefinitionId",
  "formKey" : "formKey",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "parentTaskId" : "parentTaskId",
  "caseInstanceId" : "caseInstanceId",
  "description" : "description",
  "priority" : 0,
  "suspended" : true,
  "delegationState" : "PENDING",
  "followUp" : "2000-01-23T04:56:07.000+00:00",
  "executionId" : "executionId",
  "taskDefinitionKey" : "taskDefinitionKey",
  "due" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "assignee" : "assignee"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the number of tasks that fulfill a provided filter. Corresponds to the size of the result set when using the [Get Tasks](https://docs.camunda.org/manual/7.14/reference/rest/task/) method.  **Security Consideration:** There are several query parameters (such as assigneeExpression) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/) for custom code in the user guide for details.
 *
 * processInstanceId String Restrict to tasks that belong to process instances with the given id. (optional)
 * processInstanceIdIn String Restrict to tasks that belong to process instances with the given ids. (optional)
 * processInstanceBusinessKey String Restrict to tasks that belong to process instances with the given business key. (optional)
 * processInstanceBusinessKeyExpression String Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. (optional)
 * processInstanceBusinessKeyIn String Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list. (optional)
 * processInstanceBusinessKeyLike String Restrict to tasks that have a process instance business key that has the parameter  value as a substring. (optional)
 * processInstanceBusinessKeyLikeExpression String Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * processDefinitionId String Restrict to tasks that belong to a process definition with the given id. (optional)
 * processDefinitionKey String Restrict to tasks that belong to a process definition with the given key. (optional)
 * processDefinitionKeyIn String Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list. (optional)
 * processDefinitionName String Restrict to tasks that belong to a process definition with the given name. (optional)
 * processDefinitionNameLike String Restrict to tasks that have a process definition name that has the parameter value as  a substring. (optional)
 * executionId String Restrict to tasks that belong to an execution with the given id. (optional)
 * caseInstanceId String Restrict to tasks that belong to case instances with the given id. (optional)
 * caseInstanceBusinessKey String Restrict to tasks that belong to case instances with the given business key. (optional)
 * caseInstanceBusinessKeyLike String Restrict to tasks that have a case instance business key that has the parameter value  as a substring. (optional)
 * caseDefinitionId String Restrict to tasks that belong to a case definition with the given id. (optional)
 * caseDefinitionKey String Restrict to tasks that belong to a case definition with the given key. (optional)
 * caseDefinitionName String Restrict to tasks that belong to a case definition with the given name. (optional)
 * caseDefinitionNameLike String Restrict to tasks that have a case definition name that has the parameter value as a  substring. (optional)
 * caseExecutionId String Restrict to tasks that belong to a case execution with the given id. (optional)
 * activityInstanceIdIn String Only include tasks which belong to one of the passed and comma-separated activity  instance ids. (optional)
 * tenantIdIn String Only include tasks which belong to one of the passed and comma-separated  tenant ids. (optional)
 * withoutTenantId Boolean Only include tasks which belong to no tenant. Value may only be `true`,  as `false` is the default behavior. (optional)
 * assignee String Restrict to tasks that the given user is assigned to. (optional)
 * assigneeExpression String Restrict to tasks that the user described by the given expression is assigned to.  See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * assigneeLike String Restrict to tasks that have an assignee that has the parameter  value as a substring. (optional)
 * assigneeLikeExpression String Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * assigneeIn String Only include tasks which are assigned to one of the passed and  comma-separated user ids. (optional)
 * owner String Restrict to tasks that the given user owns. (optional)
 * ownerExpression String Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * candidateGroup String Only include tasks that are offered to the given group. (optional)
 * candidateGroupExpression String Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * candidateUser String Only include tasks that are offered to the given user or to one of his groups. (optional)
 * candidateUserExpression String Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions. (optional)
 * includeAssignedTasks Boolean Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s). (optional)
 * involvedUser String Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee). (optional)
 * involvedUserExpression String Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. (optional)
 * assigned Boolean If set to `true`, restricts the query to all tasks that are assigned. (optional)
 * unassigned Boolean If set to `true`, restricts the query to all tasks that are unassigned. (optional)
 * taskDefinitionKey String Restrict to tasks that have the given key. (optional)
 * taskDefinitionKeyIn String Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list. (optional)
 * taskDefinitionKeyLike String Restrict to tasks that have a key that has the parameter value as a substring. (optional)
 * name String Restrict to tasks that have the given name. (optional)
 * nameNotEqual String Restrict to tasks that do not have the given name. (optional)
 * nameLike String Restrict to tasks that have a name with the given parameter value as substring. (optional)
 * nameNotLike String Restrict to tasks that do not have a name with the given parameter value as substring. (optional)
 * description String Restrict to tasks that have the given description. (optional)
 * descriptionLike String Restrict to tasks that have a description that has the parameter value as a substring. (optional)
 * priority Integer Restrict to tasks that have the given priority. (optional)
 * maxPriority Integer Restrict to tasks that have a lower or equal priority. (optional)
 * minPriority Integer Restrict to tasks that have a higher or equal priority. (optional)
 * dueDate String Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`. (optional)
 * dueDateExpression String Restrict to tasks that are due on the date described by the given expression. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * dueAfter String Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.435+0200`. (optional)
 * dueAfterExpression String Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * dueBefore String Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.243+0200`. (optional)
 * dueBeforeExpression String Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpDate String Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`. (optional)
 * followUpDateExpression String Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpAfter String Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.542+0200`. (optional)
 * followUpAfterExpression String Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpBefore String Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.234+0200`. (optional)
 * followUpBeforeExpression String Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * followUpBeforeOrNotExistent String Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The typical use case is to query all `active` tasks for a user for a given date. (optional)
 * followUpBeforeOrNotExistentExpression String Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * createdOn String Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`. (optional)
 * createdOnExpression String Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * createdAfter String Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`. (optional)
 * createdAfterExpression String Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * createdBefore String Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`. (optional)
 * createdBeforeExpression String Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object. (optional)
 * delegationState String Restrict to tasks that are in the given delegation state. Valid values are `PENDING` and `RESOLVED`. (optional)
 * candidateGroups String Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example `developers,support,sales`. (optional)
 * candidateGroupsExpression String Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to `java.util.List` of Strings. (optional)
 * withCandidateGroups Boolean Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior. (optional)
 * withoutCandidateGroups Boolean Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior. (optional)
 * withCandidateUsers Boolean Only include tasks which have a candidate user. Value may only be `true`, as `false` is the default behavior. (optional)
 * withoutCandidateUsers Boolean Only include tasks which have no candidate users. Value may only be `true`, as `false` is the default behavior. (optional)
 * active Boolean Only include active tasks. Value may only be `true`, as `false` is the default behavior. (optional)
 * suspended Boolean Only include suspended tasks. Value may only be `true`, as `false` is the default behavior. (optional)
 * taskVariables String Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * processVariables String Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * caseInstanceVariables String Only include tasks that belong to case instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters. (optional)
 * variableNamesIgnoreCase Boolean Match all variable names in this query case-insensitively. If set `variableName` and `variablename` are treated as equal. (optional)
 * variableValuesIgnoreCase Boolean Match all variable values in this query case-insensitively. If set `variableValue` and `variablevalue` are treated as equal. (optional)
 * parentTaskId String Restrict query to all tasks that are sub tasks of the given task. Takes a task id. (optional)
 * returns CountResultDto
 **/
exports.getTasksCount = function(processInstanceId,processInstanceIdIn,processInstanceBusinessKey,processInstanceBusinessKeyExpression,processInstanceBusinessKeyIn,processInstanceBusinessKeyLike,processInstanceBusinessKeyLikeExpression,processDefinitionId,processDefinitionKey,processDefinitionKeyIn,processDefinitionName,processDefinitionNameLike,executionId,caseInstanceId,caseInstanceBusinessKey,caseInstanceBusinessKeyLike,caseDefinitionId,caseDefinitionKey,caseDefinitionName,caseDefinitionNameLike,caseExecutionId,activityInstanceIdIn,tenantIdIn,withoutTenantId,assignee,assigneeExpression,assigneeLike,assigneeLikeExpression,assigneeIn,owner,ownerExpression,candidateGroup,candidateGroupExpression,candidateUser,candidateUserExpression,includeAssignedTasks,involvedUser,involvedUserExpression,assigned,unassigned,taskDefinitionKey,taskDefinitionKeyIn,taskDefinitionKeyLike,name,nameNotEqual,nameLike,nameNotLike,description,descriptionLike,priority,maxPriority,minPriority,dueDate,dueDateExpression,dueAfter,dueAfterExpression,dueBefore,dueBeforeExpression,followUpDate,followUpDateExpression,followUpAfter,followUpAfterExpression,followUpBefore,followUpBeforeExpression,followUpBeforeOrNotExistent,followUpBeforeOrNotExistentExpression,createdOn,createdOnExpression,createdAfter,createdAfterExpression,createdBefore,createdBeforeExpression,delegationState,candidateGroups,candidateGroupsExpression,withCandidateGroups,withoutCandidateGroups,withCandidateUsers,withoutCandidateUsers,active,suspended,taskVariables,processVariables,caseInstanceVariables,variableNamesIgnoreCase,variableValuesIgnoreCase,parentTaskId) {
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
 * Reports a business error in the context of a running task by id. The error code must be specified to identify the BPMN error handler. See the documentation for [Reporting Bpmn Error](https://docs.camunda.org/manual/7.14/reference/bpmn20/tasks/user-task/#reporting-bpmn-error) in User Tasks.
 *
 * body TaskBpmnErrorDto  (optional)
 * id String The id of the task a BPMN error is reported for.
 * no response value expected for this operation
 **/
exports.handleBpmnError = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Reports an escalation in the context of a running task by id. The escalation code must be specified to identify the escalation handler. See the documentation for [Reporting Bpmn Escalation](https://docs.camunda.org/manual/7.14/reference/bpmn20/tasks/user-task/#reporting-bpmn-escalation) in User Tasks.
 *
 * body TaskEscalationDto  (optional)
 * id String The id of the task in which context a BPMN escalation is reported.
 * no response value expected for this operation
 **/
exports.handleEscalation = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Queries for tasks that fulfill a given filter. This method is slightly more powerful than the [Get Tasks](https://docs.camunda.org/manual/7.14/reference/rest/task/get-query/) method because it allows filtering by multiple process or task variables of types `String`, `Number` or `Boolean`. The size of the result set can be retrieved by using the [Get Task Count (POST)](https://docs.camunda.org/manual/7.14/reference/rest/task/post-query-count/) method.  **Security Consideration**: There are several parameters (such as `assigneeExpression`) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations for custom code](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/) in the user guide for details.
 *
 * body TaskQueryDto  (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.queryTasks = function(body,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "caseExecutionId" : "caseExecutionId",
  "caseDefinitionId" : "caseDefinitionId",
  "formKey" : "formKey",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "parentTaskId" : "parentTaskId",
  "caseInstanceId" : "caseInstanceId",
  "description" : "description",
  "priority" : 0,
  "suspended" : true,
  "delegationState" : "PENDING",
  "followUp" : "2000-01-23T04:56:07.000+00:00",
  "executionId" : "executionId",
  "taskDefinitionKey" : "taskDefinitionKey",
  "due" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "assignee" : "assignee"
}, {
  "owner" : "owner",
  "processDefinitionId" : "processDefinitionId",
  "processInstanceId" : "processInstanceId",
  "caseExecutionId" : "caseExecutionId",
  "caseDefinitionId" : "caseDefinitionId",
  "formKey" : "formKey",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "parentTaskId" : "parentTaskId",
  "caseInstanceId" : "caseInstanceId",
  "description" : "description",
  "priority" : 0,
  "suspended" : true,
  "delegationState" : "PENDING",
  "followUp" : "2000-01-23T04:56:07.000+00:00",
  "executionId" : "executionId",
  "taskDefinitionKey" : "taskDefinitionKey",
  "due" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "assignee" : "assignee"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the number of tasks that fulfill the given filter. Corresponds to the size of the result set of the [Get Tasks (POST)](https://docs.camunda.org/manual/7.14/reference/rest/task/post-query/) method and takes the same parameters.  **Security Consideration**: There are several parameters (such as `assigneeExpression`) for specifying an EL expression. These are disabled by default to prevent remote code execution. See the section on [security considerations for custom code](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/) in the user guide for details.
 *
 * body TaskQueryDto  (optional)
 * returns CountResultDto
 **/
exports.queryTasksCount = function(body) {
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
 * Resolves a task and updates execution variables.  Resolving a task marks that the assignee is done with the task delegated to them, and that it can be sent back to the owner. Can only be executed when the task has been delegated. The assignee will be set to the owner, who performed the delegation.
 *
 * body CompleteTaskDto  (optional)
 * id String The id of the task to resolve.
 * no response value expected for this operation
 **/
exports.resolve = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Changes the assignee of a task to a specific user.  **Note:** The difference with the [Claim Task](https://docs.camunda.org/manual/7.14/reference/rest/task/post-claim/) method is that this method does not check if the task already has a user assigned to it.
 *
 * body UserIdDto Provide the id of the user that will be the assignee of the task. (optional)
 * id String The id of the task to set the assignee for.
 * no response value expected for this operation
 **/
exports.setAssignee = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Completes a task and updates process variables using a form submit. There are two difference between this method and the `complete` method:  * If the task is in state `PENDING` - i.e., has been delegated before, it is not completed but resolved. Otherwise it will be completed. * If the task has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See the [Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/_index/#generated-task-forms) section of the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/) for more information.
 *
 * body CompleteTaskDto  (optional)
 * id String The id of the task to submit the form for.
 * returns Map
 **/
exports.submit = function(body,id) {
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
 * Resets a task's assignee. If successful, the task is not assigned to a user.
 *
 * id String The id of the task to unclaim.
 * no response value expected for this operation
 **/
exports.unclaim = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a task.
 *
 * body TaskDto  (optional)
 * id String The id of the task to be updated.
 * no response value expected for this operation
 **/
exports.updateTask = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

