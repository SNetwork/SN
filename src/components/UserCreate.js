import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userUpdate, userCreate } from '../actions';
import { LoginButton,Card, LoginSection, Button } from './common';
import UserForm from './UserForm';
import { Actions } from 'react-native-router-flux';

class UserCreate extends Component {

    onButtonPress(){
     const { name , surname, age, location, hobby } = this.props;

     this.props.userCreate({ name , surname, age, location, hobby });

     Actions.Feed();
    }


    render() {
        return(
         <Card>
             <UserForm {...this.props}/>
             <LoginSection>
                 <LoginButton onPress={this.onButtonPress.bind(this)}>
                      Create 
                 </LoginButton>
             </LoginSection>
         </Card>
        );
    }
}

const mapStateToProps = (state) => {
  const { name , surname, age, location, hobby } = state.userForm;

  return { name , surname, age, location, hobby };
};


export default connect(mapStateToProps,
     { userUpdate,
         userCreate 
        })(UserCreate);