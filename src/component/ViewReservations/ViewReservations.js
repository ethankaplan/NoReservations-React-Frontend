import React, {Component} from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Calendar from 'react-calendar';
import { async } from 'q';

class ViewReservations extends Component{
    state={
        allReservations:[],
        date:new Date(),
        dateString:(new Date()).toISOString().substring(0,10),
        message:""
    }
    onDateChange = async(date) => {
        let newDate = date.toISOString();
        newDate=newDate.substring(0,10);
        await this.setState({ dateString:newDate,
        date }) 
        this.populateReservations()
}



    async componentDidMount(){
        console.log("here")
        this.populateReservations();
    }
    
    populateReservations=async()=>{
        let getAllReserves = await fetch(`http://localhost:9000/api/v1/reservations?restaurant_id=${this.props.selected}&date=${this.state.dateString}`) ;
        

        this.setState({
            allReservations:await getAllReserves.json()
        })
        
    }
   
    componentDidMount(){
        this.populateReservations()
    }




    render(){
        
        let allResults=null
        
        if(this.state.allReservations[0]&&this.props.selected!=-1){
        
            console.log(this.state.allReservations[0])
       
        allResults = <div><h2>{this.state.allReservations[0].restaurant_id.name}</h2></div>
        this.state.allReservations.map((res)=>{
            
            return (<div>
                <Card>
                    <Card.Content>
                    <Card.Header>{res.time}</Card.Header>
                    <Card.Description>
                        Party size:{res.party_size}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='dollar sign' />
                            {res.price}
                        </a>
                    </Card.Content>
                </Card>

            </div>)
           
            
        })
        
    }else if(this.state.allReservations&&this.props.selected!=-1){
            allResults=<div>No reservations at this date </div>
        }else{
            allResults=<div>Please select a restaurant</div>
        }
        
        
        return(
            <div style={{overflow: 'auto', maxHeight: '90vh' }}>
                <Calendar
                    onChange={this.onDateChange}
                    value={this.state.date}
                    calendarType='US'
                    minDate={new Date()}
                    />
            {allResults}
            </div>
    )
}
}


export default ViewReservations
