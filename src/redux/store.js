import { configureStore } from '@reduxjs/toolkit'

import  staffsSlice  from '../pages/Staffs/staffsSlice'
import deptSlice from '../pages/Department/deptSlice'

const store = configureStore({
  reducer: {
    staffs: staffsSlice.reducer,
    depts: deptSlice.reducer
  },
})

export default store