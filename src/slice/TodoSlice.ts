import { createSlice,PayloadAction } from "@reduxjs/toolkit/react";

interface todoListType {
    storagetList :string[]
}
const initialState:todoListType = {
    storagetList : []
}

const todolistSlice = createSlice({
    name:"todolist",
    initialState,
    reducers: {
        AddTodoList : (state, action:PayloadAction<string[]>) => {
            state.storagetList = action.payload;
            state.storagetList = [...state.storagetList].reverse();
        },
        DeleteTodoList: (state,action:PayloadAction<number>) => {
            state.storagetList.splice(action.payload,1)
        },
        updateTodoList: (state, action: PayloadAction<{ index: number; updatedTodo: string }>) => {
            const { index, updatedTodo } = action.payload;
            state.storagetList[index] = updatedTodo;
          },
    }
})

export const {AddTodoList,DeleteTodoList,updateTodoList} = todolistSlice.actions
export default  todolistSlice.reducer