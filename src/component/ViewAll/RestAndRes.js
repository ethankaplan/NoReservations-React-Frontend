import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import RestaurantList from './RestaurantList'
import ViewReservations from '../ViewReservations/ViewReservations'


class RestAndRes extends Component{
  state={
    selected:-1,
    allReservations:[],
    date:new Date(),
    dateString:(new Date()).toISOString().substring(0,10),
    message:""
  }

  sendID=async(id)=>{
     await this.setState({
      selected:id
    })
    this.populateReservations();
    
  }

  onDateChange = async(date) => {
    let newDate = date.toISOString();
    newDate=newDate.substring(0,10);
    await this.setState({ 
      dateString:newDate,
      date }) 
    this.populateReservations()
}

populateReservations=async()=>{
    let getAllReserves = await fetch(`http://localhost:9000/api/v1/reservations?restaurant_id=${this.state.selected}&date=${this.state.dateString}`) ;
    

    this.setState({
        allReservations:await getAllReserves.json()
    })
  
}

render(){
  return(
    <Grid columns={2} divided>
      <Grid.Column>
        <RestaurantList sendID={this.sendID} populateReservations={this.populateReservations}/>
      </Grid.Column>
      <Grid.Column>
        <ViewReservations selected={this.state.selected} onDateChange={this.onDateChange} date={this.state.date} allReservations={this.state.allReservations} populateReservations={this.populateReservations} currentUser={this.props.currentUser}/>
      </Grid.Column>
      </Grid>
  )
}}
export default RestAndRes
