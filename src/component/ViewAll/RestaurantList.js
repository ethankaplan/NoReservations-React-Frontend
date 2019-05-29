import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import RestaurantItem from './RestaurantItem'

class RestaurantList extends Component{
    state={
        allRests:null
    }
    
    componentDidMount(){
        this.populateRests();
       
    }
    
    populateRests=async()=>{
        let getAllRests = await fetch('http://localhost:9000/api/v1/restaurants') ;
         
        this.setState({
            allRests:await getAllRests.json()
        })
    }
   




    render(){


        
       
        let allResults=null
        if(this.state.allRests){
        allResults = this.state.allRests.map((rest)=>{
            return <div onClick={()=>this.props.sendID(rest.id)}><RestaurantItem img={rest.image_url} 
            name={rest.name} cuisine={rest.cuisine} phone={rest.phone}
            address={rest.address} key={rest.id}
            
            /></div>
        })
    }
        
        return(
            
               <div style={{overflow: 'auto', maxHeight: '90vh' }}>
               {allResults}
               </div>
            
    )
}
}


export default RestaurantList
