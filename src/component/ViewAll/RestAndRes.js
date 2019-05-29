
import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Restaurants from './RestaurantList'
class RestAndRes extends Component{
render(){
  return(
    <Grid columns={2} divided>
      <Grid.Column>
        <Restaurants />
      </Grid.Column>
      <Grid.Column>
        TEST
      </Grid.Column>
      </Grid>
  )
}}
export default RestAndRes
