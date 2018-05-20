import React from 'react';
import { View, Text, Input, TextInput } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchInput = ({ label , value , onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={styles.wrapper}>
        <View style={styles.container1}>
        	<View style={styles.icon}>
        		<EvilIcons name='search' color='#2699fb' size={26} />
        	</View>
    
        	<View>
   	    		<TextInput
          			underlineColorAndroid='rgba(0,0,0,0)'
          			secureTextEntry={secureTextEntry}
          			placeholder={placeholder}
          			placeholderTextColor='#2699fb'
          			autoCorrect={false}
          			style={styles.textStyle}
          			value={value}
                onChangeText={onChangeText}
                autoCorrect = {true}
          			/>
          	</View>
        </View>
    
        <View style={styles.container2}>
            <View style={styles.icon}>
                <EvilIcons name='location' color='#2699fb' size={26} />
            </View>
    
            <View style={styles.inputStyle2}>
              <TextInput
                  underlineColorAndroid='#bce0fd'
                  secureTextEntry={secureTextEntry}
                  placeholder='Location'
                  placeholderTextColor='#2699fb'
                  autoCorrect={false}
                  style={styles.textStyle}
                  value={value}
                  onChangeText={onChangeText}
                  />
            </View>
        </View>
    
        <View style={styles.container2}>
            <View style={styles.icon}>
                <EvilIcons name='calendar' color='#2699fb' size={26} />
            </View>
    
            <View style={styles.inputStyle2}>
              <TextInput
                  underlineColorAndroid='#bce0fd'
                  secureTextEntry={secureTextEntry}
                  keyboardType = 'numeric'
                  placeholder='Date'
                  placeholderTextColor='#2699fb'
                  autoCorrect={false}
                  style={styles.textStyle}
                  value={value}
                  onChangeText={onChangeText}
                  />
            </View>

            <View style={styles.inputStyle2}>
              <TextInput
                  underlineColorAndroid='#bce0fd'
                  secureTextEntry={secureTextEntry}
                  keyboardType = 'numeric'
                  placeholder='Date'
                  placeholderTextColor='#2699fb'
                  autoCorrect={false}
                  style={styles.textStyle}
                  value={value}
                  onChangeText={onChangeText}
                  />
            </View>
        </View>
    </View>
  );
};

const styles = {
  wrapper: {
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '7%',
  },
	container1:{
    flexDirection: 'row',
		height: 45,
		borderWidth: 1,
		borderColor: '#bce0fd',
		borderRadius: 6,
    paddingLeft: 8,
	 },
  container2: {
    marginTop: '5%',
    flexDirection: 'row',
    height: 45,
    paddingLeft: 4,
   },
	icon: {
    justifyContent: 'center'
	 },
  inputStyle2: {
    flex: 1,
    backgroundColor: '#f1f9ff',
    marginRight: '10%',
    marginLeft: '5%',
  },
	textStyle:{
		width:300,
		fontSize:15,
    fontWeight: '400',
		color:'#2699fb',
	  },
};

export { SearchInput };