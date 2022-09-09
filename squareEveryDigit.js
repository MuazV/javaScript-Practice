// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer



function squareDigits(num){
    let memo = num.toString()
    let empty_dict= []
    for(let i=0; i<memo.length; i++) {
      empty_dict.push(Math.pow(memo[i],2))
  }
  
  return  parseInt(empty_dict.join(""))
  }

  console.log(squareDigits(1881))