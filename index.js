const args = process.argv.slice(2);
// slice removes the first two items in the array
// it's 2 not 1 because index doesn't consider the first item? or starts from 1 instead of 0
let sum = 0;

if (args.length < 2) {
  console.log("Error: Please provide at least 2 arguments.");
  process.exit(1);
}

for (const arg of args) {
  const num = parseInt(arg);
  if (!isNaN(num)) {
    sum += num;
  } else {
    console.log(`Error: '${arg}' is not a valid number.`);
  }
}

console.log(`Sum of valid numbers: ${sum}`);

// in terminal run example `node index.js -5 3`
// output will be Sum of valid numbers: -2