//check whether the passed value is integer or not
module.exports.validatePassedValueIsNumber = (number) => {
  return !Number.isNaN(+number) && number !== "" && number !== null;
};

//Convert number to array of string
const convertNumberIntoArrayOfStrings = (number) => {
  return [...number.toString()];
};

//check whether the index value is between the start and end value
const isBetweenRange = (index, startPosition, endPosition) => {
  return index >= startPosition - 1 && index <= endPosition - 1;
};

// replace the number if it is in betweeen the range
const replaceIfInBetweenRange = (
  index,
  startPosition,
  endPosition,
  char,
  replaceWith = "*"
) => {
  return isBetweenRange(index, startPosition, endPosition) ? replaceWith : char;
};

// mask the number between range with the given value
module.exports.mask = (value, startPosition, endPosition, replaceWith) => {
  const arrayOfString = convertNumberIntoArrayOfStrings(value);
  return arrayOfString
    .map((char, index) =>
      replaceIfInBetweenRange(
        index,
        startPosition,
        endPosition,
        char,
        replaceWith
      )
    )
    .join("");
};

//vaildate range
module.exports.checkIsValidRange = (value, startPosition, endPosition) => {
  const lengthOfNumber = value.toString().length;
  return startPosition > 0 && endPosition <= lengthOfNumber;
};
