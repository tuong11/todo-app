import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './reducers/filtersSlice';
import todoListSlice from './reducers/todoListSlice';


const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    }
})

export default store;