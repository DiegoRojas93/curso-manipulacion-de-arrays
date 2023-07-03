// const numbers = [1,30,49,29,10,13];

// const result = numbers.find( num => num === 30)

// console.log(result);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const { name } = products.find( ({ id }) => id === '🍕')

console.log( name );
// Output: Pizza