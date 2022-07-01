let str = "aabbccddea";
let emp = []

for(let i= 0; i<str.length; i++){

    if(str[i] == str[i-1]){
        let empty = {}
        if((str[i])){
        empty[str[i]] +=1
    }
    else{
        empty[str[i]] = 1;
    }
    emp.push(empty)
    }
    else {
        let asdf ={}
        asdf[str[i]] = 1;
        emp.push(asdf)
    }
}

console.log(emp)


// let str = "aabbccddea";
// let empty = []

// for(let i= 0; i<str.length; i++){
//     if(str[i] == str[i-1]){
//         str[i]
//     }
// }

// console.log(empty)