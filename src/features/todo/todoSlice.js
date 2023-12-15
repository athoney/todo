import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        toggleComplete: (state, action) => {
            const index = state.todoList.findIndex(todo => todo.id == action.payload);
            state.todoList[index].completed = !state.todoList[index].completed;
            console.log("toggle complete")
            console.log(state.todoList[index].completed);
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id != action.payload);
        },
        deleteAll: (state) => {
            state.todoList = [];
        }
    }
});

export const {addTodo, toggleComplete, deleteTodo, deleteAll} = todoSlice.actions;
export const selectTodoList = state => state.todo.todoList;

export default todoSlice.reducer;