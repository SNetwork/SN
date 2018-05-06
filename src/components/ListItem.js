import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
import { Button, LoginSection,CardSection,Card } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swipeable from 'react-native-swipeable';

class ListItem extends Component {
    state = {
        rightActionActivated: false,
        toggle: false
      };

      
    onButtonPress() {
        Actions.eventEdit({ event: this.props.event });
    }
    render() {
        const {rightActionActivated, toggle} = this.state;

        const { name , date, location , tag , description } = this.props.event;

        return(
            <Swipeable
        rightActionActivationDistance={100}
        rightContent={(
          <View style={[styles.rightSwipeItem, {backgroundColor: rightActionActivated ? 'green' : 'steelblue'}]}>
            {rightActionActivated ?
              <Text>Joined!</Text>
                 :
              <Text>keep pulling!</Text>}
          </View>
        )}
        onRightActionActivate={() => this.setState({rightActionActivated: true})}
        onRightActionDeactivate={() => this.setState({rightActionActivated: false})}
        onRightActionComplete={() => this.setState({toggle: !toggle})}
        onRightActionRelease={() => eventJoin(this.props.event )}
      >
      <Card>
            <LoginSection>
              <EvilIcons name='user' color='#000' size={36} />
              <Text style={styles.nameStyle}>
                 {name}
              </Text>
              <Text style={styles.titleStyle}>
                date: {date}
              </Text>
              <Text style={styles.titleStyle}>
                location: {location}
              </Text>
            </LoginSection>
            <CardSection>
              <Text style={styles.titleStyle}>
                 tag: {tag}
              </Text>
              <Text style={styles.titleStyle}>
                 Description: {description}
              </Text>
            </CardSection>
            <LoginSection>
            <Button onPress={eventJoin(this.props.event )}> Join </Button>
            </LoginSection>
            </Card>
      </Swipeable>
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
        fontSize: 18,
        paddingLeft: 15,
        paddingRight:50,
    },
    titleStyle: {
        fontSize: 14,
        paddingLeft: 15
    }
};

export default ListItem;


