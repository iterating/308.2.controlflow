function numberCheck(num) {
  if (num > 100) {
    console.log("number is greater than 100");
  } else if (num == 100) {
    console.log("number is 100");
  } else if (num <= 100) {
    console.log("number is not greater than 100");
    if (num > 0) {
      console.log("number is positive and less than 100");
    } else if (num == 0) {
      console.log("number is zero");
    } else {
      console.log("number is less than zero");
    }
  }
}
// Testing the function with different values
numberCheck(120);
console.log("__");
numberCheck(100);
console.log("__");
numberCheck(50);
console.log("__");
numberCheck(0);
console.log("__");
numberCheck(-1);
