import {combineReducers} from 'redux'
import userReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminReducer'


export default combineReducers({
    users:userReducer,
    auth:authReducer,
    admins: adminsReducer
});
