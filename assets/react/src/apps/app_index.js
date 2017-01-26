
'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory, Route, IndexRoute } from 'react-router';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from '../reducers';

import App from '../components/app';
import AppIndex from '../components/app_index';
import FormIndex from '../components/form_index';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import RequestReset from '../components/auth/request_reset';
import Reset from '../components/auth/reset';

import {Loader} from "../components/loader";

import {AUTH_USER} from '../actions';
import RequireAuth from '../components/auth/require_auth';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

require('../css/style.css');

function main(options){

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(reducers);
  const token = localStorage.getItem('TOKEN');

  if( token ){
    // The user is logged in...
    store.dispatch({ type: AUTH_USER });

    // console.log(store.auth.authenticated);
  }

  // <Route path='/upload' component={RequireAuth(UploadIndex)}/>
  // <Route path="/" component={App} >
  //   <IndexRoute component={RequireAuth(FormIndex)}/>
  // </Route>
  // <Route path="/" component={App} >
  // <Route path='/app' component={RequireAuth(FormIndex)}/>
  const BASE_URL = options.baseurl;
    // <Router history={browserHistory}>

  render(
    <MuiThemeProvider>

    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={RequireAuth(FormIndex)}/>
        </Route>
          <Route path='/template'  component={RequireAuth(FormIndex)}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signout' component={Signout}/>
          <Route path='/request' component={RequestReset}/>
          <Route path='/reset' component={Reset}/>
          <Route path='/loader' component={Loader}/>
      </Router>
    </Provider>
      </MuiThemeProvider>,
    document.getElementById(options.app)
  );


}

export default main
