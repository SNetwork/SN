import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged, loginUser } from '../actions';
import firebase from 'firebase';
import { LoginButton, LoginCard, LoginSection, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
/***** Create component *****/
class Search extends Component {
 

  render() {
    return (
      <View>
        <LoginSection>
        <Input
          placeholder="Search ...."
          placeholderTextColor="#fc628e"
          />   
          </LoginSection>
     </View>
    );
  }
}

/***** Export component so it is available elsewhere *****/
export default Search;