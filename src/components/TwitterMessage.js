import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      charsLeft: props.maxChars
    };
  }

  handleMsgChange = (event) => {
    let targetValue = event.target.value
    this.setState({
      message: targetValue,
      charsLeft: this.props.maxChars - targetValue.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMsgChange(event)} value={this.state.message}/>
          {this.state.charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;

