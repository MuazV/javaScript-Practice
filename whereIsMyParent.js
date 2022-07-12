// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".


let parent = "xXfuUuuF";
let yusuf = parent.toLowerCase().split("").sort().join("")
let new_list = []

for(let i = 1; i<yusuf.length; i++){
    if(yusuf.charCodeAt(i-1) != yusuf.charCodeAt(i)){
        new_list.push(yusuf[i].toUpperCase())
    }
    else{
        new_list.push(yusuf[i])
    }
}
new_list.unshift(String.fromCharCode((new_list[0].charCodeAt()) - 32))
console.log(new_list.join(""))

