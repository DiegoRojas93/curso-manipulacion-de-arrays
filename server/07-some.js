const list = [1, 2, 3, 4, 5, ]

const isThereAPair = list.some( num => num % 2 === 0)

console.log( isThereAPair );
// Output: true



// const dates = [
//     {
//       startDate: new Date(2021, 1, 1, 10),
//       endDate: new Date(2021, 1, 1, 11),
//       title: "Cita de trabajo",
//     },
//     {
//       startDate: new Date(2021, 1, 1, 15),
//       endDate: new Date(2021, 1, 1, 15, 30),
//       title: "Cita con mi jefe",
//     },
//     {
//       startDate: new Date(2021, 1, 1, 20),
//       endDate: new Date(2021, 1, 1, 21),
//       title: "Cena",
//     },
//   ];
  
// const newAppointment = {
//   startDate: new Date(2021, 1, 1, 8),
//   endDate: new Date(2021, 1, 1, 9, 30),
// };

// var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

// const isOverlap = newDate => {
//   return dates.some( date => {
//     return areIntervalsOverlapping(
//       { start: date.startDate, end: date.endDate },
//       { start: newDate.startDate, end: newDate.endDate },
//     )
//   })
// }

// console.log('isOverLap', isOverlap(newAppointment));