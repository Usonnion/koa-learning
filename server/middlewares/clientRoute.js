import React from 'react';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import App from '../../client/app.js';
import configureStore from '../../client/common/store/configureStore.js';

const store = configureStore({userinfo:{name: '1254'}});

async function clientRoute(ctx, next) {
	const index = ctx.url.indexOf('/api/');
	const isStaticFile = ctx.url.endsWith('.js');
	if (index >= 0 || isStaticFile) {
		await next();
	} else {
		const context = {}
		await ctx.render('index', {
			root: renderToString(<StaticRouter
	      location={ctx.url}
	      context={context}
		    >
			    <Provider store={store}>
			      <App />
			    </Provider>
		    </StaticRouter>),
			state: store.getState()
		});
	}
}

export default clientRoute;
