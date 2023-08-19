// DESCRIPTION:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

let mirana = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
function findNeedle(haystack) {
    counter = 0;
    for(let i = 0; i < haystack.length; i++){
      if( haystack[i] === "needle"){
          break
      }
      else {
          counter += 1
      }
  }
  return `found the needle at position ${counter}`
  }

// ## Solution-2 ##
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }