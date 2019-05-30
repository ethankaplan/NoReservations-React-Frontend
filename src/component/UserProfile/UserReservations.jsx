import React, {Component} from 'react'
import {Grid, Icon, Card, Image} from 'semantic-ui-react'
import EditReservationModal from './EditReservationModal'
import ReservationCard from '../ReservationCard/ReservationCard'


class UserReservations extends Component {

  render(){
    const {soldReservations, boughtReservations} = this.props
    return(
      <Grid columns={2} divided>
        <Grid.Column>
          <h2>Reservations Sold</h2>
          <Card.Group>
            {soldReservations.length > 0 ? soldReservations.map((reservation, i) =>
              <ReservationCard key={i} reservation={reservation} />
            )
              : null}
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <h2>Reservations Bought</h2>
          <Card.Group>
            {boughtReservations.length > 0 ? boughtReservations.map((reservation, i) =>
              <ReservationCard key={i} reservation={reservation} />
            )
              : null}
          </Card.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default UserReservations
