const checkPalindrome = require('../utils/checkPalindrome')

const getReverseText = (req, res) => {
  const { text } = req.query
  if (text !== undefined && isNaN(text)) {
    /**
     * Take a string, split it into an array of characters, reverse the array, and join the array back into
     * a string.
     */
    const backwardsText = text => text.split('').reverse().join('')
    const reversedText = backwardsText(text)
    const isPalindrome = checkPalindrome(text, reversedText)

    return isPalindrome
      ? res.send({ text: reversedText, palindrome: true })
      : res.send({ text: reversedText, palindrome: false })
  }
  return res.status(400).send({ error: 'no text' })
}

module.exports = getReverseText
