// 5.  Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let lowerCaseStr = str.toLowerCase();
  let strArr = lowerCaseStr.split(" ");

  let capitalisedArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let item = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    capitalisedArr.push(item);
  }

  let capitalisedStr = capitalisedArr.join(" ");
  return capitalisedStr;
}

console.log(titleCase("I'm a little tea pot"));
