import React, { Component } from 'react';
import authService from '../../../services/authService';
import { Link,Navigate } from 'react-router-dom';
import "./Register.css"

class Register extends Component {
  state = {
    username: '',
    password: '',
    success: false,
    error: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const success = authService.register(username, password);
    if (success) {
      this.setState({ success: true, error: 'Username already exists' });
      alert("Registration successful! You can now log in.")
    } else {
      this.setState({success: false });
      const {error} = this.state
      alert({error})
    }
  };

  render() {
    return (
      <div className='container'>
        <h2>Register</h2>
        <form className='register-form' onSubmit={this.handleSubmit}>
            <input className='input' type="text" name="name" placeholder='Enter your name'  onChange={this.handleChange} required/>
            <input type='password' name="passoword" placeholder='Password'  onChange={this.handleChange} required/>          
            {this.state.success && <Navigate to="/login" />}
            <button type="submit" className='button-85'>Register</button>
            <p className='redirect-to-login'>If you already have an account, please <Link to="/login"><b>login</b></Link>.</p>
        </form>
      </div>
    );
  }
}

export default Register;
