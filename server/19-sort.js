const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();

// console.log(months);
// Output: [ 'Dec', 'Feb', 'Jan', 'March' ]


const numbers = [1, 30, 4, 21, 100000];
numbers.sort();

// console.log(numbers);
// Output: [ 1, 100000, 21, 30, 4 ]


const numbers2 = [1, 30, 4, 21, 100000];
numbers2.sort((a, b) => b - a);

//console.log(numbers2);
// Output: [ 100000, 30, 21, 4, 1 ]


const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort();

// console.log(words);
// Output: ['adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair']

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  orders.sort((a,b) => a.total - b.total);
  console.log(orders);

  /* 
  
  Output: [
    { customerName: 'Zulema', total: 120, delivered: false },
    { customerName: 'Valentina', total: 240, delivered: true },
    { customerName: 'Nicolas', total: 600, delivered: true },
    { customerName: 'Santiago', total: 1840, delivered: true }
  ]

  */



