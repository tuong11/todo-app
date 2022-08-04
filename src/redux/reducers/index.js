import { combineReducers } from 'redux'
import filtersReducer from './filtersSlice';
import todoListReducer from './todoListSlice';

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});

export default rootReducer;