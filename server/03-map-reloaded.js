const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
]

const totales = orders.map( item => ({
        ...item, 
        tax: 0.19
}))

console.log('orders: ', orders);
console.log('totales: ', totales);

/*
    orders:  [
        { customerName: 'Nicolas', total: 60, delivered: true },
        { customerName: 'Zulema', total: 120, delivered: false },
        { customerName: 'Santiago', total: 180, delivered: true },
        { customerName: 'Valentina', total: 240, delivered: true }
    ]
    totales:  [
        { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
        { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
        { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
        { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
        ]
*/  