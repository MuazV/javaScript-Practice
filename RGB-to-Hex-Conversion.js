// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


//Solution-1
function rgb(r, g, b){
    let red = r >= 0 && r <= 255 ? r.toString(16).toUpperCase().length == 1 ? "0" + r.toString(16).toUpperCase() : r.toString(16).toUpperCase():  r > 255 ? "FF" : "00";
    let green = g >= 0 && g <= 255 ? g.toString(16).toUpperCase().length == 1 ? "0" + g.toString(16).toUpperCase() : g.toString(16).toUpperCase():  g > 255 ? "FF" : "00";
    let blue = b >= 0 && b <= 255 ? b.toString(16).toUpperCase().length == 1 ? "0" + b.toString(16).toUpperCase() : b.toString(16).toUpperCase():  b > 255 ? "FF" : "00";
    return red + green + blue;
}
console.log(rgb(87,9,34))


//Solution -2
function rgb(r, g, b){
    function toHex(a) { 
      if (a <= 0) return '00';
      else if (a >= 255) return 'FF';
      else return a.toString(16).toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
  }