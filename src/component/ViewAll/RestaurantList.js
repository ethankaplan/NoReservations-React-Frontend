import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import RestaurantItem from './RestaurantItem'
class RestaurantList extends Component{
    state={
        allRests:null
    }
    
    componentDidMount(){
        this.populateRests();
        console.log("thjrqebgierg")
    }
    
    populateRests=async()=>{
        let getAllRests = await fetch('http://localhost:9000/api/v1/restaurants') ;
         
        this.setState({
            allRests:await getAllRests.json()
        })
    }
   




    render(){


        
        console.log(this.state.allRests)
        let allResults=null
        if(this.state.allRests){
        allResults = this.state.allRests.map((rest)=>{
            return <div><RestaurantItem img={rest.image_url} 
            name={rest.name} cuisine={rest.cuisine} phone={rest.phone}
            address={rest.address}
            /></div>
        })
    }
        
        return(
            <Grid celled>
               
               {allResults}
            
            </Grid>
    )
}
}


export default RestaurantList
