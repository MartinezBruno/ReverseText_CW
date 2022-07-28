import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeWarning } from '../../redux/slices/reverseText'

const Warning = () => {
  const dispatch = useDispatch()
  const { warning } = useSelector(state => state.reverseText)
  const handleClose = () => {
    dispatch(closeWarning())
  }
  return (
    <>
      {warning ? (
        <div className='tab-content'>
          <div
            className='alert alert-warning alert-dismissible fade show d-flex align-items-center justify-content-center '
            role='alert'>
            <strong>Warning! Text cannot contain only numbers</strong> {warning}
            <button
              onClick={handleClose}
              type='button'
              className='close btn btn-outline-warning mx-2'
              data-dismiss='alert'
              aria-label='Close'>
              <span aria-hidden='true'>X</span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Warning
