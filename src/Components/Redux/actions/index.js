import {TODO_ADDED,TODO_REMOVED,TODO_COMPLETED,TODO_SAVED, TODO_DONE_FILTRED, TODO_NOTDONE_FILTRED, TODOS_RESET} from '../constants'




export const removeAction = (id) => {
    return {
       type: TODO_REMOVED,
        payload:id
     }
 }

export const saveAction = (newValue,id) => {
    return {
        type: TODO_SAVED,
        payload:{
            id,
            newValue
        }
    }
}

export const addAction = (inputValue="defaultValue") => {
    return {
        type: TODO_ADDED,
        payload: inputValue
    }
}



export const  completedAction =(id)=>{
    return {
        type:TODO_COMPLETED,
        payload:id
    }
}

export const filterDoneAction=()=>{
    return{
        type:TODO_DONE_FILTRED
    }
}
export const filterNotDoneAction=()=>{
    return{
        type:TODO_NOTDONE_FILTRED
    }
}
export const resetAction=()=>{
    return{
        type:TODOS_RESET
    }
}