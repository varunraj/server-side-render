import {combineReducers} from 'redux'
import userReducer from './usersReducer';
import authReducer from './authReducer';


export default combineReducers({
    users:userReducer,
    auth:authReducer
});
