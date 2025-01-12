import { configureStore } from '@reduxjs/toolkit'
import appSlice from './features/app/appSlice'
import articleSlice from './features/articles/articleSlice'
import authSlice from './features/auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    articles: articleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload'],
        // Ignore these paths in the state
        // ignoredPaths: ['items.dates'],
      },
    }),
})

export default store
