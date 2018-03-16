var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocoloateBars, milkyway) {
  [milkyway, ...chocolateBars];
  return
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyway) {
  chocolateBars.unshift("milkyway");
}