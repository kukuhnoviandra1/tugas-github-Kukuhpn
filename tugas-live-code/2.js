let kata = "saya dan SAYA suka makan nasi"
// let kataSplit = kata.split(' ')
// console.log(kataSplit)

 function stringToArray(str){
        let result = [];
        let temp = '';
        for (let i = 0; i < str.length; i++) {
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
    
    console.log(stringToArray('saya dan SAYA suka makan nasi'))

    // ["saya", "dan", "saya", "suka", "makan", "nasi"]