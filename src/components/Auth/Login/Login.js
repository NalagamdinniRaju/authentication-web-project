// src/components/Auth/Login.js
import React, { Component } from 'react';
import { Navigate,Link } from 'react-router-dom';
import authService from '../../../services/authService';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false,
    error: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const isLoggedIn = authService.login(username, password);
    if (isLoggedIn) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    const { isLoggedIn, error } = this.state;

    if (isLoggedIn) {
      return <Navigate to="/landing" />;
    }

    return (
    //   <div>
    //     <h2>Login</h2>
    //     <form onSubmit={this.handleSubmit}>
    //       <div>
    //         <label>Username:</label>
    //         <input type="text" name="username" onChange={this.handleChange} required />
    //       </div>
    //       <div>
    //         <label>Password:</label>
    //         <input type="password" name="password" onChange={this.handleChange} required />
    //       </div>
    //       {error && <p>{error}</p>}
    //       <button type="submit">Login</button>
    //       <p>If you don't have an account, please <Link to="/register">create it</Link>.</p>
    //     </form>
    //   </div>
    <div className='container'>
        <h2>Login</h2>
        <form className='register-form' onSubmit={this.handleSubmit}>
            <input className='input' type="text" name="name" placeholder='Enter your name'  onChange={this.handleChange} required/>
            <input type='password' name="passoword" placeholder='Password'  onChange={this.handleChange} required/>          
            {error && <p>{this.state.error}</p>}
            <button type="submit" className='button-85'>Login</button>
            <p className='redirect-to-login'>If you don't have an account, please <Link to="/register"><b>create it</b></Link>.</p>
        </form>
      </div>
    );
  }
}

export default Login;
