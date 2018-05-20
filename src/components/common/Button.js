import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, this.button]}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        color: '#2699fb',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    buttonStyle: {
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: '#2699fb',
        borderRadius: 5,
    }
};

export { Button };