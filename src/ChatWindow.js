import React from 'react';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';
import PropTypes from 'prop-types';

class ChatWindow extends React.Component {
  
 
  onMessage = message => {
    this.props.onMessage(this.props.user.username, message);
  };

  render () {
    const { user, messages } = this.props
    
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageList user={user} messages={messages} />
        <MessageInput onMessage={this.onMessage} />
      </div>
    )
  }
}

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};


export default ChatWindow