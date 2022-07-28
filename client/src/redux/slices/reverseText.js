import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const reverseTextSlice = createSlice({
  name: 'reverseText',
  initialState: {
    reversedStrings: [],
    warning: false,
  },
  reducers: {
    AddReversedString: (state, action) => {
      state.reversedStrings.unshift(action.payload)
    },
    ClearReversedStrings: state => {
      state.reversedStrings = []
    },
    SetWarning: (state, action) => {
      state.warning = action.payload
    },
  },
})

export default reverseTextSlice.reducer

export const { AddReversedString, ClearReversedStrings, SetWarning } = reverseTextSlice.actions

export const getReversedString = payload => async dispatch => {
  try {
    const reversedText = await axios.get(
      `https://cw-test-backend.herokuapp.com/reverseText?text=${payload}`
    )
    console.log(reversedText.data)
    dispatch(AddReversedString(reversedText.data))
  } catch (error) {
    console.log(error.response.data)
    if (error.response.data.error === 'no text') {
      dispatch(SetWarning(true))
    }
  }
}

export const clearReversedStrings = () => dispatch => {
  dispatch(ClearReversedStrings())
}

export const closeWarning = () => dispatch => {
  dispatch(SetWarning(false))
}
