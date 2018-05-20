//Рамка поста

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
        return (
         <View style={styles.containerStyle}>
         {props.children}
         </View>
        );
    };

const styles = {
    containerStyle: {
	backgroundColor: '#fff',
	shadowColor: '#000',
    shadowOffset: { width: 10, height: 10},
    shadowOpacity: .2,
    elevation: 2,
    marginBottom: 5,
    marginTop: 5,
    }
};

export { Card };