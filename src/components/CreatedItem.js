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

class CreatedItem extends Component {
      
    onButtonPress() {
        Actions.eventEdit({ createdevent: this.props.createdevent });
    }
    render() {

        const { name , date, location , tag , description } = this.props.createdevent;

        return(
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
                <Button onPress={this.onButtonPress.bind(this)}>
                 Edit  
                 </Button>
            </LoginSection>
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
        fontSize: 18,
        paddingLeft: 15,
        paddingRight:50,
    },
    titleStyle: {
        fontSize: 14,
        paddingLeft: 15
    }
};

export default CreatedItem;


