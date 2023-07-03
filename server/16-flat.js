const matriz = [
    [1, 2, 3,],                 /* 1 produndida */
    [4, 5, 6,[1, 2]],           /* 2 profundidad */
    [7, 8, 9, [1, [1,2]]]       /* 3 profundidad */
]

const result1 = matriz.flat()
const result2 = matriz.flat(2)
const result3 = matriz.flat(3)

console.log('result1:', result1);
// Output: [1, 2, 3, 4, 5, 6, [1, 2,] 7, 8, 9, [1, [1, 2]]]

console.log('result2:', result2);
// Output: [1, 2, 3, 4, 5, 6, 1, 2, 7, 8, 9, [1, [1, 2]]]

console.log('result3:', result3);
// Output: [1, 2, 3, 4, 5, 6, 1, 2, 7, 8, 9, 1, 1, 2]