import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './index.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers';
import PageWrapper from "./containers/PageWrapper";
import StarWarsPageWrapper from "./containers/StarWarsPageWrapper";

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <PageWrapper/>
                </Route>
                <Route path="/star-wars">
                    <StarWarsPageWrapper/>
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
