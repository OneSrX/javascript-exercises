const sumAll = function (firstNum, secondNum) {
  if (firstNum) if (firstNum < 0 || secondNum < 0) return "ERROR";
  if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum))
    return "ERROR";
  if (typeof firstNum !== "number" || typeof secondNum !== "number")
    return "ERROR";

  let sum = 0;
  let min = firstNum;
  let max = secondNum;

  if (firstNum > secondNum) {
    min = secondNum;
    max = firstNum;
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

console.log();
