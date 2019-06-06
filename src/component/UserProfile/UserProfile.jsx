import React, {Component} from 'react'
import UserReservations from './UserReservations'
import {Button} from 'semantic-ui-react'
import EditAccount from '../EditAccount/EditAccount'
import CreateReservation from '../CreateReservation/CreateReservation'

class UserProfile extends Component {
  state = {
    boughtReservations: [],
    soldReservations: [],
    message: '',
    editingAccount: false,
    editingReservation: false,
    creatingReservation: false
  }

  setCreatingReservation = bool => {
    this.setState({creatingReservation: bool})
  }

  setEditingReservation = bool => {
    this.setState({editingReservation: bool})
  }

  setEditAccount = bool => {
    this.setState({editingAccount: bool})
  }

  fetchUserReservations = async () =>{
    const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reservations?user_id=${this.props.user.id}`)
    const parsed_data = await data.json()
    parsed_data.message ? this.setState({message: parsed_data.message}) : this.createReservationState(parsed_data)
  }

  createReservationState = reservations => {
    for (let reservation of reservations) {
      reservation.seller_id.id == this.props.user.id ? this.setState({soldReservations:[...this.state.soldReservations, reservation]}) : this.setState({boughtReservations: [...this.state.boughtReservations, reservation]})
    }
  }

  componentDidMount(){
    this.fetchUserReservations()
  }

  componentDidUpdate(prevProps, prevState){
    if ((prevState.editingReservation === true) && (this.state.editingReservation === false)){
      this.setState({boughtReservations: [],
      soldReservations: []})
      this.fetchUserReservations()
    }
  }

  render(){
    return <div>
      <h1>Welcome {this.props.user ? this.props.user.username : 'stranger'} to your profile page! Isn't it lovely?</h1>
      <Button onClick={() => this.setState({editingAccount: true})}>Edit Account Info</Button>
      <Button icon='add' onClick={() => this.setState({creatingReservation: true})}></Button>
      {this.state.message.length > 0 ?
      <div>
         {this.state.message}
      </div>
      :
      this.state.editingAccount ?
      <EditAccount userId={this.props.user.id} setEditAccount={this.setEditAccount}/> :
      this.state.creatingReservation ?
      <CreateReservation userId={this.props.user.id} setCreatingReservation={this.setCreatingReservation}/> :
      <UserReservations setEditingReservation={this.setEditingReservation} boughtReservations={this.state.boughtReservations} soldReservations={this.state.soldReservations}/>
      }
    </div>
  }
}

export default UserProfile
