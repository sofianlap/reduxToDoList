import {TODO_ADDED,TODO_REMOVED,TODO_COMPLETED, TODO_SAVED, TODO_DONE_FILTRED,TODO_NOTDONE_FILTRED, TODOS_RESET} from '../constants'
import { addAction,completedAction,saveAction} from '../actions'





const todos=[
        {
            id:1,
            description:"tache 1",
            date :"2020-12-1",
            isCompleted:false,
            importance:"Huge"
        },
        {
            id:2,
            description:"tache 2",
            date :"2020-12-1",
            isCompleted:false,
            importance:""
        },
        {
            id:3,
            description:"tache 3",
            date :"2020-12-1",
            isCompleted:false,
            importance:""
        }
]

export const mgntTodosReducer = (state=todos,action)=>{
    switch(action.type){
        case TODO_ADDED:
        return [...state,{
            id:state.length+1,
            description:action.payload,
            date:new Date().getFullYear()+"-"+ new Date().getMonth()+"-"+ new Date().getDate(),
            isCompleted:false,
            importance:""
        }];
        case TODO_REMOVED:
            return state.filter((el,i)=>el.id!==action.payload);
        case TODO_COMPLETED:
            return state.map((el,i)=> el.id===action.payload? {...el,isCompleted:!el.isCompleted}:{...el})
        case TODO_SAVED:
            return state.map((el,i)=>el.id===action.payload.id? action.payload.newValue:{...el});
        case TODO_DONE_FILTRED:
            return state.filter((el,i)=> el.isCompleted)
        case TODO_NOTDONE_FILTRED:
            return state.filter((el,i)=> !el.isCompleted)
        case TODOS_RESET:
            return todos
        default:
        return state;
    }
}