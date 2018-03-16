var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocoloateBars, foo) {
  return [foo, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, milkyway) {
  return chocolateBars.unshift("milkyway");
}