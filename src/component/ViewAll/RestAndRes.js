import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import RestaurantList from './RestaurantList'
import ViewReservations from '../ViewReservations/ViewReservations'


class RestAndRes extends Component{
  state={
    selected:-1
  }

  sendID=async(id)=>{
    await this.setState({
      selected:id
    })
    console.log(id,this.state.selected)
  }

render(){
  return(
    <Grid columns={2} divided>
      <Grid.Column>
        <RestaurantList sendID={this.sendID}/>
      </Grid.Column>
      <Grid.Column>
        <ViewReservations selected={this.state.selected}/>
      </Grid.Column>
      </Grid>
  )
}}
export default RestAndRes
