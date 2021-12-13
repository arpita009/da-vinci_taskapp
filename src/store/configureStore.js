import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' 
import thunk from 'redux-thunk'
import taskReducer from '../reducers/taskReducer'

const configureStore= () =>{
    const store= createStore(combineReducers({
        task: taskReducer
    }),composeWithDevTools(applyMiddleware(thunk)))
    return store
}
export default configureStore