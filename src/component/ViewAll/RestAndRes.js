import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Restaurants from './RestaurantList'


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
        <Restaurants sendID={this.sendID}/>
      </Grid.Column>
      <Grid.Column>
        TEST
      </Grid.Column>
      </Grid>
  )
}}
export default RestAndRes
