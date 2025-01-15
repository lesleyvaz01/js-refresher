type Person = {
  firstName: string;
  lastName?: string;
  age?: number;
};

const rufus: Person = {
  firstName: "Rufus",
  //lastName: "McQueue",
  //age: 65,
};

console.log(rufus);
