import { createStore, compose, applyMiddleware } from 'redux';

// middlewares
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers';
import history from '../lib/history';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const connectedReactRouterMiddleware = routerMiddleware(history);

const configureStore = (preloadedState) => {
    let middlewares = [
        loggerMiddleware,
        sagaMiddleware,
        process.env.IS_SERVER ? null : connectedReactRouterMiddleware
    ]
    let middlewareEnhancers = applyMiddleware(...middlewares);

    let enhancers = [middlewareEnhancers];
    let composedEnhancers = compose(...enhancers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancers
    )

    sagaMiddleware.run(rootSaga);

    store.asyncReducers = {};

    return store;
}

export default configureStore;