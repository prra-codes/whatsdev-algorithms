// 7. Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let lastPartOfWord = str.substring(str.length - target.length);

  if (lastPartOfWord === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "son"));
