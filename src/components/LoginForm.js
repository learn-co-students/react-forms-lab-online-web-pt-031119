import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin(event) {
    event.preventDefault()
    if (this.state.username != '' && this.state.password != '') {
      alert("this was submitted")
      this.props.handleLogin(this.state)
    } else {
      alert("this was not submitted")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              onChange={event => this.handleUsernameChange(event)} value={this.state.username}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              onChange={event => this.handlePasswordChange(event)} value={this.state.password}
              />
          </label>
        </div>
        <div>
          <button type="submit" value="Submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
