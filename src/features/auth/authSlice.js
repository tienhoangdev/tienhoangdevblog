import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { AUTH_API } from 'src/services'

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
}

export const fetchLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await AUTH_API.logIn(email, password)
    } catch (error) {
      toast.error('Login failed: ' + error?.response?.data?.error || 'Something went wrong')
      return rejectWithValue(error)
    }
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuthenticated = true
      // Add auth token
    },
    logOut: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer
