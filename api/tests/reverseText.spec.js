const request = require('supertest')
const { expect } = require('chai')
const { server: app } = require('../src/app')

// help function to test the reverseText endpoint
const { backwardsText } = require('../src/app')

describe('Reverse Text', () => {
  it('should get 200', () => {
    return request(app).get('/reverseText').query({ text: 'hello' }).expect(200)
  })
  it('should return the reversed text', async () => {
    const text = 'hello'

    const res = await request(app).get(`/reverseText?text=${text}`).expect(200)
    expect(res.body.text).to.equal(backwardsText(text))
  })
  it('should return 400 when no text is provided', () => {
    return request(app)
      .get('/reverseText')
      .expect(400)
      .then(res => {
        expect(res.body.error).to.equal('no text')
      })
  })
  it('should return 200 when text is not a string', () => {
    const text = 'Hello World!1!1'
    return request(app)
      .get(`/reverseText?text=${text}`)
      .expect(200)
      .then(res => {
        expect(res.body.text).to.equal(backwardsText(text))
      })
  })
  it('should return 200 when text is a palindrome', () => {
    const text = 'racecar'
    return request(app)
      .get(`/reverseText?text=${text}`)
      .expect(200)
      .then(res => {
        expect(res.body.text).to.equal(backwardsText(text))
        expect(res.body.palindrome).to.equal(true)
      })
  })
})
