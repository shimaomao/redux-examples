// read more: https://github.com/zalmoxisus/redux-devtools-extension
import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './reducers';
import thunk from 'redux-thunk';

const middlewares = [
  thunk,
];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

export const store = createStore(combineReducers, enhancer);
