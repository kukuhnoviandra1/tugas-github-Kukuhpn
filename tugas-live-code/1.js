// Algoritma
// 1. buat variabel pengalaman
// 2. buat variabel joblevel
// 3. cek level jika
// 4.1 Junior : 
// 3.1.1 memiliki pengalaman kurang dari 2, maka gaji Rp. 3.000.000
// 3.1.2 memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 4.000.000
// 3.1.3 memiliki pengalaman lebih dari 5, maka gaji Rp. 5.000.000
// * 
// 3.2 * Middle : 
// 3.2.1 memiliki pengalaman kurang dari 2, maka gaji Rp. 5.500.000
// 3.2.2 memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 6.500.000
// 3.2.3 memiliki pengalaman lebih dari 5, maka gaji Rp. 7.500.000
// * 
// 3.3 Senior : 
// 3.3.1 memiliki pengalaman kurang dari 2, maka gaji Rp. 7.500.000
// 3.3.2 memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 9.000.000
// 3.3.3 memiliki pengalaman lebih dari 5, maka gaji Rp. 10.000.000 
// 4. kalau pengalaman tidak ada tampilkan "Not Experience"
// 5. level tidak ada tampilkan "Input Level"

var joblevel = '';
var pengalaman = 10;

switch(joblevel){
    case 'junior':
        if(pengalaman < 2){
            console.log(joblevel + ' gaji 3.000.000');
        }else if(pengalaman >= 2 && pengalaman < 5){
            console.log(joblevel + ' gaji 4.000.000');
        }else{
            console.log(joblevel + ' gaji 5.000.000')
        }
        break;
    case 'middle':
        if(pengalaman < 2){
            console.log(joblevel + ' 5.500.000');
        }else if(pengalaman >= 2 && pengalaman < 5){
            console.log(joblevel + ' 6.500.000');
        }else{
            console.log(joblevel + ' 7.500.000')
        }
        break;
    case 'senior':
        if(pengalaman < 2){
            console.log(joblevel + '  7.500.000');
        }else if(pengalaman >= 2 && pengalaman < 5){
            console.log(joblevel + ' 9.000.000');
        }else{
            console.log(joblevel + ' 10.000.000')
        }
        break;
    case '':
        console.log('Masukan Job Level...')
        break;
    default:
        console.log('Tidak Terbaca')
        break;
}
