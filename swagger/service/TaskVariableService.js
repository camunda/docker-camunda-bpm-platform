'use strict';


/**
 * Removes a variable that is visible to a task. A variable is visible to a task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).
 *
 * id String The id of the task to delete the variable from.
 * varName String The name of the variable to be removed.
 * no response value expected for this operation
 **/
exports.deleteTaskVariable = function(id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a variable from the context of a given task. The variable must be visible from the task. It is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).
 *
 * id String The id of the task to retrieve the variable from.
 * varName String The name of the variable to get.
 * deserializeValue Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns VariableValueDto
 **/
exports.getTaskVariable = function(id,varName,deserializeValue) {
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
 * Retrieves a binary variable from the context of a given task. Applicable for byte array and file variables. The variable must be visible from the task. It is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).
 *
 * id String The id of the task to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * returns byte[]
 **/
exports.getTaskVariableBinary = function(id,varName) {
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
 * Retrieves all variables visible from the task. A variable is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).
 *
 * id String The id of the task to retrieve the variables from.
 * deserializeValue Boolean Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`). If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (optional)
 * returns Map
 **/
exports.getTaskVariables = function(id,deserializeValue) {
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
 * Updates or deletes the variables visible from the task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update. A variable is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).
 *
 * body PatchVariablesDto  (optional)
 * id String The id of the task to set variables for.
 * no response value expected for this operation
 **/
exports.modifyTaskVariables = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a process variable that is visible from the Task scope. A variable is visible from the task if it is a local task variable, or declared in a parent scope of the task. See the documentation on [variable scopes and visibility](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables#variable-scopes-and-variable-visibility).  **Note**: If a variable doesn't exist, the variable is created in the top-most scope visible from the task.
 *
 * body VariableValueDto  (optional)
 * id String The id of the task to set the variable for.
 * varName String The name of the variable to set.
 * no response value expected for this operation
 **/
exports.putTaskVariable = function(body,id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets the serialized value for a binary variable or the binary value for a file variable visible from the task. A variable is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).
 *
 * id String The id of the task to retrieve the variable for.
 * varName String The name of the variable to retrieve.
 * no response value expected for this operation
 **/
exports.setBinaryTaskVariable = function(id,varName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

