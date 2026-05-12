// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // join characters as a string, then force the result into a number
  let number1 = Number(array1.join(''));
  let number2 = Number(array2.join(''));

  // add the numbers
  return number1 + number2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  value = String(value);  // convert value to string
  let valueArray = value.split('');   // convert the string to array of digits
  let reversedValue = valueArray.reverse().join('');  // reverse the array and join the digits back into a string

  return value === reversedValue;  //see if they're the same!
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) { // consider input as boolean. Anything falsy goes to the next statement
    return 'Required field';
  } else if(!Number(input)){ // consider input as Number
    return 'Must be a number besides 0';
  } else{
    return '';
  }
}
