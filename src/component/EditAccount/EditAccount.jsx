import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

class EditAccount extends Component {
  state = {
    username: '',
    email: ''
  }

  fetchUser = async () => {
    const data = await fetch(`http://localhost:9000/users/${this.props.userId}`)
    const parsedData = await data.json()
    this.setState({
      username: parsedData.username,
      email: parsedData.email
    })
  }

  editUser = async () => {
    const data = await fetch(`http://localhost:9000/users/${this.props.userId}`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedData = await data.json()
    this.props.setEditAccount(false)
  }

  componentDidMount(){
    this.fetchUser()
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  handleSubmit = () => {
    this.editUser()
  }

  render(){
    return(
      <Form style={{width: '80vw', margin: '0 auto'}} onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input name="username" onChange={this.handleChange} value={this.state.username}></input>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" onChange={this.handleChange} value={this.state.email}></input>
        </Form.Field>
        <Button type="submit">Submit</Button>
        <Button onClick={() => this.props.setEditAccount(false)}>Cancel</Button>
      </Form>
    )
  }
}

export default EditAccount
