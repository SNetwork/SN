import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventUpdate, eventCreate } from '../actions';
import { LoginButton,Card, LoginSection, Button, Background } from './common';
import EventForm from './EventForm';

class EventCreate extends Component {

    onButtonPress(){
     const { name , date, location , tag , description } = this.props;

     this.props.eventCreate({ name , date, location , tag , description });
    }


    render() {
        return(
        <Background>
                <Card>
                    <EventForm {...this.props}/>
                    <LoginSection>
                        <LoginButton onPress={this.onButtonPress.bind(this)}>
                             Create 
                        </LoginButton>
                    </LoginSection>
                </Card>
        </Background>
        );
    }
}

const mapStateToProps = (state) => {
  const { name , date, location , tag , description } = state.eventForm;

  return { name , date, location , tag , description };
};


export default connect(mapStateToProps,
     { eventUpdate,
         eventCreate 
        })(EventCreate);