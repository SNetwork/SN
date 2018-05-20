import { 
    EVENT_UPDATE, 
    EVENT_CREATE,
    EVENT_SAVE_SUCCESS
   } from '../actions/types';
  
  const INITIAL_STATE = {
    name: '' , 
    date: '',
     location: '' ,
      tag: '' ,
       description: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EVENT_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case EVENT_CREATE:
        return INITIAL_STATE;
      case EVENT_SAVE_SUCCESS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };