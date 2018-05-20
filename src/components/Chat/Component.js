import React from 'react'
import { View } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'

const ChatScreenComponent = (props) => {
  return( 
  <View style={styles.container}>
    <MessagesList uid={props.uid}/>
    <MessageForm uid={props.uid} />
  </View>
  )
}
export default ChatScreenComponent
