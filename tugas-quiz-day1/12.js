//Algoritma
// 1. buat variabel number array 2,3,4,5,6,7
// 2. gunakan modulus jika index array habis di bagi 0
// 3. maka cetak


let number = [2,3,4,5,6,7];
//console.log(number);

let temp = number.filter (number => number % 2 === 0)
console.log(temp)