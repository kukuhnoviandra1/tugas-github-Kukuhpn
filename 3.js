function berapaLompatTarget(x,y,k){
  var awal    =   x;
  var jarak   =   k;
  var target  =   y;
  var hasil   =   0;

  for (var i = awal; i <= target; i += jarak ){
    hasil = hasil + 1
  }
  console.log(hasil);
}
berapaLompatTarget(10,85,30);