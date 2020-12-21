'use strict';


/**
 * Options
 * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such and one for individual user instances. The `OPTIONS` request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user's authorizations to interact with this resource and the internal configuration of the process engine.
 *
 * returns ResourceOptionsDto
 **/
exports.availableOperations = function() {
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
 * Options
 * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such and one for individual user instances. The `OPTIONS` request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user's authorizations to interact with this resource and the internal configuration of the process engine.
 *
 * id String The id of the user to be deleted.
 * returns ResourceOptionsDto
 **/
exports.availableUserOperations = function(id) {
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
 * Create
 * Create a new user.
 *
 * body UserDto  (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete
 * Deletes a user by id.
 *
 * id String The id of the user to be deleted.
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get List Count
 * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Users](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query/) method.
 *
 * id String Filter by user id (optional)
 * idIn String Filter by a comma-separated list of user ids. (optional)
 * firstName String Filter by the first name of the user. Exact match. (optional)
 * firstNameLike String Filter by the first name that the parameter is a substring of. (optional)
 * lastName String Filter by the last name of the user. Exact match. (optional)
 * lastNameLike String Filter by the last name that the parameter is a substring of. (optional)
 * email String Filter by the email of the user. Exact match. (optional)
 * emailLike String Filter by the email that the parameter is a substring of. (optional)
 * memberOfGroup String Filter for users which are members of the given group. (optional)
 * memberOfTenant String Filter for users which are members of the given tenant. (optional)
 * potentialStarter String Only select Users that are potential starter for the given process definition. (optional)
 * returns CountResultDto
 **/
exports.getUserCount = function(id,idIn,firstName,firstNameLike,lastName,lastNameLike,email,emailLike,memberOfGroup,memberOfTenant,potentialStarter) {
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
 * Get Profile
 * Retrieves a user's profile.
 *
 * id String The id of the user to retrieve.
 * returns List
 **/
exports.getUserProfile = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "id" : "id",
  "email" : "email"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "id" : "id",
  "email" : "email"
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
 * Query for a list of users using a list of parameters. The size of the result set can be retrieved by using the Get User Count method. [Get User Count](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query-count/) method.
 *
 * id String Filter by user id (optional)
 * idIn String Filter by a comma-separated list of user ids. (optional)
 * firstName String Filter by the first name of the user. Exact match. (optional)
 * firstNameLike String Filter by the first name that the parameter is a substring of. (optional)
 * lastName String Filter by the last name of the user. Exact match. (optional)
 * lastNameLike String Filter by the last name that the parameter is a substring of. (optional)
 * email String Filter by the email of the user. Exact match. (optional)
 * emailLike String Filter by the email that the parameter is a substring of. (optional)
 * memberOfGroup String Filter for users which are members of the given group. (optional)
 * memberOfTenant String Filter for users which are members of the given tenant. (optional)
 * potentialStarter String Only select Users that are potential starter for the given process definition. (optional)
 * sortBy String Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. (optional)
 * sortOrder String Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. (optional)
 * firstResult Integer Pagination of results. Specifies the index of the first result to return. (optional)
 * maxResults Integer Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. (optional)
 * returns List
 **/
exports.getUsers = function(id,idIn,firstName,firstNameLike,lastName,lastNameLike,email,emailLike,memberOfGroup,memberOfTenant,potentialStarter,sortBy,sortOrder,firstResult,maxResults) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "id" : "id",
  "email" : "email"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "id" : "id",
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unlock User
 * Unlocks a user by id.
 *
 * id String The id of the user to be unlocked.
 * no response value expected for this operation
 **/
exports.unlockUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Credentials
 * Updates a user's credentials (password)
 *
 * body UserCredentialsDto  (optional)
 * password String The users new password.
 * authenticatedUserPassword String The password of the authenticated user who changes the password of the user (i.e., the user with passed id as path parameter).
 * id String The id of the user to be updated.
 * no response value expected for this operation
 **/
exports.updateCredentials = function(body,password,authenticatedUserPassword,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

