'use strict';


/**
 * Removes a local variable from a task by id.
 *
 * id String The id of the task to delete the variable from.
 * varName String The name of the variable to be removed.
 * no response value expected for this operation
 **/
exports.deleteTaskLocalVariable = function(id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a variable from the context of a given task by id.
 *
 * id String The id of the task to retrieve the variable from.
 * varName String The name of the variable to get
 * deserializeValue Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns VariableValueDto
 **/
exports.getTaskLocalVariable = function(id,varName,deserializeValue) {
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
 * Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file variables.
 *
 * id String The id of the task to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * returns byte[]
 **/
exports.getTaskLocalVariableBinary = function(id,varName) {
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
 * Retrieves all variables of a given task by id.
 *
 * id String The id of the task to retrieve the variables from.
 * deserializeValues Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getTaskLocalVariables = function(id,deserializeValues) {
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
 * Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.
 *
 * body PatchVariablesDto  (optional)
 * id String The id of the task to set variables for.
 * no response value expected for this operation
 **/
exports.modifyTaskLocalVariables = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets a variable in the context of a given task.
 *
 * body VariableValueDto  (optional)
 * id String The id of the task to set the variable for.
 * varName String The name of the variable to set.
 * no response value expected for this operation
 **/
exports.putTaskLocalVariable = function(body,id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets the serialized value for a binary variable or the binary value for a file variable.
 *
 * id String The id of the task to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * no response value expected for this operation
 **/
exports.setBinaryTaskLocalVariable = function(id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

