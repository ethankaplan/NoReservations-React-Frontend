import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
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
        const loginResponse = await fetch('#LOGIN ROUTE',{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        console.log("hit1")

         const parsedResponse = await loginResponse.json();
         console.log(parsedResponse)

            if(parsedResponse.user){
              //console.log(parsedResponse)
                //SET CURRENT USER
                console.log("logged")
                this.setState({
                  logged: true
                })
            } else {
              this.setState({
                message: 'Try again'
              })
            }
    }

    render() {
      const { username, password } = this.state
      return (
        
        this.state.logged
        ? <Redirect to={`## WHEREVER YOU GO WHEN YOU LOG IN`} />
        : <form onSubmit={this.onSubmit}>
            <input type="text" name="username" value={username} onChange={this.changeHandler} />
            <input type="password" name="password" value={password} onChange={this.changeHandler} />
            <button type='submit'>Submit</button>
          </form>
      )
    }
}

export default Login