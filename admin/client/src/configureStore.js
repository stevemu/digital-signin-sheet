import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

import rootReducer from './reducers';

const config = {
    key: "1",
    storage
};

const reducer = persistCombineReducers(config, rootReducer);

function configureStore() {
    const middlewares = [
        thunk,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(reducer, composeEnhancers(
        applyMiddleware(...middlewares)
        )
    );

    return {
        persistor: persistStore(store),
        store};

    // return store;
}

export default configureStore;