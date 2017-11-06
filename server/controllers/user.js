async function getUserinfo(ctx) {
	ctx.body = {
		name: '1111',
		gender: 'maile',
		age: '35'
	}
}

export default {
	getUserinfo
}
