/* eslint-disable no-shadow */
// check if the odo matches any of the cases in the function and return a 2
// if not, check if we are fewer than 2 clicks away from one and return a 1
// otherwise, return a 0
// odo must be greater than 99

function isInteresting(number, awesomePhrases = []) {
  function findMatch(number) {
    return checkOver99(number)
      ? checkOnTheNose(number) ||
          checkAllSame(number) ||
          checkSequential(number) ||
          checkPalindrome(number) ||
          checkAwesome(number)
      : false;
  }

  function findClose(number) {
    const within = [number + 1, number + 2];
    for (const see of within) {
      if (findMatch(see)) {
        return true;
      }
    }
    return false;
  }

  function checkOver99(number) {
    return number > 99;
  }

  function checkOnTheNose(number) {
    const strNum = number.toString();
    const regex = /^\d0+$/;
    return regex.test(strNum);
  }

  function checkAllSame(number) {
    const strNum = number.toString();
    const regex = new RegExp(`^${strNum[0]}+$`);
    return regex.test(strNum);
  }

  function checkSequential(number) {
    const strNum = number.toString();
    const patterns = ['1234567890', '9876543210'];
    for (const pattern of patterns) {
      const index = pattern.indexOf(strNum[0]);
      const sample = pattern.slice(index, index + strNum.length);
      if (sample === strNum) {
        return true;
      }
    }
    return false;
  }

  function checkPalindrome(number) {
    const strNum = number.toString();
    for (let i = 0; i <= Math.trunc(strNum.length / 2 - 1); i++) {
      if (strNum[i] !== strNum[strNum.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  function checkAwesome(number) {
    return awesomePhrases.includes(number);
  }

  return findMatch(number) ? 2 : findClose(number) ? 1 : 0;
}

module.export = { isInteresting };
// console.log(isInteresting(1335, [1337]));
