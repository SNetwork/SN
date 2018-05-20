import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import { userFetch } from '../actions';
import { Background } from './common';
import ProfileItem from './ProfileItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class Message extends Component {
    render() {
        return (
            <Background>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>This is Message Error page</Text>
                </View>
            </Background>
        );
    }
}

const mapStateToProps = (state) => {
    const events = _.map(state.events, (val, uid) => {
        return { ...val, uid };
    });
    return { events };
};

export default connect(mapStateToProps, { userFetch })(Message);