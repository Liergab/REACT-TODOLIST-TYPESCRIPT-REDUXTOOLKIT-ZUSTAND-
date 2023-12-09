import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InputTypes {
    username:string[]
}

const initialState : InputTypes = {
    username:[]
}

const InputSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<string[]>) => {
            state.username = action.payload 
        }
    }
})

export const{addUser} = InputSlice.actions;
export default InputSlice.reducer