import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import IncomingModal from '../IncomingUser/IncomingModal'
import * as routes from '../../constants/routes'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component{
    state={
        
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
     
    logout=async()=>{
        console.log("logout")
        const logoutResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/logout`,{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify({}),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        this.props.clearCurrentUser()
    }
    
    
    render(){
        const { activeItem } = this.state
        return(
<Menu>
        <NavLink exact activeClassName="selected" to={routes.HOME}>
            <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            >
          Home
        </Menu.Item></NavLink>
        <NavLink to={routes.USER} activeClassName="selected">
            <Menu.Item name='User' active={activeItem === 'User'} onClick={this.handleItemClick}>
            My Account
        </Menu.Item></NavLink>

        <NavLink to={routes.RESTR} activeClassName="selected">
            <Menu.Item
            name='Restaurants'
            active={activeItem === 'Restaurants'}
            onClick={this.handleItemClick}
            >
            Restaurants
            </Menu.Item></NavLink>

            {
            this.props.currentUser?
                <Menu.Item
                position='right'
                name='Logout'
                onClick={this.logout}
                >LOGOUT</Menu.Item>:
                <Menu.Item
                    position='right'
                    name='Login or Register'
                    onClick={this.handleItemClick}
                >
              <IncomingModal doSetCurrentUser={this.props.doSetCurrentUser}/></Menu.Item>
            }

      </Menu>

        )
    }


}
export default NavBar