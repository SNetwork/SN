import React from 'react';
import { View } from 'react-native';

const LoginCard = (props) => {
        return (
         <View style={styles.containerStyle}>
         {props.children}
         </View>
        );
    };

const styles = {
    containerStyle: {
        marginLeft: '7%',//35,
        marginRight: '7%',//35,
        //marginTop: 130,
    }
};

export { LoginCard };