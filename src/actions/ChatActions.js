import firebase from 'firebase';
import * as types from './types';

const FIREBASE_REF_MESSAGES_LIMIT = 20


export const sendMessage = (message, uid) => {
    return (dispatch) => {
      dispatch(chatMessageLoading())
  
      let currentUser = firebase.auth().currentUser
      let createdAt = new Date().getTime()
      let chatMessage = {
        text: message,
        createdAt: createdAt,
        user: {
          id: currentUser.uid,
          email: currentUser.email
        }
      }
  
      firebase.database().ref(`/events/${uid}/chat/messages`).push().set(chatMessage, (error) => {
        if (error) {
          dispatch(chatMessageError(error.message))
        } else {
          dispatch(chatMessageSuccess())
        }
      })
    }
  }

  export const updateMessage = text => {
    return (dispatch) => {
      dispatch(chatUpdateMessage(text))
    }
  }

  export const loadMessages = ( uid ) => {
    return (dispatch) => {
    firebase.database().ref(`/events/${uid}/chat/messages`).limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
        dispatch(loadMessagesSuccess(snapshot.val()))
      }, (errorObject) => {
        dispatch(loadMessagesError(errorObject.message))
      })
    }
  }

  const chatMessageLoading = () => ({
    type: types.CHAT_MESSAGE_LOADING
  })
  
  const chatMessageSuccess = () => ({
    type: types.CHAT_MESSAGE_SUCCESS
  })
  
  const chatMessageError = error => ({
    type: types.CHAT_MESSAGE_ERROR,
    error
  })
  
  const chatUpdateMessage = text => ({
    type: types.CHAT_MESSAGE_UPDATE,
    text
  })
  
  const loadMessagesSuccess = messages => ({
    type: types.CHAT_LOAD_MESSAGES_SUCCESS,
    messages
  })
  
  const loadMessagesError = error => ({
    type: types.CHAT_LOAD_MESSAGES_ERROR,
    error
  })