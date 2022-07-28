import React from 'react'
import { useSelector } from 'react-redux'

const ReversedText = () => {
  const { reversedStrings } = useSelector(state => state.reverseText)
  console.log(reversedStrings)
  return (
    <div className='d-flex justify-content-center mt-3'>
      <div className='w-75 bg-white p-4 d-flex flex-column align-items-center'>
        <div className='align-self-start'>
          <span className='fw-bold fs-2'>Results:</span>
        </div>
        <ul className='list-group d-flex flex-column w-50 my-3'>
          {reversedStrings?.map((el, index) => (
            <li
              className='list-group-item my-2 border rounded d-flex justify-content-between fs-5'
              key={index}>
              {el.text}
              {el.palindrome ? (
                <span class='badge bg-info ms-2 fst-italic '>Palindrome</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ReversedText
