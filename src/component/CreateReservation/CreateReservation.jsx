import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

class CreateReservation extends Component {
  state = {
    allRestaurants: [],
    time: "",
    date: "",
    restaurantId: "",
    sellerId: "",
    partySize: 0,
    price: 0
  }

  fetchRestaurants = async () => {
    const data = await fetch('process.env.REACT_APP_BACKEND_URL/api/v1/restaurants')
    const parsedData = await data.json()
    parsedData.forEach(restaurant => {
      const newRestaurant = {
        text: restaurant.name,
        value: restaurant.id
      }
      this.setState({
        allRestaurants: [...this.state.allRestaurants, newRestaurant]
      })
    })
  }

  createReservation = async () => {
    const newReservation = {
      seller_id: this.props.userId,
      time: this.state.time,
      date: this.state.date,
      party_size: this.state.partySize,
      price: this.state.price,
      restaurant_id: this.state.restaurantId
    }
    const data = await fetch('process.env.REACT_APP_BACKEND_URL/api/v1/reservations', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
    this.props.setCreatingReservation(false)
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  componentDidMount(){
    this.fetchRestaurants()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createReservation()
  }

  handleSelect = (e, value) => {
    this.setState({restaurantId: value})
  }

  render(){
    return(
      <Form style={{width: '80vw', margin: '0 auto'}} onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Party Size</label>
          <input type="number" min="1" onChange={this.handleChange} name="partySize" value={this.state.partySize}></input>
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input type="number" step="0.01" min="0.00" onChange={this.handleChange} name="price" value={this.state.price}></input>
        </Form.Field>
        <Form.Field>
          <label>Date in YYYY-MM-DD format</label>
          <input type="date" onChange={this.handleChange} name="date" value={this.state.date}></input>
        </Form.Field>
        <Form.Field>
          <label>Time in HH:MM format</label>
          <input type="time" onChange={this.handleChange} name="time" value={this.state.time}></input>
        </Form.Field>
        <Form.Select onChange={(e, {value}) => this.handleSelect(e, value)} label='Restaurants' placeholder='Restaurants' options={this.state.allRestaurants}/>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default CreateReservation
