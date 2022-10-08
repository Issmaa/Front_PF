import { userReducer } from './user'
import { adminReducer } from '../reducers/admin';
import {combineReducers} from 'redux'


const allReducers = combineReducers({
    user: userReducer,
    admin: adminReducer
})
export default allReducers