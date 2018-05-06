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
	marginTop:5,
	marginLeft:5,
	marginRight:5,
	backgroundColor: '#fff',
	shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    }
};

export { Card };