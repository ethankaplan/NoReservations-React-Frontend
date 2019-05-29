import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
class RestItem extends Component{
   
     render(){
    return (
        
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={`${this.props.restaurant.image_url}`} />
      </Grid.Column>
      <Grid.Column width={8}>
        <h2>{this.props.restaurant.name}</h2><br/>
        {this.props.restaurant.cuisine}<br/>
        {this.props.restaurant.phone}<br/> 
      </Grid.Column>
      <Grid.Column width={5}>
        {this.props.restaurant.address}
      </Grid.Column>
    </Grid.Row>
    
    )}
    
}
export default RestItem;

