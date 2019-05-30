import React, {Component} from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import EditReservationModal from '../UserProfile/EditReservationModal'
import ConfirmPurchase from './ConfirmPurchase'


class ReservationCard extends Component {
  render(){

    const {reservation} = this.props
    return (
      <Card fluid>
        <Image src={reservation.restaurant_id.image_url}></Image>
        <Card.Content>
          <Card.Header>{reservation.restaurant_id.name}</Card.Header>
          <Card.Meta>
            ${reservation.price}
          </Card.Meta>
          <Card.Meta>
            {reservation.date} @ {reservation.time}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {this.props.editable ?
            <EditReservationModal setEditingReservation={this.props.setEditingReservation} setOpen={this.setOpen} reservationId={reservation.id} />
            :
            null
          }
          {this.props.buyable&&this.props.currentUser ?
            <ConfirmPurchase name={reservation.restaurant_id.name} time={reservation.time}
            date={reservation.date} people={reservation.party_size} bought={this.props.bought} 
            reservationId={reservation.id} currentUser={this.props.currentUser}/>
            :
            null
          }
        </Card.Content>
      </Card>
    )
  }
}

export default ReservationCard
