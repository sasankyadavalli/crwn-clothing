import React from 'react';

import FormInput from '../formInput/formInput.components';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class Signin extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
    
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render(){
    return(
      <div className="sign-in" >
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required 
          />
          <FormInput
            type='password' 
            name='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton >
          </div>
        </form>
      </div>
    )
  }
}

export default Signin;