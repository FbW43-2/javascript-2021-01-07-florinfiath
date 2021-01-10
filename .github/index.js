console.log("1. Palindrome")
// 1. Palindrome
// Write a JavaScript function that checks whether a passed string is palindrome or not ?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


function palindrome(word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len/2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  let flip = end.split('').reverse().join('');
  return (start === flip);

 }

console.log (palindrome ("eye"));
console.log (palindrome ("snow"));

console.log( "2. Alphabetic order")

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

function alphOrder(str){
  return str.split("").sort().join("")
}
console.log(alphOrder("webmaster"));

console.log("3. Reversed number")

// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

function reversed(number) {
    var a = number.toString().split("").reverse().join("");
    return parseInt(a) ;
}
console.log(reversed("12345"))

console.log("4. Longest word")

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function findLongestWord(str){
    var words = str.split(" ");
    var longest = "";
    for (var word of words) {
        if (word.length > longest.length) longest = word;
    }
  return longest;
}
console.log(findLongestWord("Web Development Tutorial"));

console.log("5. Arrays")

// Write a JavaScript program to get an array of elements that appear in both arrays.
// Example input: [1, 2, 3, 4], [1, 4, 6, 8]
// Expected output: [1, 4]

