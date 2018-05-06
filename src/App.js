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
      apiKey: "AIzaSyAHOP6WZaA3D6bqw-wPYJax9FDPo0ZIhUM",
      authDomain: "social-network-d86d8.firebaseapp.com",
      databaseURL: "https://social-network-d86d8.firebaseio.com",
      projectId: "social-network-d86d8",
      storageBucket: "social-network-d86d8.appspot.com",
      messagingSenderId: "344179996750"
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