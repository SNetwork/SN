import React, { Component } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { eventUpdate } from '../actions';
import { LoginSection, Input } from './common';


class EventForm extends Component {
    render() {
        return (
      <View>
          <LoginSection>
             <Input 
              label="Name"
              placeholder="Event name"
              value={this.props.name}
              onChangeText={value => this.props.eventUpdate({ prop: 'name', value })}
              />
             </LoginSection>

             <LoginSection>
             <Input 
              label="Date"
              placeholder="24.06.2018"
              keyboardType='numeric'
              value={this.props.date}
              onChangeText={value => this.props.eventUpdate({ prop: 'date', value })}
              /> 
             </LoginSection>
            
             <LoginSection>
             <Input 
              label="Location"
              placeholder="Lviv"
              value={this.props.location}
              onChangeText={value => this.props.eventUpdate({ prop: 'location', value })}
              /> 
             </LoginSection>

             <LoginSection>
             <Input 
              label="Tag"
              placeholder="#football"
              value={this.props.tag}
              onChangeText={value => this.props.eventUpdate({ prop: 'tag', value })}
              /> 
             </LoginSection>

             <LoginSection>
             <TextInput 
              label="Description"
              placeholder="....."
              value={this.props.description}
              onChangeText={value => this.props.eventUpdate({ prop: 'description', value })}
              multiline = {true}
              autoCorrect = {true}
              /> 
             </LoginSection>
      </View>
        );
    }
}

const styles ={
    pickerTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 15
    }
};

const mapStateToProps = (state) => {
    const { name , date, location , tag , description } = state.eventForm;
  
    return { name , date, location , tag , description };
  };
  

export default connect(mapStateToProps, { eventUpdate })(EventForm);
