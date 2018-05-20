//Компонент поста
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, LoginSection, CardSection, Card, FeedButton } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swipeable from 'react-native-swipeable';

class ListItem extends Component {
    state = {
        rightActionActivated: false,
        toggle: false
    };

    onButtonPress() {
        Actions.Detailed({ event: this.props.event });
    }

    render() {
        const { rightActionActivated, toggle } = this.state;

        const { name, date, location, tag, description } = this.props.event;

        return (
            <Card>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.subsection1}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.photo}>
                                    <Image
                                        style={{
                                            height: null,
                                            width: null,
                                            flex: 1,
                                            borderRadius: 25,
                                        }}
                                        source={{
                                            uri: 'https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-1/c120.0.720.720/11067469_10153348248977429_3631293933715085157_n.jpg?_nc_cat=0&oh=dbcca123d980ecc2571374fcbd534956&oe=5B888BCC'
                                        }}
                                    />
                                </View>

                                <View style={styles.mainInfo}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameStyle}>
                                            {name}
                                        </Text>
                                    </View>

                                    <View style={styles.LocDate}>
                                        <View style={styles.date}>
                                            <Text>
                                                {date}
                                            </Text>
                                        </View>

                                        <View style={styles.location}>
                                            <Text>
                                                {location}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{alignItems: 'flex-end', justifyContent: 'center',}}>
                                <View style={styles.details}>
                                    <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                                        <EvilIcons name='arrow-right' color='#2699fb' size={40} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </View>

                    <View style={styles.image}>
                        <Image
                            style={{
                                height: 200,
                                width: null,
                                flex: 1,
                            }}
                            source={{
                                uri: 'https://water-links.s3.amazonaws.com/water-links-files/homepage-banner-cupped-hands.jpg'
                            }}
                        />
                    </View>

                    <View style={styles.footer}>
                        <FeedButton onPress={eventJoin(this.props.event)}> Join </FeedButton>
                    </View>
                </View>
            </Card>
        );
    }
}


const styles = {
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
    },
    mainInfo: {
        paddingLeft: 10,
    },
    details: {
        paddingRight: 10,
    },
    name: {
        flex: 1,
    },
    nameStyle: {
        fontSize: 20,
        color: '#2699fb',
    },
    LocDate: {
        flexDirection: 'row',
    },
    location: {
    },
    date: {
        marginRight: '7%',
    },
    description: {
        color: '#454545',
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

export default ListItem;


