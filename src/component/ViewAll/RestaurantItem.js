import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'

class RestItem extends Component{

  state= {
    clicked: false
  }

    render(){
    return (
      <Grid celled onClick={() => {this.props.setClicked(this.props.index)}} style={{cursor:'pointer'}}>
        <Grid.Row color={(this.props.clicked === this.props.index)  ? 'grey' : null}>
          <Grid.Column width={3}>
            <Image src={`${this.props.img}`} />
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>{this.props.name}</h2>
            {this.props.cuisine}<br/>
            {this.props.phone}<br/>
          </Grid.Column>
          <Grid.Column width={5}>
            {this.props.address}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default RestItem;
