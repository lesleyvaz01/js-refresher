function addNumbers(numA, numB) {
  return numA + numB;
}

const addThings = (numA: number, numB: number) => {
  return numA + numB;
};

const addStuff = (numA, numB) => numA + numB;

const thunk = () => 42;
console.log(addNumbers(4, 5));
console.log(addThings(6, 7));
console.log(addStuff(9, 10));
console.log(thunk());
