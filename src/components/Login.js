import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import bubbles from '../bubble-img.jpeg';
import { useHistory } from 'react-router-dom';

const LoginContainer = styled.div`
  width: 100%;
  padding:1.3rem;
  background-image: url(${bubbles});
  height: 90vh;
`

const FormContainer = styled.form`
  width: 30%;
  height: 50%;
  margin: 5rem auto;
  padding:2rem;
  background-color: rgb(0,0,0,0.5);
  color:white;
  border-radius: 10%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size:1.3rem;

  input{
    margin-left:1rem;
    padding: 0 1rem;
  }

  button{
    width:50%;
    margin: 0 auto;
    border-radius: 10%;
    padding: 0.5rem 1rem;
    cursor:pointer;
  }
`

const Login = () => {

  const { push } = useHistory()

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
})

const handleChange = (e) => {
  const { name, value } = e.target;

  setCredentials({...credentials, [name]: value})
}
  
const handleSubmit = (e) => {
  e.preventDefault()
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      push('/protected')
      console.log(res)
    })
    .catch(err => {
      console.log('Error ', err.response)
    })
}

  return (
    <div style={{width: '100%'}}>
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username:
          <input type='text' 
          name='username' 
          value={credentials.username}
          onChange={handleChange}/>
        </label>
        <label>Password:
          <input type='text' 
          name='password'
          value={credentials.password}
          onChange={handleChange}/>
        </label>
        <button>Login</button>
      </FormContainer>
    </LoginContainer>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.