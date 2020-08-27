const { logger, consoleLogger } = require("./logger/log4js.config");

const {
  validatePassedValueIsNumber,
  checkIsValidRange,
  mask,
} = require("./lib/mask.utility");

//main function
const maskDigitWithGivenValue = (
  value,
  startPosition,
  endPosition,
  replaceWith
) => {
  if (
    validatePassedValueIsNumber(value) &&
    checkIsValidRange(+value, startPosition, endPosition)
  ) {
    return mask(value, startPosition, endPosition, replaceWith);
  }
  return;
};

//main function call
const maskedValue = maskDigitWithGivenValue("1" + 234567890, 5, 7, "-");
consoleLogger.info(maskedValue);
logger.info(maskedValue);
