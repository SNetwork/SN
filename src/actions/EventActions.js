import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EVENT_UPDATE,
    EVENT_CREATE,
    EVENTS_FETCH_SUCCESS,
    EVENT_SAVE_SUCCESS,
    JOINED_EVENTS_FETCH_SUCCESS,
    CREATED_EVENTS_FETCH_SUCCESS
} from './types';

export const eventUpdate = ({ prop, value }) => {
  return {
      type: EVENT_UPDATE,
      payload: { prop, value }
  };
};

export const eventCreate = ({ name , date, location , tag , description }) => {
    const { currentUser } = firebase.auth();
    const myRef = firebase.database().ref(`/events`).push();
    const key = myRef.key;

    return (dispatch) => {
     myRef.set({ name , date, location , tag , description })

     firebase.database().ref(`/events/${key}/creator/${firebase.auth().currentUser.uid}`)
     .set('true')

     firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/createdEvents/${key}`)
    .set({ name , date, location , tag , description })
        .then(() => {
        dispatch({ type: EVENT_CREATE });
        Actions.pop({ type: 'reset' });
     });
 };
};

export const eventsFetch = () => {
    const { currentUser } = firebase.auth();


   return (dispatch) => {
    firebase.database().ref(`/events`)
      .on('value', snapshot => {
          dispatch({ type: EVENTS_FETCH_SUCCESS, payload: snapshot.val() });
      });

   };
};

export const joinedeventsFetch = () => {
    const { currentUser } = firebase.auth();


   return (dispatch) => {
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/joinedEvents`)
      .on('value', snapshot => {
          dispatch({ type: JOINED_EVENTS_FETCH_SUCCESS, payload: snapshot.val() });
      });

   };
};

export const createdeventsFetch = () => {
    const { currentUser } = firebase.auth();


   return (dispatch) => {
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/createdEvents`)
      .on('value', snapshot => {
          dispatch({ type: CREATED_EVENTS_FETCH_SUCCESS, payload: snapshot.val() });
      });

   };
};

export const eventSave = ({ name , date, location , tag , description, uid }) => {
    const { currentUser } = firebase.auth();
    const myRef= firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/joinedEvents/${uid}`);
    const key = myRef.key;

    return(dispatch) => {
        myRef.set({ name , date, location , tag , description })
        
        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/createdEvents/${uid}`)
        .set({ name , date, location , tag , description })

        firebase.database().ref(`events/${uid}`)
        .set({ name , date, location , tag , description })
        .then(() => {
            dispatch ({ type: EVENT_SAVE_SUCCESS });
         Actions.pop({ type: 'reset' });
        });
    };
};

export const eventJoin = ({ name , date, location , tag , description, uid })=> {

    return (dispatch) => {
        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/joinedEvents/${uid}`)
        .set({ name , date, location , tag , description })
        .then(() => {
            firebase.database().ref(`/events/${uid}/joinedUsers/${firebase.auth().currentUser.uid}`)
            .set({ name , date, location , tag , description })
            .then(() => {
                alert("Event joined");
            });
        });
    };
};

export const eventDelete = ({ uid }) => {
    const{ currentUser } = firebase.auth();

    return() => {
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/joinedEvents/${uid}`)
    .remove()
    .then(() => {
        firebase.database().ref(`/events/${uid}/joinedUsers/${firebase.auth().currentUser.uid}`)
        .remove()
        Actions.pop({ type: 'reset' });
    });
    };
};