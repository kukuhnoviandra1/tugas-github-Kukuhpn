//Algoritma
// 1. Membuat variabel string untuk input yang akan dimasukan
// 2. membuat kondisi jika i sama dengan jumlah str maka juml index-1
// 3. jika i lebih besar atau sama dengan 0 index,maka cetak indeks ke 3
// 4. jika i lebih besar atau sama dengan 1 index,maka cetak indeks ke 2
// 5. jika i lebih besar atau sama dengan 2 index,maka cetak indeks ke 1
// 6. jika i lebih besar atau sama dengan 3 index,maka cetak indeks ke 0



// Codingan
function reverseString(str) {
    var temp = "";
    for (var i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}
console.log(reverseString("12345"));