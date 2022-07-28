import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearReversedStrings, getReversedString } from '../../redux/slices/reverseText'

const NavBar = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(getReversedString(e.target[0].value))
    e.target[0].value = ''
  }
  const handleClear = () => {
    dispatch(clearReversedStrings())
  }

  return (
    <nav className='navbar bg-danger w-100'>
      <form className='container-fluid justify-content-center col-6' onSubmit={handleSubmit}>
        <div className='input-group'>
          <input type='text' className='form-control rounded' placeholder='Insert text' />
          <button type='submit' className='ms-3 btn btn-success btn-sm rounded'>
            Reverse it!
          </button>
          <button onClick={handleClear} className='btn btn-warning btn-sm rounded'>
            Delete list
          </button>
        </div>
      </form>
    </nav>
  )
}

export default NavBar
