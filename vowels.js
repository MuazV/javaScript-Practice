//Find Vowels in the sentence

let vow = ["a", "e", "i", "o", "u"]

let cumle = "muaz naber";
let counter = 0


for(let i=0; i<cumle.length; i++){
    if(vow.includes(cumle[i])) {
        counter+=1
    }
}
console.log(counter)