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
            <NavLink to={routes.USER} activeClassName="selected">My Account </NavLink>
            <NavLink to={routes.RESTR} activeClassName="selected">Restaurants </NavLink>
            {
            this.props.currentUser?
                <span>LOGOUT</span>:
              <IncomingUser doSetCurrentUser={this.props.doSetCurrentUser}/>
            }
            
           
          </div>
        )
    }


}
export default NavBar