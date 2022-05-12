// Fibonacci Sayı dizisi Çözümü

let x = [0,1];
let sayı = +prompt("Lütfen sayı giriniz");

function y() {
    
    for (let i=0; i < sayı; i++) {
        let k = x[x.length-1] + x[x.length-2];
        x.push(k);        
}
return x
}

console.log(y());

