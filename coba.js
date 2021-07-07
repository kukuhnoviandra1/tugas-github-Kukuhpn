function cetakKotak(angka){
    var temp = ''
    for(var i = 0; i < angka; i++){
        for(var j = 0; j < angka; j++){
            temp += "#"
        }
        console.log(temp);
        temp = '';
    }
}