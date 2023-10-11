import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';

const store = configureStore({
  reducer: {
    list: calculatorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
