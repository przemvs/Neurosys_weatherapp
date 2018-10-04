import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'

import {createBrowserHistory} from 'history'
import {connectRouter, routerMiddleware} from 'connected-react-router'

import rootReducer from './reducers'

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk, routerMiddleware(history)))
)

export {store, history}
