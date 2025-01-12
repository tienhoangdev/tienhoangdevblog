import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toogleSideBar: (state) => {
      state.sidebarShow = !state.sidebarShow
    },
    toogleSidebarUnfoldable: (state) => {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
  },
})

export const { toogleSideBar, toogleSidebarUnfoldable } = appSlice.actions
export default appSlice.reducer
