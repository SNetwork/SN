import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import EventCreate from './components/EventCreate';
import EventEdit from './components/EventEdit';
import EventList from './components/EventList';
import Settings from './components/Settings';
import SignUpForm from './components/SignUpForm';
import Profile from './components/Profile';
import Joined from './components/Joined';
import Created from './components/Created';
import Search from './components/Search';

const TabIcon = ({selected, title}) => {
    return (
        <Text style = {{color: selected ? 'red' :'black' }}>{title}</Text>
    );
};

const RouterComponent = () => {
    return (
    <Router navigationBarStyle={{backgroundColor:'#1565c0',}}>
        <Scene key="root" hideNavBar>  
         <Scene key="auth" >
          <Scene key="login" component={LoginForm} title="Please Login"  />
          <Scene key="signup" component={SignUpForm} title="Create User" />
          <Scene 
         key="userCreate" 
         component={UserCreate} 
         title="Create User" 
         hideNavBar
         />
        </Scene>

        <Scene key = "Main" 
            tabs 
            swipeEnabled = {false}
            labelStyle={{ fontSize: 24 }} 
            tabBarPosition='bottom' 
            activeBackgroundColor = '#FFFFFF'
            activeTintColor = 'blue'    
            hideNavBar> 
            <Scene key="Feed" titleStyle={{ alignSelf: 'center' }} >    
                <Scene 
                rightTitle = "+ "
                rightButtonStyle={{ right: 0}}
                onRight={() => { Actions.eventCreate() }}
                key="eventList" 
                component={EventList} 
                initial
                icon = {TabIcon}
                />
                <Scene 
                key="eventCreate" 
                component={EventCreate} 
                title="Create Event" 
                />
            </Scene>
            <Scene
         key="Search" 
         component={Search} 
         />
         <Scene key="Profile">
         <Scene
         key="Your Profile" 
         component={Profile} 
         title="Your Profile" 
         />
         <Scene 
                key="userEdit" 
                component={UserEdit} 
                title="Edit User " 
                />
                <Scene 
                key="Joined" 
                component={Joined} 
                title="Joined Events" 
                />
                <Scene 
                key="Created" 
                component={Created} 
                title="Created Events" 
                />
                <Scene 
                key="eventEdit" 
                component={EventEdit} 
                title="Edit Event" 
                />
                 <Scene 
                key="Settings" 
                component={Settings} 
                title="Settings " 
                />
         </Scene>
          </Scene>
         </Scene>
    </Router>
    );
};

export default RouterComponent;