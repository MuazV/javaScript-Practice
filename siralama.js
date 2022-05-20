// Write a Python/JavaScript code to sort the list/array below without using .sort() method.
// elements of list = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
// Expected output:
// [2, 11, 12, 45, 77, 99, 333, 999, 8982]



let list = [999, 333, 2, 8982, 12, 45, 77, 99, 11]

const sayac = list.length;

let empty_list = []

for (let i = 0; i<sayac; i++){
    empty_list.push(Math.min(...list))
    list.splice(list.indexOf(Math.min(...list)),1) 
}

console.log(empty_list);



