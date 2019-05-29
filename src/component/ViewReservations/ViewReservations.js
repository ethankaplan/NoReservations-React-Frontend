import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import Calendar from 'react-calendar';
import RestaurantItem from './RestaurantItem'
class ViewReservations extends Component{
    state={
        allReservations:null,
        date:new Date()
    }
    onDateChange = date => this.setState({ date })
    async componentDidMount(){
        let getAllRests = await fetch('http://localhost:9000/restaurants') ;
        this.setState({
            allRests:getAllRests
        })
    }
    
   




    render(){
        console.log(this.state.allRests)
        let allResults=null
       
        allResults = this.state.allRests.map((rest)=>{
            return <RestaurantItem restaurant={rest}/>
        })
        
        
        return(
            <Grid celled>
               <Grid.Row>
                   <Calendar onChange={this.onChange} value={this.state.date}/>
               </Grid.Row>
              <Grid.Row>

              </Grid.Row>
            
            </Grid>
    )
}
}


export default ViewReservations
