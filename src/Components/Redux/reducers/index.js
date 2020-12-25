

import {mgntTodosReducer} from './todosReducer'
import {combineReducers} from 'redux';





const allReducer = combineReducers({
    todos: mgntTodosReducer
   
    
})

export default allReducer