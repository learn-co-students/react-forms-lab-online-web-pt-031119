import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChars: props.maxChars
    };
  }

  handleOnChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value,
      maxChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} maxLength={this.state.maxChars} onChange={event => this.handleOnChange(event)}/>
        <p>
          Characters remaining: {this.state.maxChars}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
