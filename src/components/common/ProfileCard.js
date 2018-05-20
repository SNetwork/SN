//Рамка поста

import React from 'react';
import { View } from 'react-native';

const ProfileCard = (props) => {
        return (
            <View style={styles.containerStyle}>
               {props.children}
            </View>
        );
    };

const styles = {
    containerStyle: {
        flex: 1,
    }
};

export { ProfileCard };