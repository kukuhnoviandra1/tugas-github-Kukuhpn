function compareXO(xo){
    var flagX = 0;
    var flagO = 0;

    for(var i = 0; i < xo.length; i++){
        if(xo[i] === 'x'){
            flagX++;
        }else{
            flagO++;
        }
    }
    var result = flagX === flagO;
    console.log(result)
    return result
}
console.log(compareXO('oxxoxoxxxxoooo'));
console.log(compareXO('xxxoo'));