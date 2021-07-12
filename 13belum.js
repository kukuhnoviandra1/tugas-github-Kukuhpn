var kata = "aku suka bootcamp sentul city"
// var pantunSplit = pantun.split(' ');
// console.log(pantunSplit);

function maxWord(str) {
    var result = [];
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] !== ' ') {
            temp = temp + str[i];
        } else {
            result.push(temp);
            temp = '';
        }
        if (i === str.length - 1) {
            result.push(temp);
            temp = '';
        }
    }
    return result;
}


console.log(maxWord(kata));