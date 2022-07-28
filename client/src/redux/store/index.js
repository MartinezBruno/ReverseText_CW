import { configureStore } from '@reduxjs/toolkit'
import reverseText from '../slices/reverseText'

export default configureStore({
  reducer: {
    reverseText,
  },
})
