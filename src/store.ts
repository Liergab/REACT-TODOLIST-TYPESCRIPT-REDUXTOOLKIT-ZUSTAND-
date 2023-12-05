import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slice/TodoSlice'
export const store = configureStore({
    reducer:{
        todoList:todoListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch