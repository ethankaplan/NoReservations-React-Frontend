import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'
class RestItem extends Component{
   
     render(){
    return (
        
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={`${this.props.img}`} />
      </Grid.Column>
      <Grid.Column width={8}>
        <h2>{this.props.bane}</h2><br/>
        {this.props.cuisine}<br/>
        {this.props.phone}<br/> 
      </Grid.Column>
      <Grid.Column width={5}>
        {this.props.address}
      </Grid.Column>
    </Grid.Row>
    
    )}
    
}
export default RestItem;
