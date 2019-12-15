import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  charLeft = () => {
    let charactersLeft = this.props.maxChars - this.state.message.length
  return <div>{charactersLeft}</div>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.message} />
        {this.charLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
