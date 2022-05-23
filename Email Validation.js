// Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

// Valid email addresses must follow these rules:
// It must have the username@websitename.extension format type.
// The maximum length of the extension is 3.

let mail = "e@.co"


if (mail.indexOf("@") < 1){
    console.log("USername hatalı")
}
else if ((mail.length - mail.lastIndexOf(".") > 4 ) || (mail.length - mail.lastIndexOf(".") <= 2))  {
    console.log("Extension hatalı girdiniz")
}

else if (mail.includes("@") != true){
    console.log("@ işareti ile tanımlama yapınız")
}
else if (mail.lastIndexOf(".") - mail.indexOf("@") <= 1){
    console.log("yanlış giriş yaptınız")
}
else {
    console.log("Başarılı Giriş yaptınız");
}

