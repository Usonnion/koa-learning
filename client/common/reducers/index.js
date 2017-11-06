import { combineReducers } from 'redux';
import userinfo from './userInfo.js';

const rootReducer = combineReducers(
	{
		userinfo
	}
)

export default rootReducer;
