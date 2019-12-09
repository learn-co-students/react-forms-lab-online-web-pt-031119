import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: ""
    };
    console.log(props)
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        onChange={event => this.handleChange(event)}
        value={this.state.inputValue}  />
        <h1>{this.props.maxChars-this.state.inputValue.length}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
