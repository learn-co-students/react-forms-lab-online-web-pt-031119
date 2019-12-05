import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }
  countCharLeft = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.message}/>
        {this.countCharLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
