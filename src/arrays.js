const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArr = array.slice();
  newArr.push(element);
  return newArr;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.join().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(strings =>
    strings
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  const newArr = numbers.filter(numbers => numbers % 2 === 0);
  return newArr;
};

const removeNthElement2 = (index, array) => {
  const newArr =[...array];
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => strings.match(/^[aeiou]/gi));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  const sum = numbers.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
