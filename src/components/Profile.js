import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { userFetch } from '../actions';
import { Card, LoginSection, Input, Button, Background } from './common';
import ProfileItem from './ProfileItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class Profile extends Component {
    componentWillMount() {
        this.props.userFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component 
        // will be rendered with 
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ usersInfo }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(usersInfo);
    }

    renderRow(userInfo) {
        return (
            <ProfileItem userInfo={userInfo} />
        );
    }

    render() {
        return (
            <Background>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Background>
        );
    }
}

const mapStateToProps = (state) => {
    const usersInfo = _.map(state.usersInfo, (val, uid) => {
        return { ...val, uid };
    });
    return { usersInfo };
};

export default connect(mapStateToProps, { userFetch })(Profile);