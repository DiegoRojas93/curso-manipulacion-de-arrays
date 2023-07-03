/*              4       3       2       1 */
const pets = ['cat', 'rat', 'dog', 'bar']


const result1 =  pets.includes('rat', -2) 
const result2 =  pets.includes('rat', -3) 

console.log(result1);
// Output: false

console.log(result2);
// Output: true
