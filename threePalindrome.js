// 3. Check for Palindromes

// Return true if the given string is palinedrome. Other, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  let reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    return true;
  }

  return false;
}

console.log(palindrome("eye"));
