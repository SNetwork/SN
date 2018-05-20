//Рамка в посте тэг и описание

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
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
        marginLeft:5,
        marginRight:5,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#000000'
    }
};

export { CardSection };