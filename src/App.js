import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import LibraryList from './components/LibraryList';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDrrR6swq-f8P8tHZUz66vfrQfzzWsJfUo",
      authDomain: "socnet-3d3e1.firebaseapp.com",
      databaseURL: "https://socnet-3d3e1.firebaseio.com",
      projectId: "socnet-3d3e1",
      storageBucket: "socnet-3d3e1.appspot.com",
      messagingSenderId: "544028663825"
      };
      firebase.initializeApp(config);
    }
    render(){
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
  return (
    <Provider store={store}>
        <Router />
    </Provider>
    );
  }
}

/***** Export component so can be used elsewhere *****/
export default App;