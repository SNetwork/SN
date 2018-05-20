import React, { Component } from 'react';
import { Text,View, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged, loginUser } from '../actions';
import firebase from 'firebase';
import { LoginButton, LoginCard, LoginSection, LoginInput, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
/***** Create component *****/

class LoginForm extends Component {

  /*componentWillMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        Actions.Feed();
      }
    })
  }*/

  onEmailChange(text){
   this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
   }
   onButtonPress1(){
     const { email, password} = this.props;
    this.props.loginUser({email, password });
   }
   onButtonPress2(){
    Actions.signup();
  }
   renderButton1() {
     if (this.props.loading){
       return <Spinner size="large" />;
     }

     return (
       <LoginButton onPress={this.onButtonPress1.bind(this)}> Sign In  </LoginButton>
     );
   }

   renderButton2() {
    return (
      <LoginButton onPress={this.onButtonPress2.bind(this)}> Sign Up  </LoginButton>
    );
  }

  renderError() {
    if(this.props.error){
      return(
        <View>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      )
    }
  }


  render() {
    return (
      <ImageBackground source={require('../../img/back.jpg')} style={styles.back}>
      <LoginCard>
         <LoginSection>
         <Text style={styles.textStyle}> ChelloVent </Text>
        </LoginSection>
        <LoginSection>
          <View style={styles.border}>
            <EvilIcons name='envelope' color='#fff' size={36} />
            <LoginInput
            placeholder=" email@gmail.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}/>
          </View>
        </LoginSection>

        <LoginSection>
        <View style={styles.border}>
          <EvilIcons name='lock' color='#fff' size={36} />
          <LoginInput
            secureTextEntry={true}
            placeholder=" password"
            placeholderTextColor="#fc628e"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            />
          </View>
            </LoginSection>
           
           {this.renderError()}

        <LoginSection>
         {this.renderButton1()}
        </LoginSection>
        <LoginSection>
         {this.renderButton2()}
        </LoginSection>
      </LoginCard>
      </ImageBackground>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 17,
    alignSelf:'center',
    color: 'red',
  },
  textStyle:{
    flex: 1,
    fontSize: 50,//32,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Brush Script MT',
  },
  back: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
  },
  border: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 3,
  },
};

const mapStateToProps = ({auth}) => {
  const { email, password, error , loading } = auth;

  return { email, password, error , loading };
};
/***** Export component so it is available elsewhere *****/
export default connect(mapStateToProps,{
  emailChanged, passwordChanged, loginUser})(LoginForm);