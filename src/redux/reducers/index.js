import { userReducer } from './user'
import { adminGetAllCustomers } from '../../admin/redux/actions'
import {combineReducers} from 'redux'


const allReducers = combineReducers({
    user: userReducer,
    admin: adminGetAllCustomers
})
export default allReducers