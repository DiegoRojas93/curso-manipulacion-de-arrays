const totales = [1, 2, 3, 4,]

const total = totales.reduce((acum, value, index, array) => {
    console.log(`${index}: ${array[index]}`);

    return acum += value;
}, state = 10)

console.log('Total: ',total);