// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true



// Solution-1

// function validParentheses(parens) {
//     let count = 0;
//     for(let i = 0; i < parens.length && count >= 0; i++){
//         count += (parens[i] == '(') ? 1 : -1; 
//     }
//     return (count == 0)
//   }

//   console.log(validParentheses("()"));


Solution-2

function validParentheses(parens){
    let n = 0;
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
    }
    
    return n == 0;
  }

  console.log(validParentheses("())))))"))
