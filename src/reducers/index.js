import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EventFormReducer from './EventFormReducer';
import EventReducer from './EventReducer';
import UserFormReducer from './UserFormReducer';
import ProfileReducer from './ProfileReducer';
import JoinedEventReducer from './JoinedEventReducer';
import CreatedEventReducer from './CreatedEventReducer';

export default combineReducers({
   auth: AuthReducer,
   eventForm: EventFormReducer,
   events: EventReducer,
   userForm: UserFormReducer,
   usersInfo: ProfileReducer,
   joinedevents: JoinedEventReducer,
   createdevents: CreatedEventReducer
});

