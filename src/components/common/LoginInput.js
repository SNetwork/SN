//Инпуты как на логине
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const LoginInput = ({ label , value , onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
   <TextInput
       underlineColorAndroid='rgba(0,0,0,0)' 
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor="#fff"
      autoCorrect={false}
      style={inputStyle}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle:{
  width:300,
  fontSize:16,
  color:'#fff',
  flex : 2,
  //paddingLeft:20,
  
},
 containerStyle:{
  height: 40,
  flex: 1,
  flexDirection: 'row',
  marginTop: 5,
  //alignItems: 'center',
  //borderWidth: 1,
  //borderBottomWidth: 1,
  //borderColor: '#fff',
 }
};

export { LoginInput };