import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserInput = (event) => {
    debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validate = (event) => {
    event.preventDefault()
    let name = this.state.username;
    let password = this.state.password;

    if(name && password){
      this.handleSubmit(event)
    }else{
      alert('Both fields cannot be empty.')
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.handleLogin(formData)
  }

  render() {
    return (
      <form onSubmit={event => this.validate(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleUserInput(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleUserInput(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
