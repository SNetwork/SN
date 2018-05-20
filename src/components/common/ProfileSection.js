import React from 'react';
import { View } from 'react-native';

const ProfileSection = (props) => {
        return (
         <View style={[styles.containerStyle, props.style]}>
         {props.children}
         </View>
        );
    };

const styles = {
    containerStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
};

export { ProfileSection };