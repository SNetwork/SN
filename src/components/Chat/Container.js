import React, { Component } from 'react'

import ChatScreen from './Component'

class ChatScreenContainer extends Component {

  render() {
    return (
      <ChatScreen uid={this.props.uid}/>
    )
  }
}

export default ChatScreenContainer
