let x = 10;
const y = 20;

while (x < y) {
  console.log("Doing while loop: ", x);
  x = x + 1;
}

do {
  console.log("Doing do-while loop: ", x);
  x = x + 1;
} while (x < y);

//let i=0 - initalize
//cant be const cuz needs to change
//i<6 - conditional enter the block
//i++ - run after each block
for (let i = 0; i < 6; i++) {
  console.log("for: ", i);
}
