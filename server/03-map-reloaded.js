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

const listOfChoses = orders.filter(({ delivered, total }) => delivered && total >= 100)

const search = query => orders.filter( ({ customerName }) => customerName.includes(query) )

console.log(search('o'));