import React, { Component } from 'react';
import { Text,View, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged, signupUser } from '../actions';
import firebase from 'firebase';
import { LoginButton, LoginCard, LoginSection, LoginInput, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
/***** Create component *****/
class SignUpForm extends Component {
  onEmailChange(text){
   this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
   }
   onButtonPress(){
    const { email, password} = this.props;
    this.props.signupUser({email, password });
   }
  
   renderButton() {
     if (this.props.loading){
       return <Spinner size="large" />;
     }

     return (
       <LoginButton onPress={this.onButtonPress.bind(this)}> Next </LoginButton>
     );
   }

  render() {
    return (
      <ImageBackground source={require('../../img/back.jpg')} style={styles.back}>
        <LoginCard>
           <LoginSection>
           <Text style={styles.textStyle}> Sign Up </Text>
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
                onChangeText={this.onPasswordChange.bind(this)}/>
            </View>
          </LoginSection>
  
          <LoginSection>
           {this.renderButton()}
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
    color: 'red'
  },
  textStyle:{
    flex:1,
    fontSize: 50,//32,
    alignSelf: 'center',
    color: '#000000',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Brush Script MT',
  },
  back: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
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
  emailChanged, passwordChanged, signupUser})(SignUpForm);