// Algoritma


// Codingan
function palindrome(str) {
    var s = str.length-1;
    
    if (s === 1 || str.length === 0) {
    return true;
    } if (str[0] === str[s]) {
    return palindrome(str.slice(1, s));
    } return false;
    }
    
    
    // TEST CASES
    console.log(palindrome("kasur ini rusak")) // true
    console.log(palindrome("kasur ini rusax")) // false
   