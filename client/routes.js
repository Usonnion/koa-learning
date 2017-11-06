export default routes = [
	{
		path: '/',
		component: Root,
		loadData: () => getSomeData()
	}
]

function getSomeData() {
	return {
		key: 1234
	}
}
