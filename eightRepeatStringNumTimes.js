// 8. Repeat a String Repeat a String

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  if (num < 0) {
    return "";
  }

  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));
