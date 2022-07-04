/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
const combinedComponent=()=>{
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => combinedComponent);
