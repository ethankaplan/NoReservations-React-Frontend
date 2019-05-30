import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import EditReservationModal from '../UserProfile/EditReservationModal'

class ReservationCard extends Component {
  render(){
    const {reservation} = this.props
    return (
      <Card>
        <Image src={reservation.restaurant_id.image_url}></Image>
        <Card.Content>
          <Card.Header>{reservation.restaurant_id.name}</Card.Header>
          <Card.Meta>
            ${reservation.price}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {reservation.date} @ {reservation.time}
        </Card.Content>
      </Card>
    )
  }
}

export default ReservationCard
