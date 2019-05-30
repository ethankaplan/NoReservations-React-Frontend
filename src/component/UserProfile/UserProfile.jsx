import React, {Component} from 'react'
import UserReservations from './UserReservations'
import {Button} from 'semantic-ui-react'
import EditAccount from '../EditAccount/EditAccount'

class UserProfile extends Component {
  state = {
    boughtReservations: [],
    soldReservations: [],
    message: '',
    editingAccount: false
  }

  setEditAccount = bool => {
    this.setState({editingAccount: bool})
  }

  handleChange = (e, resType, index) => {
    const newArr = [...this.state[resType]]
    newArr[index][e.currentTarget.name] = e.currentTarget.value
    this.setState({[resType]: newArr})
  }

  fetchUserReservations = async () =>{
    const data = await fetch(`http://localhost:9000/api/v1/reservations?user_id=${this.props.user.id}`)
    const parsed_data = await data.json()
    parsed_data.message ? this.setState({message: parsed_data.message}) : this.createReservationState(parsed_data)
  }

  updateReservation = async (type, index) => {
    const reservationToUpdate = this.state[type][index]
    reservationToUpdate.restaurant_id = reservationToUpdate.restaurant_id.id
    reservationToUpdate.seller_id = reservationToUpdate.seller_id.id
    reservationToUpdate.current_owner_id = reservationToUpdate.current_owner_id.id
    const data = await fetch(`http://localhost:9000/api/v1/reservations/${reservationToUpdate.id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationToUpdate)
    })
  }

  createReservationState = reservations => {
    for (let reservation of reservations) {
      reservation.seller_id.id == this.props.user.id ? this.setState({soldReservations:[...this.state.soldReservations, reservation]}) : this.setState({boughtReservations: [...this.state.boughtReservations, reservation]})
    }
  }

  componentDidMount(){
    this.fetchUserReservations()
  }

  render(){
    return <div>
      <h1>Welcome {this.props.user ? this.props.user.username : 'stranger'} to your profile page! Isn't it lovely?</h1>
      <Button onClick={() => this.setState({editingAccount: true})}>Edit Account Info</Button>
      {this.state.message.length > 0 ?
      <div>
         {this.state.message}
      </div>
      :
      this.state.editingAccount ?
      <EditAccount userId={this.props.user.id} setEditAccount={this.setEditAccount}/> :
      <UserReservations boughtReservations={this.state.boughtReservations} soldReservations={this.state.soldReservations}/>
      }
    </div>
  }
}

export default UserProfile
