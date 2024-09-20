// let arr = [
//     {
//         id: 1,
//         name: 'Behruz',
//         veight: 84
//     },
//     {
//         id: 2,
//         name: 'Sardor',
//         veight: 70
//     },
//     {
//         id: 3,
//         name: 'Sirojjidin',
//         veight: 82
//     },
//     {
//         id: 1,
//         name: 'Shodiyor',
//         veight: 68
//     }
// ];

// let result = arr.reduce((v, i) => {
//     return v + i.veight;
// }, 0);

// console.log(result);






let arr = [2, 4, 9, 10, 45, 67, 8, 90, 'boshlanishdagi array'];

let result = arr.filter((v, i) => {
    return v % 2 === 0;
});

console.log(arr)
console.log(result, 'juft sonlarga ajratilgan array');










// let arr = ['olma', 'nok', 'banan', 'olma', 'nok', 'tarvuz']

// let result = arr.filter((v, i) => {
//     return v !== 'olma';
// });

// console.log(arr)
// console.log(result)