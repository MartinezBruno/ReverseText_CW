const express = require('express')

const server = express()
server.use(express.json())

/**
 * Take a string, split it into an array of characters, reverse the array, and join the array back into
 * a string.
 */
const backwardsText = text => text.split('').reverse().join('')

/**
 * It takes two strings, converts them to lowercase, and then compares them
 * @returns true or false
 */
const checkPalindrome = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase()
}

server.get('/reverseText', (req, res) => {
  const { text } = req.query

  if (text !== undefined) {
    const reversedText = backwardsText(text)
    const isPalindrome = checkPalindrome(text, reversedText)

    return isPalindrome
      ? res.send({ text: backwardsText(text), palindrome: true })
      : res.send({ text: backwardsText(text) })
  }
  return res.status(400).send({ error: 'no text' })
})

module.exports = { server, backwardsText }
