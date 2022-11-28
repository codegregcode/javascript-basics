function negate(a) {
  if (a === false) {
    return true;
  }
  return false;
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a === true || b === true) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (a === false && b === false) {
    return true;
  }
  return false;
}

function one(a, b) {
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  }
  return false;
}

function truthiness(a) {
  if (a) {
    return true;
  }
  return false;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  if (a >= 0 && Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  // your code here
}

function containsVowels(string) {
  // your code here
}

function isLowerCase(string) {
  // your code here
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
