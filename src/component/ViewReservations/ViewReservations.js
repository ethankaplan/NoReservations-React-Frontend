import React, {Component} from 'react'
import Calendar from 'react-calendar';
import ReservationCard from '../ReservationCard/ReservationCard'

class ViewReservations extends Component{
    state={
        
    }

   
    componentDidMount(){
        this.props.populateReservations()
    }

   
    


    render(){
        
        let allResults=null
        
        if(this.props.allReservations[0]&&this.props.selected!=-1){
        
            console.log(this.props.allReservations[0])
       
        allResults = this.props.allReservations.map((res)=>{
            
            return <div style={{overflow:'auto', maxWidth:'25vh'}} key={`card${res.id}`}><ReservationCard reservation={res} key={res.id} buyable={true} currentUser={this.props.currentUser}
            
            /></div>
           
            
        })
        
    }else if(this.props.allReservations&&this.props.selected!=-1){
            allResults=<div>No reservations at this date </div>
        }else{
            allResults=<div>Please select a restaurant</div>
        }
        
        
        return(
            <div style={{overflow: 'auto', maxHeight: '90vh' }}>
                <Calendar
                    onChange={this.props.onDateChange}
                    value={this.props.date}
                    calendarType='US'
                    minDate={new Date()}
                    />
            {allResults}
            </div>
    )
}
}


export default ViewReservations
