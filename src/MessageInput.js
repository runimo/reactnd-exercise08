import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageInput extends Component {
  
  state = {
    message: ''
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      message: value,
    }));
  };

  handleSubmit = event => {
    const { message } = this.state;
    event.preventDefault();
    this.props.onMessage(message);
    this.setState(currentState => ({
      message: ''
    }))
  };
  
  isDisabled = () => {
    return this.state.message === '';
  };

  render () {
    const { message } = this.state;

    return (
       <div>
      	<form onSubmit={this.handleSubmit} className="input-group">
      	  <input
            type="text"
            className="form-control"
            value={message}
            placeholder="Enter your message..."
            onChange={this.handleInputChange} />
      	  <div className="input-group-append">
       	    <button className="btn submit-button" disabled={this.isDisabled()}>
			  SEND
		    </button>
		  </div>
		</form>
	  </div>
    )
  };
}

MessageInput.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default MessageInput