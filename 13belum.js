var kata = "aku suka bootcamp sentul city"
// var kataSplit = kata.split(' ');
// console.log(kataSplit);

function kataSplit(str){
    var hasil = [];
    var temp = '';
        for (var i = 0;i < str.length;i++){
        if (str[i] > hasil){
            temp = str[i];
            
        }
    }
  return temp;  
}
console.log(kataSplit(kata));