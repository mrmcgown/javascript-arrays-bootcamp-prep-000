var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocoloateBars, foo) {
  return ["foo", ...chocolateBars];
}

addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  return chocolateBars.unshift("foo");
}

function addElementToEndOfArray

function destructivelyAddElementToEndOfArray