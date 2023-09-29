let sayi= prompt("Lütfen bir yil giriniz");

if(sayi%4 == 0 && sayi%100 == 0 && sayi% 400 == 0){
    alert (`${sayi} artik yildir`)
} else if(sayi%4 !==0 ){
    alert (`${sayi} artik yil degildir`) 
} else if(sayi%4 == 0 && sayi%100 !==0){
    alert (`${sayi} artik yildir`) 
}
else{
    alert (`${sayi} artik yil degildir`) 
}

