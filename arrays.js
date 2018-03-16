let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  ["element", ...array];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, "milky way") {
  chocolateBars.unshift("milky way");
};
