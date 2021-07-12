function segitigaBawah(panjang) {
    let temp = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            temp += ' * ';
        }
        temp += '\n';
    }
    return temp;
}
console.log(segitigaBawah(5));

