import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged, loginUser } from '../actions';
import firebase from 'firebase';
import { LoginButton, LoginCard, LoginSection, SearchInput, Spinner, Background } from './common';
import { Actions } from 'react-native-router-flux';
/***** Create component *****/
class Search extends Component {
 

  render() {
    return (
      <Background>
            <View>
                  <SearchInput
                      placeholder="Search...."
                      />   
            </View>
      </Background>
    );
  }
}

/***** Export component so it is available elsewhere *****/
export default Search;