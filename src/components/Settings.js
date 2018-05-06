import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Card, LoginSection, Button, Confirm} from './common';


class Settings extends Component {
    state = { showModal: false };

    onAccept() {
        this.props.logoutUser();
    }

   onDecline() {
        this.setState({ showModal:false });
    }


    render() {
       return(
           <View>
           <LoginSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                 Log Out
                    </Button>
                </LoginSection>
                <Confirm 
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                     Are you sure you want to log out? 
                </Confirm>
           </View>
       );
    }
}

const mapStateToProps = (state) => {
    const events = _.map(state.events, (val, uid) => {
      return { ...val, uid };
  });
    return { events };
  };
  
  export default connect(mapStateToProps, { logoutUser })(Settings);