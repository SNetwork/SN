import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View
 } from 'react-native';
 import { connect } from 'react-redux';
 import { Actions } from 'react-native-router-flux';
import { FeedButton, LoginSection,CardSection,Card,Confirm } from './common';
import { goToChat } from '../actions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class JoinedItem extends Component {
  state = { showModal: false };

  onAccept() {
    const { uid } = this.props.joinedevent;
    this.props.goToChat({ uid });
  }

 onDecline() {
      this.setState({ showModal:false });
  }
    render() {

        const { name , date, location , tag , description } = this.props.joinedevent;

        return(
      <Card>
                      <View style={styles.container}>
                          <View style={styles.header}>
                              <View style={styles.subsection1}>
                                  <View style={styles.photo}>
                                  </View>
                                  
                                  <View style={styles.mainInfo}>
                                      <View style={styles.name}>
                                          <Text style={styles.nameStyle}>
                                               {name}
                                          </Text>
                                      </View>
                                      
                                      <View style={styles.LocDate}>
                                          <View style={styles.location}>
                                              <Text>
                                                  {location}
                                              </Text>
                                          </View>
                                          
                                          <View style={styles.date}>
                                              <Text>
                                                  {date}
                                              </Text>
                                          </View>
                                      </View>
                                  </View>
                              </View>
                              
                              <Text style={styles.description}>
                                  {description}
                              </Text>
                          </View>
                          
                          <View style={styles.image}>
                          </View>
                          
                          <View style={styles.footer}>
                              <FeedButton onPress={() => this.setState({ showModal: !this.state.showModal })}>Chat</FeedButton>
                          </View>
                      </View>
            <Confirm 
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                     Chat 
                </Confirm>
                  </Card>
        );
    }
}

const styles ={
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    header: {
      padding: 10,
    },
    subsection1: {
      flexDirection: 'row',
    },
    photo: {
      height: 50,
      width: 50,
      backgroundColor: 'lightblue',
      borderRadius: 25,
    },
    mainInfo: {
      paddingLeft: 10,
    },
    name: {
      
    },
    nameStyle: {
      fontSize: 20,
      color: '#2699fb',
    },
    LocDate: {
      flexDirection: 'row',
    },
    location: {
      marginRight: '7%',
    },
    date: {
      
    },
    description: {
      color: '#000',
      marginTop: '3%',
    },
    image: {
      height: 200,
      flex: 1,
      backgroundColor: 'lightblue',
    },
    footer: {
      
    },
};
const mapStateToProps = (state) => {
  const { name , date, location , tag , description } = state.eventForm;

  return { name , date, location , tag , description };
};

export default connect(
  mapStateToProps,
   { 
    goToChat
  })
  (JoinedItem);