import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';
import reducers from "./reducers";

//Components
import Routes from './components/routes'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

if (document.getElementById('app')) {
    ReactDOM.render((
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Routes/>
        </Provider>
    ),document.getElementById('app'));
}

