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
    let input = event.target.value
    this.setState({
      message: input,
      charsLeft: this.props.maxChars - input.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMsgChange(event)} value={this.state.message}>
          {this.state.charsLeft}
        </input>
      </div>
    );
  }
}

export default TwitterMessage;
