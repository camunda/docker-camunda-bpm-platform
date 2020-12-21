'use strict';


/**
 * Delete
 * Deletes a running process instance by id.
 *
 * id String The id of the process definition to be deleted.
 * cascade Boolean `true`, if all process instances, historic process instances and jobs for this process definition should be deleted. (optional)
 * skipCustomListeners Boolean `true`, if only the built-in ExecutionListeners should be notified with the end event. (optional)
 * skipIoMappings Boolean A boolean value to control whether input/output mappings should be executed during deletion. `true`, if input/output mappings should not be invoked. (optional)
 * no response value expected for this operation
 **/
exports.deleteProcessDefinition = function(id,cascade,skipCustomListeners,skipIoMappings) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete By Key
 * Deletes process definitions by a given key which belong to no tenant id.
 *
 * key String The key of the process definitions to be deleted.
 * cascade Boolean `true`, if all process instances, historic process instances and jobs for this process definition should be deleted. (optional)
 * skipCustomListeners Boolean `true`, if only the built-in ExecutionListeners should be notified with the end event. (optional)
 * skipIoMappings Boolean A boolean value to control whether input/output mappings should be executed during deletion. `true`, if input/output mappings should not be invoked. (optional)
 * no response value expected for this operation
 **/
exports.deleteProcessDefinitionsByKey = function(key,cascade,skipCustomListeners,skipIoMappings) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete By Key
 * Deletes process definitions by a given key and which belong to a tenant id.
 *
 * key String The key of the process definitions to be deleted.
 * tenantId String The id of the tenant the process definitions belong to.
 * cascade Boolean `true`, if all process instances, historic process instances and jobs for this process definition should be deleted. (optional)
 * skipCustomListeners Boolean `true`, if only the built-in ExecutionListeners should be notified with the end event. (optional)
 * skipIoMappings Boolean A boolean value to control whether input/output mappings should be executed during deletion. `true`, if input/output mappings should not be invoked. (optional)
 * no response value expected for this operation
 **/
exports.deleteProcessDefinitionsByKeyAndTenantId = function(key,tenantId,cascade,skipCustomListeners,skipIoMappings) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Activity Instance Statistics
 * Retrieves runtime statistics of a given process definition, grouped by activities. These statistics include the number of running activity instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.
 *
 * id String The id of the process definition.
 * failedJobs Boolean Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`. (optional)
 * incidents Boolean Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`. (optional)
 * incidentsForType String If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * returns List
 **/
exports.getActivityStatistics = function(id,failedJobs,incidents,incidentsForType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
  "id" : "id"
}, {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
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
 * Get Activity Instance Statistics
 * Retrieves runtime statistics of the latest version of the given process definition which belongs to no tenant, grouped by activities. These statistics include the number of running activity instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * failedJobs Boolean Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`. (optional)
 * incidents Boolean Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`. (optional)
 * incidentsForType String If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * returns List
 **/
exports.getActivityStatisticsByProcessDefinitionKey = function(key,failedJobs,incidents,incidentsForType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
  "id" : "id"
}, {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
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
 * Get Activity Instance Statistics
 * Retrieves runtime statistics of the latest version of the given process definition for a tenant, grouped by activities. These statistics include the number of running activity instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * failedJobs Boolean Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`. (optional)
 * incidents Boolean Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`. (optional)
 * incidentsForType String If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * returns List
 **/
exports.getActivityStatisticsByProcessDefinitionKeyAndTenantId = function(key,tenantId,failedJobs,incidents,incidentsForType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
  "id" : "id"
}, {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
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
 * Get Deployed Start Form
 * Retrieves the deployed form that can be referenced from a start event. For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
 *
 * id String The id of the process definition to get the deployed start form for.
 * returns byte[]
 **/
exports.getDeployedStartForm = function(id) {
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
 * Get Deployed Start Form
 * Retrieves the deployed form that can be referenced from a start event. For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * returns byte[]
 **/
exports.getDeployedStartFormByKey = function(key) {
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
 * Get Deployed Start Form
 * Retrieves the deployed form that can be referenced from a start event. For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * tenantId String The id of the tenant the process definitions belong to.
 * returns byte[]
 **/
exports.getDeployedStartFormByKeyAndTenantId = function(key,tenantId) {
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
 * Get
 * Retrieves the latest version of the process definition for tenant according to the `ProcessDefinition` interface in the engine.
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns ProcessDefinitionDto
 **/
exports.getLatestProcessDefinitionByTenantId = function(key,tenantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resource" : "resource",
  "startableInTasklist" : true,
  "description" : "description",
  "historyTimeToLive" : 0,
  "versionTag" : "versionTag",
  "version" : 0,
  "suspended" : true,
  "diagram" : "diagram",
  "deploymentId" : "deploymentId",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "category" : "category",
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
 * Get
 * Retrieves a process definition according to the `ProcessDefinition` interface in the engine.
 *
 * id String The id of the process definition to be retrieved.
 * returns ProcessDefinitionDto
 **/
exports.getProcessDefinition = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resource" : "resource",
  "startableInTasklist" : true,
  "description" : "description",
  "historyTimeToLive" : 0,
  "versionTag" : "versionTag",
  "version" : 0,
  "suspended" : true,
  "diagram" : "diagram",
  "deploymentId" : "deploymentId",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "category" : "category",
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
 * Get XML
 * Retrieves the BPMN 2.0 XML of a process definition.
 *
 * id String The id of the process definition.
 * returns ProcessDefinitionDiagramDto
 **/
exports.getProcessDefinitionBpmn20Xml = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bpmn20Xml" : "bpmn20Xml",
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
 * Get XML
 * Retrieves latest version the BPMN 2.0 XML of a process definition.
 *
 * key String The key of the process definition (the latest version thereof) whose XML should be retrieved.
 * returns ProcessDefinitionDiagramDto
 **/
exports.getProcessDefinitionBpmn20XmlByKey = function(key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bpmn20Xml" : "bpmn20Xml",
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
 * Get XML
 * Retrieves latest version the BPMN 2.0 XML of a process definition. Returns the XML for the latest version of the process definition for tenant.
 *
 * key String The key of the process definition (the latest version thereof) whose XML should be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns ProcessDefinitionDiagramDto
 **/
exports.getProcessDefinitionBpmn20XmlByKeyAndTenantId = function(key,tenantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bpmn20Xml" : "bpmn20Xml",
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
 * Get
 * Retrieves the latest version of the process definition which belongs to no tenant according to the `ProcessDefinition` interface in the engine.
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * returns ProcessDefinitionDto
 **/
exports.getProcessDefinitionByKey = function(key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resource" : "resource",
  "startableInTasklist" : true,
  "description" : "description",
  "historyTimeToLive" : 0,
  "versionTag" : "versionTag",
  "version" : 0,
  "suspended" : true,
  "diagram" : "diagram",
  "deploymentId" : "deploymentId",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "category" : "category",
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
 * Get Diagram
 * Retrieves the diagram of a process definition.  If the process definition's deployment contains an image resource with the same file name as the process definition, the deployed image will be returned by the Get Diagram endpoint. Example: `someProcess.bpmn` and `someProcess.png`. Supported file extentions for the image are: `svg`, `png`, `jpg`, and `gif`.
 *
 * id String The id of the process definition.
 * returns byte[]
 **/
exports.getProcessDefinitionDiagram = function(id) {
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
 * Get Diagram
 * Retrieves the diagram for the latest version of the process definition which belongs to no tenant.  If the process definition's deployment contains an image resource with the same file name as the process definition, the deployed image will be returned by the Get Diagram endpoint. Example: `someProcess.bpmn` and `someProcess.png`. Supported file extentions for the image are: `svg`, `png`, `jpg`, and `gif`.
 *
 * key String The key of the process definition.
 * returns byte[]
 **/
exports.getProcessDefinitionDiagramByKey = function(key) {
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
 * Get Diagram
 * Retrieves the diagram for the latest version of the process definition for tenant.  If the process definition's deployment contains an image resource with the same file name as the process definition, the deployed image will be returned by the Get Diagram endpoint. Example: `someProcess.bpmn` and `someProcess.png`. Supported file extentions for the image are: `svg`, `png`, `jpg`, and `gif`.
 *
 * key String The key of the process definition.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns byte[]
 **/
exports.getProcessDefinitionDiagramByKeyAndTenantId = function(key,tenantId) {
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
 * Get Process Instance Statistics
 * Retrieves runtime statistics of the process engine, grouped by process definitions. These statistics include the number of running process instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.
 *
 * failedJobs Boolean Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`. (optional)
 * incidents Boolean Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`. (optional)
 * incidentsForType String If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * rootIncidents Boolean Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of root incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType` or `incidents`. (optional)
 * returns List
 **/
exports.getProcessDefinitionStatistics = function(failedJobs,incidents,incidentsForType,rootIncidents) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
  "definition" : {
    "resource" : "resource",
    "startableInTasklist" : true,
    "description" : "description",
    "historyTimeToLive" : 0,
    "versionTag" : "versionTag",
    "version" : 0,
    "suspended" : true,
    "diagram" : "diagram",
    "deploymentId" : "deploymentId",
    "name" : "name",
    "tenantId" : "tenantId",
    "id" : "id",
    "category" : "category",
    "key" : "key"
  },
  "id" : "id"
}, {
  "instances" : 0,
  "failedJobs" : 6,
  "incidents" : [ {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  }, {
    "incidentCount" : 1,
    "incidentType" : "incidentType"
  } ],
  "definition" : {
    "resource" : "resource",
    "startableInTasklist" : true,
    "description" : "description",
    "historyTimeToLive" : 0,
    "versionTag" : "versionTag",
    "version" : 0,
    "suspended" : true,
    "diagram" : "diagram",
    "deploymentId" : "deploymentId",
    "name" : "name",
    "tenantId" : "tenantId",
    "id" : "id",
    "category" : "category",
    "key" : "key"
  },
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
 * Get List
 * Queries for process definitions that fulfill given parameters. Parameters may be the properties of  process definitions, such as the name, key or version. The size of the result set can be retrieved by using the [Get Definition Count](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/get-query-count/) method.
 *
 * processDefinitionId String Filter by process definition id. (optional)
 * processDefinitionIdIn String Filter by a comma-separated list of process definition ids. (optional)
 * name String Filter by process definition name. (optional)
 * nameLike String Filter by process definition names that the parameter is a substring of. (optional)
 * deploymentId String Filter by the deployment the id belongs to. (optional)
 * deployedAfter Date Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed after (exclusive) a specific time. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`. (optional)
 * deployedAt Date Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed at a specific time (exact match). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`. (optional)
 * key String Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match. (optional)
 * keysIn String Filter by a comma-separated list of process definition keys. (optional)
 * keyLike String Filter by process definition keys that the parameter is a substring of. (optional)
 * category String Filter by process definition category. Exact match. (optional)
 * categoryLike String Filter by process definition categories that the parameter is a substring of. (optional)
 * version Integer Filter by process definition version. (optional)
 * latestVersion Boolean Only include those process definitions that are latest versions. Value may only be `true`, as `false` is the default behavior. (optional)
 * resourceName String Filter by the name of the process definition resource. Exact match. (optional)
 * resourceNameLike String Filter by names of those process definition resources that the parameter is a substring of. (optional)
 * startableBy String Filter by a user name who is allowed to start the process. (optional)
 * active Boolean Only include active process definitions. Value may only be `true`, as `false` is the default behavior. (optional)
 * suspended Boolean Only include suspended process definitions. Value may only be `true`, as `false` is the default behavior. (optional)
 * incidentId String Filter by the incident id. (optional)
 * incidentType String Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentMessage String Filter by the incident message. Exact match. (optional)
 * incidentMessageLike String Filter by the incident message that the parameter is a substring of. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. A process definition must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include process definitions which belong to no tenant. Value may only be true, as false is the default behavior. (optional)
 * includeProcessDefinitionsWithoutTenantId Boolean Include process definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior. (optional)
 * versionTag String Filter by the version tag. (optional)
 * versionTagLike String Filter by the version tag that the parameter is a substring of. (optional)
 * withoutVersionTag Boolean Only include process definitions without a `versionTag`. (optional)
 * startableInTasklist Boolean Filter by process definitions which are startable in Tasklist.. (optional)
 * notStartableInTasklist Boolean Filter by process definitions which are not startable in Tasklist. (optional)
 * startablePermissionCheck Boolean Filter by process definitions which the user is allowed to start in Tasklist. If the user doesn't have these permissions the result will be empty list. The permissions are: * `CREATE` permission for all Process instances * `CREATE_INSTANCE` and `READ` permission on Process definition level (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getProcessDefinitions = function(processDefinitionId,processDefinitionIdIn,name,nameLike,deploymentId,deployedAfter,deployedAt,key,keysIn,keyLike,category,categoryLike,version,latestVersion,resourceName,resourceNameLike,startableBy,active,suspended,incidentId,incidentType,incidentMessage,incidentMessageLike,tenantIdIn,withoutTenantId,includeProcessDefinitionsWithoutTenantId,versionTag,versionTagLike,withoutVersionTag,startableInTasklist,notStartableInTasklist,startablePermissionCheck,sortBy,sortOrder,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "resource" : "resource",
  "startableInTasklist" : true,
  "description" : "description",
  "historyTimeToLive" : 0,
  "versionTag" : "versionTag",
  "version" : 0,
  "suspended" : true,
  "diagram" : "diagram",
  "deploymentId" : "deploymentId",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "category" : "category",
  "key" : "key"
}, {
  "resource" : "resource",
  "startableInTasklist" : true,
  "description" : "description",
  "historyTimeToLive" : 0,
  "versionTag" : "versionTag",
  "version" : 0,
  "suspended" : true,
  "diagram" : "diagram",
  "deploymentId" : "deploymentId",
  "name" : "name",
  "tenantId" : "tenantId",
  "id" : "id",
  "category" : "category",
  "key" : "key"
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
 * Requests the number of process definitions that fulfill the query criteria. Takes the same filtering parameters as the [Get Definitions](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/get-query/) method.
 *
 * processDefinitionId String Filter by process definition id. (optional)
 * processDefinitionIdIn String Filter by a comma-separated list of process definition ids. (optional)
 * name String Filter by process definition name. (optional)
 * nameLike String Filter by process definition names that the parameter is a substring of. (optional)
 * deploymentId String Filter by the deployment the id belongs to. (optional)
 * deployedAfter Date Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed after (exclusive) a specific time. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`. (optional)
 * deployedAt Date Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed at a specific time (exact match). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`. (optional)
 * key String Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match. (optional)
 * keysIn String Filter by a comma-separated list of process definition keys. (optional)
 * keyLike String Filter by process definition keys that the parameter is a substring of. (optional)
 * category String Filter by process definition category. Exact match. (optional)
 * categoryLike String Filter by process definition categories that the parameter is a substring of. (optional)
 * version Integer Filter by process definition version. (optional)
 * latestVersion Boolean Only include those process definitions that are latest versions. Value may only be `true`, as `false` is the default behavior. (optional)
 * resourceName String Filter by the name of the process definition resource. Exact match. (optional)
 * resourceNameLike String Filter by names of those process definition resources that the parameter is a substring of. (optional)
 * startableBy String Filter by a user name who is allowed to start the process. (optional)
 * active Boolean Only include active process definitions. Value may only be `true`, as `false` is the default behavior. (optional)
 * suspended Boolean Only include suspended process definitions. Value may only be `true`, as `false` is the default behavior. (optional)
 * incidentId String Filter by the incident id. (optional)
 * incidentType String Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. (optional)
 * incidentMessage String Filter by the incident message. Exact match. (optional)
 * incidentMessageLike String Filter by the incident message that the parameter is a substring of. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. A process definition must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include process definitions which belong to no tenant. Value may only be true, as false is the default behavior. (optional)
 * includeProcessDefinitionsWithoutTenantId Boolean Include process definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior. (optional)
 * versionTag String Filter by the version tag. (optional)
 * versionTagLike String Filter by the version tag that the parameter is a substring of. (optional)
 * withoutVersionTag Boolean Only include process definitions without a `versionTag`. (optional)
 * startableInTasklist Boolean Filter by process definitions which are startable in Tasklist.. (optional)
 * notStartableInTasklist Boolean Filter by process definitions which are not startable in Tasklist. (optional)
 * startablePermissionCheck Boolean Filter by process definitions which the user is allowed to start in Tasklist. If the user doesn't have these permissions the result will be empty list. The permissions are: * `CREATE` permission for all Process instances * `CREATE_INSTANCE` and `READ` permission on Process definition level (optional)
 * returns CountResultDto
 **/
exports.getProcessDefinitionsCount = function(processDefinitionId,processDefinitionIdIn,name,nameLike,deploymentId,deployedAfter,deployedAt,key,keysIn,keyLike,category,categoryLike,version,latestVersion,resourceName,resourceNameLike,startableBy,active,suspended,incidentId,incidentType,incidentMessage,incidentMessageLike,tenantIdIn,withoutTenantId,includeProcessDefinitionsWithoutTenantId,versionTag,versionTagLike,withoutVersionTag,startableInTasklist,notStartableInTasklist,startablePermissionCheck) {
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
 * Get Rendered Start Form
 * Retrieves the rendered form for a process definition. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * id String The id of the process definition to get the rendered start form for.
 * returns byte[]
 **/
exports.getRenderedStartForm = function(id) {
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
 * Get Rendered Start Form
 * Retrieves  the rendered form for the latest version of the process definition which belongs to no tenant. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * returns byte[]
 **/
exports.getRenderedStartFormByKey = function(key) {
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
 * Get Rendered Start Form
 * Retrieves  the rendered form for the latest version of the process definition for a tenant. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns byte[]
 **/
exports.getRenderedStartFormByKeyAndTenantId = function(key,tenantId) {
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
 * Get Start Form Key
 * Retrieves the key of the start form for a process definition. The form key corresponds to the `FormData#formKey` property in the engine.
 *
 * id String The id of the process definition to get the start form key for.
 * returns FormDto
 **/
exports.getStartForm = function(id) {
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
 * Get Start Form Key
 * Retrieves the key of the start form for the latest version of the process definition which belongs to no tenant. The form key corresponds to the `FormData#formKey` property in the engine.
 *
 * key String The key of the process definition (the latest version thereof) for which the form key is to be retrieved.
 * returns FormDto
 **/
exports.getStartFormByKey = function(key) {
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
 * Get Start Form Key
 * Retrieves the key of the start form for the latest version of the process definition for a tenant. The form key corresponds to the `FormData#formKey` property in the engine.
 *
 * key String The key of the process definition (the latest version thereof) for which the form key is to be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns FormDto
 **/
exports.getStartFormByKeyAndTenantId = function(key,tenantId) {
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
 * Get Start Form Variables
 * Retrieves the start form variables for a process definition (only if they are defined via the  [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach). The start form variables take form data specified on the start event into account. If form fields are defined, the variable types and default values of the form fields are taken into account.
 *
 * id String The id of the process definition to retrieve the variables for.
 * variableNames String A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. (optional)
 * deserializeValues Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getStartFormVariables = function(id,variableNames,deserializeValues) {
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
 * Get Start Form Variables
 * Retrieves the start form variables for the latest process definition which belongs to no tenant (only if they are defined via the  [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach). The start form variables take form data specified on the start event into account. If form fields are defined, the variable types and default values of the form fields are taken into account.
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * variableNames String A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. (optional)
 * deserializeValues Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getStartFormVariablesByKey = function(key,variableNames,deserializeValues) {
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
 * Get Start Form Variables
 * Retrieves the start form variables for the latest process definition for a tenant (only if they are defined via the  [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach). The start form variables take form data specified on the start event into account. If form fields are defined, the variable types and default values of the form fields are taken into account.
 *
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * variableNames String A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. (optional)
 * deserializeValues Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getStartFormVariablesByKeyAndTenantId = function(key,tenantId,variableNames,deserializeValues) {
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
 * Restart Process Instance
 * Restarts process instances that were canceled or terminated synchronously. Can also restart completed process instances. It will create a new instance using the original instance information. To execute the restart asynchronously, use the [Restart Process Instance Async](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/post-restart-process-instance-async/) method.  For more information about the difference between synchronous and asynchronous execution, please refer to the related section of the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-restart/#execution).
 *
 * body RestartProcessInstanceDto  (optional)
 * id String The id of the process definition of the process instances to restart.
 * no response value expected for this operation
 **/
exports.restartProcessInstance = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Restart Process Instance Async
 * Restarts process instances that were canceled or terminated asynchronously. Can also restart completed process instances. It will create a new instance using the original instance information. To execute the restart asynchronously, use the [Restart Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/post-restart-process-instance-sync/) method.  For more information about the difference between synchronous and asynchronous execution, please refer to the related section of the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-restart/#execution).
 *
 * body RestartProcessInstanceDto  (optional)
 * id String The id of the process definition of the process instances to restart.
 * returns BatchDto
 **/
exports.restartProcessInstanceAsyncOperation = function(body,id) {
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
 * Start Instance
 * Instantiates a given process definition. Process variables and business key may be supplied in the request body.
 *
 * body StartProcessInstanceDto  (optional)
 * id String The id of the process definition to be retrieved.
 * returns ProcessInstanceWithVariablesDto
 **/
exports.startProcessInstance = function(body,id) {
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
 * Start Instance
 * Instantiates a given process definition, starts the latest version of the process definition which belongs to no tenant. Process variables and business key may be supplied in the request body.
 *
 * body StartProcessInstanceDto  (optional)
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * returns ProcessInstanceWithVariablesDto
 **/
exports.startProcessInstanceByKey = function(body,key) {
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
 * Start Instance
 * Instantiates a given process definition, starts the latest version of the process definition for tenant. Process variables and business key may be supplied in the request body.
 *
 * body StartProcessInstanceDto  (optional)
 * key String The key of the process definition (the latest version thereof) to be retrieved.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns ProcessInstanceWithVariablesDto
 **/
exports.startProcessInstanceByKeyAndTenantId = function(body,key,tenantId) {
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
 * Submit Start Form
 * Starts a process instance using a set of process variables and the business key. If the start event has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * body StartProcessInstanceFormDto  (optional)
 * id String The id of the process definition to submit the form for.
 * returns ProcessInstanceDto
 **/
exports.submitForm = function(body,id) {
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
 * Submit Start Form
 * Starts the latest version of the process definition which belongs to no tenant using a set of process variables and the business key. If the start event has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * body StartProcessInstanceFormDto  (optional)
 * key String The key of the process definition to submit the form for.
 * returns ProcessInstanceDto
 **/
exports.submitFormByKey = function(body,key) {
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
 * Submit Start Form
 * Starts the latest version of the process definition for a tenant using a set of process variables and the business key. If the start event has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
 *
 * body StartProcessInstanceFormDto  (optional)
 * key String The key of the process definition to submit the form for.
 * tenantId String The id of the tenant the process definition belongs to.
 * returns ProcessInstanceDto
 **/
exports.submitFormByKeyAndTenantId = function(body,key,tenantId) {
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
 * Update History Time to Live
 * Updates history time to live for process definition. The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
 *
 * body HistoryTimeToLiveDto  (optional)
 * id String The id of the process definition to change history time to live.
 * no response value expected for this operation
 **/
exports.updateHistoryTimeToLiveByProcessDefinitionId = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update History Time to Live
 * Updates history time to live for the latest version of the process definition which belongs to no tenant. The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
 *
 * body HistoryTimeToLiveDto  (optional)
 * key String The key of the process definition to change history time to live.
 * no response value expected for this operation
 **/
exports.updateHistoryTimeToLiveByProcessDefinitionKey = function(body,key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update History Time to Live
 * Updates history time to live for the latest version of the process definition for a tenant. The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
 *
 * body HistoryTimeToLiveDto  (optional)
 * key String The key of the process definition to change history time to live.
 * tenantId String The id of the tenant the process definition belongs to.
 * no response value expected for this operation
 **/
exports.updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId = function(body,key,tenantId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Activate/Suspend By Key
 * Activates or suspends process definitions with the given process definition key.
 *
 * body ProcessDefinitionSuspensionStateDto **Note**: Unallowed property is `processDefinitionId`. (optional)
 * no response value expected for this operation
 **/
exports.updateProcessDefinitionSuspensionState = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Activate/Suspend By Id
 * Activates or suspends a given process definition by id.
 *
 * body ProcessDefinitionSuspensionStateDto **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`. (optional)
 * id String The id of the process definition to activate or suspend.
 * no response value expected for this operation
 **/
exports.updateProcessDefinitionSuspensionStateById = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Activate/Suspend by Id
 * Activates or suspends a given process definition by latest version of process definition key which belongs to no tenant.
 *
 * body ProcessDefinitionSuspensionStateDto **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`. (optional)
 * key String The key of the process definition (the latest version thereof) to be activated/suspended.
 * no response value expected for this operation
 **/
exports.updateProcessDefinitionSuspensionStateByKey = function(body,key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Activate/Suspend by Id
 * Activates or suspends a given process definition by the latest version of the process definition for tenant.
 *
 * body ProcessDefinitionSuspensionStateDto **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`. (optional)
 * key String The key of the process definition (the latest version thereof) to be activated/suspended.
 * tenantId String The id of the tenant the process definition belongs to.
 * no response value expected for this operation
 **/
exports.updateProcessDefinitionSuspensionStateByKeyAndTenantId = function(body,key,tenantId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

