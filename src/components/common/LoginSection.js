import React from 'react';
import { View } from 'react-native';

const LoginSection = (props) => {
        return (
         <View style={[styles.containerStyle, props.style]}>
         {props.children}
         </View>
        );
    };

const styles = {
    containerStyle: {
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        //marginLeft: 1,
        //marginRight: 1,
        //marginTop: 5,
    }
};

export { LoginSection };