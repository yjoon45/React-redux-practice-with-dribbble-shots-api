import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as reducers from './reducers';
reducers.router = routerReducer;

import App from './containers/App';
import SingleShot from './containers/SingleShot';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(reducers), applyMiddleware(thunk, middleware));

const init = () => {
  render(<Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/shots" component={App} />
        <Route exact path="/shots/:id" component={SingleShot} />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('container'));
};

init();
store.subscribe(init);
