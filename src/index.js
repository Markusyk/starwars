import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './index.css';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import StarWarsPageWrapper from "./containers/StarWarsPageWrapper";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./saga/root.saga";
import {basePathForRouting} from "./constants/routing.constants";


const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);


const store = createStore(rootReducer,
    storeEnhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router basename={basePathForRouting}>
                    <StarWarsPageWrapper/>
        </Router>
    </Provider>,
    document.getElementById('root'));
