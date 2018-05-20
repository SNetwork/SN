import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EventForm from './EventForm';
import { eventUpdate , eventSave, eventDelete } from '../actions';
import { Card, LoginSection, LoginButton,Button, Confirm, Background } from './common';

class EventEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
       _.each(this.props.createdevent, (value, prop) => {
           this.props.eventUpdate({ prop, value });
       });
    }

    onButtonPress() {
        const { name , date, location , tag , description } = this.props;
        this.props.eventSave({name , date, location , tag , description, uid: this.props.createdevent.uid });
    }

    onTextPress() {
       const { name, date } = this.props;
       Communications.text(name, `Your upcoming event is on ${date}`);
    }

    onAccept() {
        const { uid } = this.props.createdevent;
        this.props.eventDelete({ uid });
    }

   onDecline() {
        this.setState({ showModal:false });
    }



    render() {
        return (
            <Background>
                    <Card>
                        <EventForm />
                        <LoginSection>
                            <LoginButton onPress={this.onButtonPress.bind(this)}>
                                Save changes
                            </LoginButton>
                        </LoginSection>
        
                        <LoginSection>
                            <LoginButton onPress={this.onTextPress.bind(this)}>
                            Text Schedule 
                            </LoginButton>
                        </LoginSection>
                       
                        <LoginSection>
                            <LoginButton onPress={() => this.setState({ showModal: !this.state.showModal })}>
                         Delete 
                            </LoginButton>
                        </LoginSection>
        
                        <Confirm 
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                        >
                             Are you sure you want to delete this? 
                        </Confirm>
                    </Card>
            </Background>
        );
    }
}
const mapStateToProps = (state) => {
    const { name , date, location , tag , description } = state.eventForm;

    return { name , date, location , tag , description };
  };

export default connect(
    mapStateToProps,
     { 
         eventUpdate, 
        eventSave,
        eventDelete
    })
    (EventEdit);