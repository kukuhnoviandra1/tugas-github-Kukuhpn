function factorial(k){
	var angka=1;
	var faktor=1;
	
	 while(angka<=k){
		 faktor= faktor*angka;
		 angka = angka+1;
	 }
	 console.log(faktor)
}
factorial(5)