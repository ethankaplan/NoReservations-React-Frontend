import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Register extends Component {
  state = {
    username: '',
    password: '',
    logged: false
  }

  changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const registerResponse = await fetch(`##USER ROUTE`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers:{
            "Content-type" : 'application/json'
        }
    })

    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse)
    if(parsedResponse.user) {
      //SET CURRENT USER
        this.setState({
            logged: true,
        })
    }
}

  render() {
    const {username, password} = this.state
    
    return(
      <div>
        {
          this.state.logged
            ? <Redirect to={`##WHERE YOU GO WHEN YOU LOGIN`} />
            : <RegisterForm 
                changeHandler={this.changeHandler}
                onSubmit={this.onSubmit}
                username={username}
                password={password}
              />
        }
      </div>

    )
  }
}

const RegisterForm = ({changeHandler, onSubmit, username, password}) =>
  <form onSubmit={e => onSubmit(e)}>
    <label htmlFor="username">Username</label>
    <input onChange={e => changeHandler(e)}type="text" name='username' placeholder='username' value={username}/>
    <label htmlFor="password">Password</label>
    <input onChange={e => changeHandler(e)}type="password" name='password' placeholder='password' value={password}/>
    <button type='submit'>SUBMIT</button>
  </form>


export default Register