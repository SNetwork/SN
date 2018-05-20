import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Card, LoginSection, Button, Confirm, Background } from './common';
import { Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import DatePicker from 'react-native-datepicker'

class Settings extends Component {
  state = { showModal: false };
  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }
  }

  render() {
    return (
      <Background>

        <DatePicker
          style={{ width: 200,}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => { this.setState({ date: date }) }}
        />

        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              console.log('Image base64 string: ', avatar)
            }
          }}
        >
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode='cover'
            source={{
              uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
            }}
          />
        </PhotoUpload>
      </Background>
    );
  }

}
export default Settings;