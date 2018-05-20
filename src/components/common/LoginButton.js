import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LoginButton = ({ onPress, children }) => {
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
        color: '#558474',//'#382962',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,.9)',
        marginLeft:  '15%',
        marginRight: '15%',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 3,
        //opacity: .8,
        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 2},
        //shadowOpacity: 0.2,
        //elevation: 5,
    }
};

export { LoginButton };