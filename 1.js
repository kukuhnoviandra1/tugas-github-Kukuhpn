// //Algoritma
// 1. buat variabel array untuk jumlah angka di index
// 2. buat variabel hasil 0 untuk nanti di tambahkan dengan looping
// 3. jika index tercetak maka akan di jumlahkan ke index selanjutnya
// 4. penjumlahan akan berhenti sesuai nomor.length
// 5. cetak hasil, penjumlahan dari semua index  



var nomor = [3,4,5,6];
var hasil = 0;

for(i = 0; i <nomor.length; i++){
   hasil += nomor[i];
}

console.log(hasil);