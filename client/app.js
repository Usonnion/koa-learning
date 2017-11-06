import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import actions from './common/actions/index.js';
import Home from './container/home/home.js';
import About from './container/about/about.js';

class App extends Component {

	componentWillMount() {
		this.props.actions.fetchUserInfo();
	}

	render() {
		return <div>
		<Link to='/home'><label>home</label></Link>
		<Link to='/about'><label>about</label></Link>
		<Route path={`/home`} component={Home} />
		<Route path={`/about`} component={About} />
		{this.props.userinfo.name}
		</div>;
	}
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
