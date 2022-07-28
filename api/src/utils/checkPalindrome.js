/**
 * It takes two strings, converts them to lowercase, and then compares them
 * @returns true or false
 */
const checkPalindrome = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase()
}

module.exports = checkPalindrome
