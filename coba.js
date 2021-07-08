var pantun = "makan nasi bayar pake paku"
// var pantunSplit = pantun.split(' ');
// console.log(pantunSplit);

function pantunSplit(str) {
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

// call function
console.log(pantunSplit(pantun));