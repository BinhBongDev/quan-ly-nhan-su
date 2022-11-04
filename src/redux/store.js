import { configureStore } from '@reduxjs/toolkit'

import  staffsSlice  from '../pages/Staffs/staffsSlice'

const store = configureStore({
  reducer: {
    staffs: staffsSlice.reducer
  },
})

export default store