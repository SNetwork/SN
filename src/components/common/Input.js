
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label , value , onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
   <TextInput
       underlineColorAndroid='#6bb2ff'
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor='#6bb2ff'
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
  color:'#1369c6',
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

export { Input };