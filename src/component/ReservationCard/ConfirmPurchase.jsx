import React, {Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import * as routes from '../../constants/routes'
import {withRouter} from 'react-router-dom'




class ConfirmPurchase extends Component{
state={
  open:true
}
  handleSubmit = async e => {
    e.preventDefault()
    console.log("here1")
    const data = await fetch(`http://localhost:9000/api/v1/reservations/${this.props.reservationId}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        current_owner_id: this.props.currentUser,
        is_sold:true
      })
    })
    
    this.setState({open: false})
    console.log("here2")
    this.props.history.push(routes.USER)
    
  }

 render(){
   return(
  <Modal trigger={<Button>BUY</Button>} basic size='small' closeIcon>
    <Header icon='dollar' content='Confirm Purchase' />
    <Modal.Content>
      <p>
        Confirm purchase of a reservation at {this.props.name}
         at {this.props.time} on {this.props.date} for {this.props.people} people
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted animated='fade' onClick={(e)=>this.handleSubmit(e)}>
        <Button.Content visible><Icon name='checkmark' /> Buy</Button.Content>
        <Button.Content hidden><Icon name='food'/></Button.Content>
      </Button>
    </Modal.Actions>
  </Modal>
  )
}
}

export default withRouter(ConfirmPurchase)