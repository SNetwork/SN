import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { sendMessage, updateMessage } from '../../../actions/ChatActions'

import MessageForm from './Component'

const MessageFormContainer = props =>
  <MessageForm
    sending={props.sending}
    sendMessage={props.sendMessage}
    updateMessage={props.updateMessage}
    message={props.message}
    sendingError={props.sendingError} 
    uid={props.uid}
    />

const mapStateToProps = state => ({
  sending: state.chat.sending,
  sendingError: state.chat.sendingError,
  message: state.chat.message
})

const mapDispatchToProps = {
  sendMessage,
  updateMessage
}

MessageFormContainer.propTypes = {
  sending: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  sendingError: PropTypes.string,
  uid: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageFormContainer)
