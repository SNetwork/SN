import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View
 } from 'react-native';
 import { connect } from 'react-redux';
 import { Actions } from 'react-native-router-flux';
import { Button, LoginSection,CardSection,Card,Confirm } from './common';
import { eventDelete } from '../actions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class JoinedItem extends Component {
  state = { showModal: false };

  onAccept() {
    const { uid } = this.props.joinedevent;
    this.props.eventDelete({ uid });
  }

 onDecline() {
      this.setState({ showModal:false });
  }
    render() {

        const { name , date, location , tag , description } = this.props.joinedevent;

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
                <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                 UnJoin  
                 </Button>
            </LoginSection>
            <Confirm 
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                     UnJoin Event? 
                </Confirm>
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
const mapStateToProps = (state) => {
  const { name , date, location , tag , description } = state.eventForm;

  return { name , date, location , tag , description };
};

export default connect(
  mapStateToProps,
   { 
      eventDelete
  })
  (JoinedItem);


