import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,
     PASSWORD_CHANGED ,
      LOGIN_USER_SUCCESS,
       LOGIN_USER_FAIL, 
       LOGIN_USER,
       LOGOUT_USER,
       SIGN_UP_USER,
       SIGN_UP_USER_FAIL

    } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    };
};

export const signupUser = ({ email, password }) => {
    return(dispatch) => {
        dispatch({ type: SIGN_UP_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => signupUserSuccess(dispatch, user))
        .catch(() => signupUserFail(dispatch));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: LOGOUT_USER });
            Actions.auth({ type: 'reset' });
        });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const signupUserFail = (dispatch) => {
    dispatch({ type: SIGN_UP_USER_FAIL });
    Actions.pop({ type: 'reset' });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });


    Actions.Feed();
};

const signupUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });


    Actions.userCreate();
};