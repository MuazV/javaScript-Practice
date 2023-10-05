// let sayi1 = Number(prompt("Lütfen 1. sayiyi giriniz"))
// let sayi2 = Number(prompt("Lütfen 2. sayiyi giriniz"))
// let operatör = prompt("Lütfen yapmak istediginiz islemi seciniz")

// promptla alinan bilgiler her zaman string ifadedir.
// if(muaz>muaz1 && muaz>muaz2){
//     alert(`${muaz} en büyük sayidir`);
// }else if(muaz1>muaz && muaz1>muaz2){
//     alert(`${muaz1} en büyük sayidir`);
// }
// else{
//     alert(`${muaz2} en büyük sayidir`);
// }


// if(operatör == `+`){
//     alert(`${sayi1+sayi2}`);
// }else if(operatör == `-`){
//     alert(`${sayi1-sayi2}`);
// }else if(operatör == `*`){
//     alert(`${sayi1*sayi2}`);
// }else if(operatör == `/`){
//     alert(`${sayi1/sayi2}`)
// }else{
//     alert(`hatali operator "${operatör}" girdiniz`)
// }

// let gun = prompt("Lütfen bir gün giriniz")

// switch(gun){
//     case "pazartesi":
//     case "sali":
//     case "carsamba":
//     case "persembe":
//         gun = "Inclass";
//         break
//     case "cuma":
//     case "sali":
//         gun = "Teamwork";
//         break;
     
//     case "cumartesi":
//         gun = "Inclass + Workshop";
//         break
//     case "pazar":
//         gun = "self study";
//         break;
//     default:
//         gun = "Yanlis gun girildi"
//         break
// }

// alert(gun);

// let sayi = 0;

// sayi != 0 ? alert(`${sayi > 0 ? console.log(`${sayi} sifirdan buyuktur`) :  console.log(`${sayi} sifirdan kucuktur`)}`) : console.log("sayi sifirdir");

// let not = +prompt("not giriniz");

// not >=50 
//     ? alert("Helal olsun gectin")
//     : alert("Uzgunum kaldin")

let not = +prompt("not giriniz")

// not > 40
//     ? not < 50
//         ? alert("sartli gecti")
//         : alert("gecti")
//     : alert("kaldi");

if (not >= 50){
    alert("gecti");
}else if(not> 40 && not <50){
    alert("sartli gecti");
}
else{
    alert("kaldi");
}