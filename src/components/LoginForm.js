import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => { 
    event.preventDefault()  
    if (this.state.username && this.state.password) {
      let formData = { username: this.state.username, password: this.state.password }
      this.props.handleLogin(formData)
    }    
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username            
            <br></br>
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username} 
            onChange={event => this.handleInputChange(event)} 
            />
          </label>          
        
        </div>
        <br></br>
        <div>
          <label>
            Password
            <br></br>
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password} 
            onChange={event => this.handleInputChange(event)} 
            />
          </label>
        </div>
        <br></br>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
