const createPerson = (name, age) => {
  return { name: name, age: age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  const newArr = [];
  for (let i = 0; i < people.length; i++) {
    newArr.push(people[i].age);
  }
  return newArr;
};

const findByName = (name, people) => {
  return people.find(people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === 'Honda')
};

const averageAge = people => {
  return people.reduce((a, b) => a + b.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: introduce => {
      return `Hi ${introduce}, my name is ${name} and I am ${age}!`;
  }
}
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
