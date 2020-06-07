import {applyMiddleware, createStore} from "redux";
import reducer from '../Reducer/Reducer'
import thunk from 'redux-thunk'


const Store = createStore(reducer,applyMiddleware(thunk))
export default Store

