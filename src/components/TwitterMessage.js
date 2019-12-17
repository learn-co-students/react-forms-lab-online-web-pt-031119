import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        currentChars: ''
      };
  }



  handleTypeChange = event => {
    this.setState({
        currentChars: event.target.value
      }
    )
  }



  render() {
    return (
      <div id="message">
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
           onChange={event => this.handleTypeChange(event)} value={this.state.currentChars}
           />
         <p>
           {this.props.maxChars - this.state.currentChars.length}
         </p>
      </div>
    );
  }
}

export default TwitterMessage;


//
