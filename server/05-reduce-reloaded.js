// const items = [1, 2, 3, 4, 3, 3, 10]

// const result = items.reduce((obj, value) => {
    
//     if (!obj[value]) {
//         obj[value] = 1
//     } else {
//         obj[value] = obj[value] + 1
//     }

//     return obj
// }, {})

// console.log(result);
// Output: { '1': 1, '2': 1, '3': 3, '4': 1, '10': 1 }



// const data = [
//     {
//       name: "Nicolas",
//       level: "low",
//     },
//     {
//       name: "Andrea",
//       level: "medium",
//     },
//     {
//       name: "Zulema",
//       level: "hight",
//     },
//     {
//       name: "Santiago",
//       level: "low",
//     },
//     {
//       name: "Valentina",
//       level: "medium",
//     },
//     {
//       name: "Lucia",
//       level: "hight",
//     },
// ];

// const result = data
//     .map(({ level}) => level )
//     .reduce((obj, value) => {
//         if (!obj[value]) {obj[value] = 1}
//         else { obj[value] = obj[value]++ }

//         return obj
//     }, {})

// console.log(result);


const data = [4, 7, 2, 9, 1, 8, 6, 3, 10, 5, 1, 9, 3, 2, 8, 6, 10, 4, 7, 5]

const result = data.reduce((obj, num) => {
    if ([1, 2, 3, 4, 5].includes( num )) obj["1-5"] = num
    if ([6, 7, 8].includes( num )) obj["6-8"] = num
    if ([9, 10].includes( num )) obj["9-10"] = num

    return obj
}, {"1-5": 0, "6-8": 0, "9-10": 0})


console.log(result);