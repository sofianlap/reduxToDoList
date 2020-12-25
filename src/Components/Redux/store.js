import {createStore} from 'redux'
import allReducer from './reducers'


const devTools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store =createStore(allReducer,devTools)


export default store