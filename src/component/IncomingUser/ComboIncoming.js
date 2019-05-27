import React,{Component} from 'react'

import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
class LoginAndRegister extends Component {
    state = {
        username: '',
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


    render(){
        return(
    
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Form>
                <Form.Input icon='user' iconPosition='left' label='Username' name='username' value={this.state.username} placeholder='Username' onChange={this.changeHandler}/>
                <Form.Input icon='lock' iconPosition='left' label='Password' name='password' value={this.state.password} type='password' onChange={this.changeHandler}/>

                <Button content='Login' primary />
                </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
            <Form>
                <Form.Input icon='user' iconPosition='right' label='NewUsername' name='NewUsername' value={this.state.NewUsername} placeholder='Username' onChange={this.changeHandler}/>
                <Form.Input icon='lock' iconPosition='right' label='NewPassword' name='NewPassword' value={this.state.NewPassword} type='password'  placeholder='Password' onChange={this.changeHandler}/>
                <Form.Input icon='lock' iconPosition='right' label='ConfirmNewPassword' name='ConfirmNewPassword' value={this.state.ConfirmNewPassword} type='password'  placeholder='Confirm' onChange={this.changeHandler}/>
                <Form.Input icon='mail' iconPosition='right' label='NewEmail' name='NewEmail' type='Email' value={this.state.NewEmail}  placeholder='Email' onChange={this.changeHandler}/>
                <Button content='Register' primary />
                </Form>
            </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>
    )}
}

export default LoginAndRegister