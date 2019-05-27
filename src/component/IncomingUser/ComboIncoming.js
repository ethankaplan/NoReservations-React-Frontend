import React,{Component} from 'react'

import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
class LoginAndRegister extends Component {
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


    render(){
        return(
    
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Form>
                <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

                <Button content='Login' primary />
                </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
            <Form>
                <Form.Input icon='user' iconPosition='right' label='NewUsername' placeholder='Username' />
                <Form.Input icon='lock' iconPosition='right' label='NewPassword' type='password'  placeholder='Password'/>
                <Form.Input icon='lock' iconPosition='right' label='ConfirmNewPassword' type='password'  placeholder='Confirm'/>
                <Form.Input icon='mail' iconPosition='right' label='Email' type='Email'  placeholder='Email'/>
                <Button content='Register' primary />
                </Form>
            </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>
    )}
}

export default LoginAndRegister