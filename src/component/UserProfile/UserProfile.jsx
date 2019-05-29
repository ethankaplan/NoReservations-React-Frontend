import React, {Component} from 'react'

const userID = 1

class UserProfile extends Component {
  state = {
    boughtReservations: [],
    soldReservations: [],
    message: ''
  }

  fetchUserReservations = async () =>{
    const data = await fetch(`http://localhost:9000/api/v1/reservations?user_id=${userID}`)
    const parsed_data = await data.json()
    parsed_data.message ? this.setState({message: parsed_data.message}) : this.createReservationState(parsed_data)
    console.log(parsed_data)
  }

  createReservationState = reservations => {
    for (let reservation of reservations) {
      reservation.seller_id == userID ? this.setState({soldReservations:[...this.state.soldReservations, reservation]}) : this.setState({boughtReservations: [...this.state.boughtReservations, reservation]})
    }
  }

  componentDidMount(){
    this.fetchUserReservations()
  }

  render(){
    return <div>
      <div>
        {this.state.message.length > 0 ? this.state.message : null}
      </div>
      <div>
        {this.state.soldReservations.length > 0 ? this.state.soldReservations.map(reservation => <h2>{reservation.time}</h2>) : null}
      </div>
      <div>
        {this.state.boughtReservations.length > 0 ? this.state.boughtReservations.map(reservation => <h2>{reservation.time}</h2>) : null}
      </div>
    </div>
  }
}

export default UserProfile
