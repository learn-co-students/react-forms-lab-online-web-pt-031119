import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  submitForm = event => {
    event.preventDefault()
    if (this.state.username != "" && this.state.password != ""){
    this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChange(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleChange(event)} id="password" name="password" type="password" value={this.state.password} />
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
