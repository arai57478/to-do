import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todosection"

export const store = configureStore({
  reducer:{
    todo:todoReducer
  },
});
