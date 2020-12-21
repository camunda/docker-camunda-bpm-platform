'use strict';


/**
 * Creates a deployment.  **Security Consideration**  Deployments can contain custom code in form of scripts or EL expressions to customize process behavior. This may be abused for remote execution of arbitrary code.
 *
 * returns DeploymentWithDefinitionsDto
 **/
exports.createDeployment = function() {
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
 * Deletes a deployment by id.
 *
 * id String The id of the deployment to be deleted.
 * cascade Boolean `true`, if all process instances, historic process instances and jobs for this deployment should be deleted. (optional)
 * skipCustomListeners Boolean `true`, if only the built-in ExecutionListeners should be notified with the end event. (optional)
 * skipIoMappings Boolean `true`, if all input/output mappings should not be invoked. (optional)
 * no response value expected for this operation
 **/
exports.deleteDeployment = function(id,cascade,skipCustomListeners,skipIoMappings) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a deployment by id, according to the `Deployment` interface of the engine.
 *
 * id String The id of the deployment.
 * returns List
 **/
exports.getDeployment = function(id) {
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
 * Retrieves a deployment resource by resource id for the given deployment.
 *
 * id String The id of the deployment
 * resourceId String The id of the deployment resource
 * returns DeploymentResourceDto
 **/
exports.getDeploymentResource = function(id,resourceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deploymentId" : "deploymentId",
  "name" : "name",
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
 * Retrieves the binary content of a deployment resource for the given deployment by id.
 *
 * id String The id of the deployment.
 * resourceId String The id of the deployment resource.
 * returns byte[]
 **/
exports.getDeploymentResourceData = function(id,resourceId) {
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
 * Retrieves all deployment resources of a given deployment.
 *
 * id String The id of the deployment to retrieve the deployment resources for.
 * returns List
 **/
exports.getDeploymentResources = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "deploymentId" : "deploymentId",
  "name" : "name",
  "id" : "id"
}, {
  "deploymentId" : "deploymentId",
  "name" : "name",
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
 * Queries for deployments that fulfill given parameters. Parameters may be the properties of deployments, such as the id or name or a range of the deployment time. The size of the result set can be retrieved by using the [Get Deployment count](https://docs.camunda.org/manual/7.14/reference/rest/deployment/get-query-count/) method.
 *
 * id String Filter by deployment id (optional)
 * name String Filter by the deployment name. Exact match. (optional)
 * nameLike String Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`). (optional)
 * source String Filter by the deployment source. (optional)
 * withoutSource Boolean Filter by the deployment source whereby source is equal to `null`. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include deployments which belong to no tenant. Value may only be `true`, as `false` is the default behavior. (optional)
 * includeDeploymentsWithoutTenantId Boolean Include deployments which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior. (optional)
 * after Date Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * before Date Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getDeployments = function(id,name,nameLike,source,withoutSource,tenantIdIn,withoutTenantId,includeDeploymentsWithoutTenantId,after,before,sortBy,sortOrder,firstResult,maxResults) {
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
 * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Deployments](https://docs.camunda.org/manual/7.14/reference/rest/deployment/get-query/) method.
 *
 * id String Filter by deployment id (optional)
 * name String Filter by the deployment name. Exact match. (optional)
 * nameLike String Filter by the deployment name that the parameter is a substring of. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`). (optional)
 * source String Filter by the deployment source. (optional)
 * withoutSource Boolean Filter by the deployment source whereby source is equal to `null`. (optional)
 * tenantIdIn String Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids. (optional)
 * withoutTenantId Boolean Only include deployments which belong to no tenant. Value may only be `true`, as `false` is the default behavior. (optional)
 * includeDeploymentsWithoutTenantId Boolean Include deployments which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior. (optional)
 * after Date Restricts to all deployments after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * before Date Restricts to all deployments before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`. (optional)
 * returns CountResultDto
 **/
exports.getDeploymentsCount = function(id,name,nameLike,source,withoutSource,tenantIdIn,withoutTenantId,includeDeploymentsWithoutTenantId,after,before) {
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
 * Re-deploys an existing deployment.  The deployment resources to re-deploy can be restricted by using the properties `resourceIds` or `resourceNames`. If no deployment resources to re-deploy are passed then all existing resources of the given deployment are re-deployed.  **Warning**: Deployments can contain custom code in form of scripts or EL expressions to customize process behavior. This may be abused for remote execution of arbitrary code. See the section on [security considerations for custom code](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/) in the user guide for details.
 *
 * body RedeploymentDto  (optional)
 * id String The id of the deployment to re-deploy.
 * returns DeploymentWithDefinitionsDto
 **/
exports.redeploy = function(body,id) {
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

