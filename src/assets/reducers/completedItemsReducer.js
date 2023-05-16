import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
    status: '',
    error: null
}

export const getTodosThunk = createAsyncThunk('todos/getTodosThunk', async function(_, {rejectWithValue}){
    try{
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        if(!todos.ok) {
            throw new Error('Server Error!')
        }
        return todos.json()
    } catch(error) {
        return rejectWithValue(error.message)
    }
})

const completedItemsReducer = createSlice({
    name: 'completedItemsReducer',
    initialState,
    extraReducers: builder => {
        builder.addCase(getTodosThunk.fulfilled, (state, {payload}) => {
            //console.log('---payload', payload)
            state.todo.push(payload)
        })
    }
})
export default completedItemsReducer.reducer