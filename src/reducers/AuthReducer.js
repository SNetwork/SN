import { 
    EMAIL_CHANGED , 
    PASSWORD_CHANGED,
     LOGIN_USER_SUCCESS ,
     LOGIN_USER_FAIL,
     LOGIN_USER,
     LOGOUT_USER,
     SIGN_UP_USER,
     SIGN_UP_USER_FAIL
    } from '../actions/types';

const INITIAL_STATE = {
     email: 'Andrew@mail.ru', 
     password: '123321',
      user: null ,
      error: '',
      loading: false
    };

export default (state = INITIAL_STATE , action) => {
   console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
        return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
        case LOGIN_USER:
        return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
        return { ...state, error: 'Auth Failed',password: '', loading: false };
        case LOGOUT_USER:
        return INITIAL_STATE;
        case SIGN_UP_USER:
        return { ...state, loading: true, error: '' };
        case SIGN_UP_USER_FAIL:
        return { ...state, error: 'Registration Failed',password: '', loading: false };
        default: 
        return state;

    }
};
