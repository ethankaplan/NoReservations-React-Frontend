import React,{Component} from 'react'
import {withRouter} from 'react-router-dom';

import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
class SignInAndReg extends Component {
    state = {
        email: '',
        password: '',
        NewUsername:'',
        NewPassword:'',
        ConfirmNewPassword:'',
        NewEmail:'',
        logged: false
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onLogin = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`http://localhost:9000/users/login`,{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify({email:this.state.email,password:this.state.password}),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        console.log("hit1")

         const parsedResponse = await loginResponse.json();
         console.log(parsedResponse)

            if(parsedResponse.username){
              //console.log(parsedResponse)
                this.props.doSetCurrentUser(parsedResponse)
                this.setState({
                  logged: true
                })
            } else {
              this.setState({
                
              })
            }
            this.props.history.push(this.props.location)
    }

    onRegister = async (e) => {
        e.preventDefault();
        const registerResponse = await fetch(`http://localhost:9000/users/registration`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username:this.state.NewUsername,
                                  email:this.state.NewEmail,
                                  password:this.state.NewPassword,
                                  verify_password:this.state.ConfirmNewPassword}),
            headers:{
                "Content-type" : 'application/json'
            }
            
        })
    
        const parsedResponse = await registerResponse.json();
        console.log(parsedResponse)
        if(parsedResponse.username) {
          this.props.doSetCurrentUser(parsedResponse)
            this.setState({
                logged: true,
            })
        }
        this.props.history.push(this.props.location)
    }
    


    render(){
        return(
    
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column verticalAlign='middle'>
                <Form onSubmit={this.onLogin}>
                <Form.Input icon='mail' 
                            iconPosition='left' 
                            label='Email' 
                            name='email' 
                            value={this.state.username} 
                            placeholder='Email' 
                            onChange={this.changeHandler}/>

                <Form.Input icon='lock' 
                            iconPosition='left' 
                            label='Password' 
                            name='password' 
                            value={this.state.password} 
                            type='password' 
                            onChange={this.changeHandler}/>

                <Button content='Login' primary />
                </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
            <Form onSubmit={this.onRegister}>
            <Form.Input icon='mail' 
                            iconPosition='right' 
                            label='Email' 
                            name='NewEmail' 
                            type='Email' 
                            placeholder='Email'
                            value={this.state.NewEmail}   
                            onChange={this.changeHandler}/>

                <Form.Input icon='user' 
                            iconPosition='right' 
                            label='Username' 
                            name='NewUsername' 
                            value={this.state.NewUsername} 
                             
                            onChange={this.changeHandler}/>

                <Form.Input icon='lock' 
                            iconPosition='right' 
                            label='Password' 
                            name='NewPassword' 
                            value={this.state.NewPassword} 
                            type='password'   
                            onChange={this.changeHandler}/>

                <Form.Input icon='lock' 
                            iconPosition='right' 
                            label='Confirm Password' 
                            name='ConfirmNewPassword' 
                            value={this.state.ConfirmNewPassword} 
                            type='password'   
                            onChange={this.changeHandler}/>

               
                <Button content='Register' primary />
                </Form>
            </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>
    )}
}

export default withRouter(SignInAndReg)