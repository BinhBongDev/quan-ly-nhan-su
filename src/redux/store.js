import { configureStore } from '@reduxjs/toolkit'

import  staffsSlice  from '../pages/Staffs/staffsSlice'
import deptSlice from '../pages/Department/deptSlice'
import salarySlice from '../pages/Salary/salarySlice'

const store = configureStore({
  reducer: {
    staffs: staffsSlice.reducer,
    depts: deptSlice.reducer,
    salary: salarySlice.reducer
  },
})

export default store