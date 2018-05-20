//Кнопки в профиле
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ProfileButton = ({ onPress, children }) => {
    const { buttonStyle , textStyle } = styles;

        return (
         <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={styles.counter}>140</Text>
                <Text style={textStyle}>
                    {children}
                </Text>
         </TouchableOpacity>
        );
    };

const styles = {
    textStyle: {
        color: '#2699fb',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    counter: {
        fontSize: 22,
        color: '#2699fb',
        textAlign: 'center',
    },
    buttonStyle: {
        width: 85,
    }
};

export { ProfileButton };