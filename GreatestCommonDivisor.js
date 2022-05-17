let b1 = 1;
let b2 = 1;
console.log(!0);

let hcf = 0;
for (i=1; i<=b1 && i<=b2; i++){
    if (b1%i ==0 && b2%i ==0){
        hcf=i;
    }
}
console.log(hcf);

function mygcd(x,y){
    let hcf = 0;
    for (i=1; i<=x && i<=y;){
        if (x%i ==0 && y%i ==0){
            hcf=i;
            i++
        }
    return hcf
  }}

console.log(mygcd(1,1))