const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const print = () => {
    console.log("products", products);
    console.log("myProducts", myProducts);
    console.log("-".repeat(10));
}

const myProducts = [];

print()

const productIndex = products.findIndex( ({ id }) => id === "🍔" )

if ( productIndex !== -1 ) {
    myProducts.push(products[productIndex])
    products.splice(productIndex, 1)
}

print()

/* Eliminar un producto sin borrarlo de la lista original */

const arrayCopy = [... products]

arrayCopy.splice(1,1)

console.log(products);
console.log("-".repeat(10));
console.log(arrayCopy);


/* UPDATE: modificando el array original */

const products2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const index2 = products2.findIndex(function({ id }) {
    return id === this.id
}, update)

products2[index2].price = update.changes.price
products2[index2]['description'] = update.changes.description

console.log(products2);


/* UPDATE: Sin modificando el array original */

const products3 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update3 = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const products3Copy = products3.map( product => {
    if (product.id === update3.id) return { ...product, ...update3.changes }
    return product
})

console.log('products3:', products3);
console.log('result:', products3Copy)