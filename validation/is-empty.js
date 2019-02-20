/* 
  Module to check if the value is empty or not
  Returns a bool, True if value is empty
  else returns false
*/

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
