import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
import { Button,CardSection,LoginSection,Card } from './common';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

class ProfileItem extends Component {

  onButtonPress1() {
    Actions.userEdit({ userInfo: this.props.userInfo });
}

onButtonPress2() {
  Actions.Settings();
}
onButtonPress3() {
  Actions.Joined();
}
onButtonPress4() {
  Actions.Created();
}

    render() {

        const { name , surname, age, location, hobby } = this.props.userInfo;

        return(
      <Card>
         <CardSection>
              <EvilIcons name='user' color='#000' size={170}/>
              </CardSection>
              <Button onPress={this.onButtonPress1.bind(this)}>
              Edit
              </Button>
              <Button onPress={this.onButtonPress2.bind(this)}>
              Settings
              </Button>
              <LoginSection>
              <Text style={styles.nameStyle}>
                 {name}
              </Text>
              <Text style={styles.nameStyle}>
                {surname}
              </Text>
  
              </LoginSection>
              <LoginSection>
              <Text style={styles.titleStyle}>
                age: {age}
              </Text>
              <Text style={styles.titleStyle}>
              city: {location}
              </Text>
              <Text style={styles.titleStyle}>
                 hobbies: {hobby}
              </Text>
              </LoginSection>
              <Button onPress={this.onButtonPress3.bind(this)}>
              Joined events
              </Button>
              <Button onPress={this.onButtonPress4.bind(this)}>
              Created events
              </Button>
            </Card>
        );
    }
}

const styles ={
    container: {
        flex: 1,
        paddingTop: 20
      },
      listItem: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center'
      },
      leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
      },
      rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
      },    
    nameStyle: {
        fontSize: 32,
        paddingLeft: 15,
        paddingRight:50,
    },
    titleStyle: {
        fontSize: 14,
        paddingLeft: 15
    }
};

export default ProfileItem;


