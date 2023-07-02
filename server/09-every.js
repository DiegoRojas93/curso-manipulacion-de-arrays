// const numbers = [1, 30, 50, 29, 10, 13,]

// const result = numbers.every( num => num <= 50)

// console.log(result);
// // Output: true


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const result = team
    .map(({ age }) => age)
    .every( age => age <= 15)

console.log(result);
// Output: false