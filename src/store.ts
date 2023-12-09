import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slice/TodoSlice';
import inputUser from './slice/InputSlice'
export const store = configureStore({
    reducer:{
        todoList:todoListReducer,
        user:inputUser
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch