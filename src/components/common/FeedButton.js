import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FeedButton = ({ onPress, children }) => {
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
    }
};

export { FeedButton };