import types from '../constants/actionTypes.js';
import utils from '../../shared/utils.js';

function replaceUserInfo(userinfo) {
	return {
		type: types.REPLACE_USER_INFO,
		userinfo
	}
}

function fetchUserInfo() {
	return dispatch => {
		utils.ajax({
			url: '/api/user/userinfo',
			type: 'get'
		}).then(res => {
			dispatch(replaceUserInfo(res));
		});
	}
}

export default {
	replaceUserInfo,
	fetchUserInfo
}
