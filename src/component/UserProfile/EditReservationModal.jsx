import React, {Component} from 'react'
import {Modal, Icon, Image, Button} from 'semantic-ui-react'

class EditReservationModal extends Component {

  state ={
    open: true
  }

  deleteReservation = async () => {
    const data = await fetch(`http://localhost:9000/api/v1/reservations/${this.props.reservation.id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsed_data = await data.json()
    this.setState({open: false})
    this.props.setEditing(false)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({open:false})
    this.props.updateReservation(this.props.type, this.props.index)
  }

  render(){
    return (
      <Modal trigger={<Icon style={{cursor:'pointer'}} name="edit outline" onClick={() => this.props.setEditing(true)} />}>
        <Modal.Header>Edit your reservation</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.props.reservation.restaurant_id.image_url} />
          <Modal.Description>
            <form onSubmit={this.handleSubmit}>
              Price: <input onChange={this.props.handleChange} value={this.props.reservation.price} name='price'></input>
              <input type='submit'></input>
            </form>
            <Button negative onClick={this.deleteReservation}>Delete Reservation</Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default EditReservationModal
