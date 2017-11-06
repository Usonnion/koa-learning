import types from '../constants/actionTypes.js';

function userinfo(state = {name: '123'}, action) {
	switch (action.type) {
		case types.REPLACE_USER_INFO:
			return action.userinfo;
		default:
			return state;
	}
}

export default userinfo;
