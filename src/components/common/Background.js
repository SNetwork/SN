import React from 'react';
import { View } from 'react-native';

const Background = (props) => {
        return (
            <View style={styles.containerStyle}>
               {props.children}
            </View>
        );
    };

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#f1f9ff',
    }
};

export { Background };