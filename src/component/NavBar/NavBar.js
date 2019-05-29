import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import IncomingUser from '../IncomingUser/IncomingModal'
import * as routes from '../../constants/routes'


class NavBar extends Component{
    state={
        
    }

    
    
    
    
    render(){
        return(
            <div>
            <h5>NAVBAR</h5>
            
            <NavLink exact activeClassName="selected" to={routes.HOME}>HOME</NavLink>
            <NavLink to={routes.USERS} activeClassName="selected">My Account </NavLink>
            <NavLink to={routes.POSTS} activeClassName="selected">POSTS </NavLink>
            {
              <IncomingUser/>
            }
            
           
          </div>
        )
    }


}
export default NavBar