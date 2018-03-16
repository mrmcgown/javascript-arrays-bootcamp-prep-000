var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocoloateBars, milkyway) {
  return [milkyway, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyway) {
  return chocolateBars.unshift("milkyway");
}