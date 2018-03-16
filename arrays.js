var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocoloateBars, milkyway) {
  [milkyway, ...chocolateBars];
  return chocolateBars();
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyway) {
  chocolateBars.unshift("milkyway");
}