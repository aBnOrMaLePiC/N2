import { createWrapper } from "next-redux-wrapper"
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
// Import your reducers here
// import yourReducer from './yourReducer';

const makeStore = () => configureStore({
  reducer: {
    // yourReducer
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
export const wrapper = createWrapper<AppStore>(makeStore)

const store = makeStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
