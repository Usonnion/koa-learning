import request from 'superagent';

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */

function ajax(options) {
	const defaultOptions = {
		url: null,
		type: 'post',
		data: {}
	}

	let promise, action;

	options = Object.assign({}, defaultOptions, options);
	promise = request[options.type](options.url).withCredentials();
	Object.keys(options).forEach(key => {
		if (!key.match(/url|type|data/)) {
			promise.set(key, options[key]);
		}
	});

	action = options.type === 'get' ? 'query' : 'send';

	return new Promise(resolve => {
		promise[action](options.data).then(res => {
			resolve(res.body);
		}).catch(err => {
			console.log(err);
		});
	});
}

function getUrlParam() {
	const search = loaciton.search.slice(1),
		rParam = /([^&]*)=([^&]*)/g;
	let ret = {},
		param;

	while (param = rParam.exec(search)) {
		ret[param[1]] = param[2]
	}

	return ret;
}

export default {
	ajax,
	getUrlParam
}
