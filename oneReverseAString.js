// 17/2/22

// 1. Reverse a String

// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
  console.log(str.split("").reverse().join(""));
  return str;
}

console.log(reverseString("hello"));

// Method 2

function reverseStringTwo(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);

    reverseStr = reverseStr + str[i];
  }

  return reverseStr;
}
