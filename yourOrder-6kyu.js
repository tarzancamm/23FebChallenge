// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const order = (str) => {
  let arr = str.split(" ");
  let sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k].indexOf(i) >= 0) {
        sortedArr.push(arr[k]);
      }
    }
  }

  return sortedArr.join(" ");
};

console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"
