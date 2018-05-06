//Кнопки в ивенте
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle , textStyle } = styles;

        return (
         <TouchableOpacity onPress={onPress} style={buttonStyle}>
         <Text style={textStyle}>
         {children}
         </Text>
         </TouchableOpacity>
        );
    };

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 0.25,
        alignSelf: 'stretch',
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255,0.7)',
        borderWidth: 1,
        borderColor: '#000000',
        marginLeft:  '5%',
        marginBottom: 5
    }
};

export { Button };